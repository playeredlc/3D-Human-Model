let movementController;
const painSpotSettings = {
  addPainSpot: () => { startInsertion(); },
  removeLastPainSpot: () => { removeLastMark(); },
  savePainSpot: () => { savePs(); console.log(savedPainSpots); },
  bodyPart: 'None',
  movement: '',
  movementList: [],
}

function initInsertPainSpot(gui) {
  const painSpotFolder = gui.addFolder('Insert Pain Spot');
  const painMovFolder = painSpotFolder.addFolder('Set movement causing the pain');
  painMovFolder.open();
  
  
  painMovFolder
  .add(painSpotSettings, 'bodyPart')
  .options(['None', 'Head', 'Torso', 'Upper Limb', 'Lower Limb'])
  .name('Select body part')
  .onChange(
    () => {
      updateAvailableMov(painSpotSettings.bodyPart, painMovFolder);
    }
    );
    
  painSpotFolder.add(painSpotSettings, 'addPainSpot').name('Add mark');
  painSpotFolder.add(painSpotSettings, 'removeLastPainSpot').name('Remove last mark');
  painSpotFolder.add(painSpotSettings, 'savePainSpot').name('Save');

}

// **
// MOVEMENT LIST ACCORDING TO BODYPART
// **
function updateAvailableMov(bodyPart, folder) {  
  if(bodyPart === 'None') {
    if(movementController) {
      movementController.remove();
      movementController = undefined;
    }
  } else {
    painSpotSettings.movementList = movements[_.camelCase(bodyPart)];
    painSpotSettings.movement = painSpotSettings.movementList[0];
    if(movementController) {
      movementController.remove();
    }
    movementController = folder.add(painSpotSettings, 'movement').options(painSpotSettings.movementList).name('Select Movement');
  }
}
