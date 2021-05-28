const torsoSettings = {
  extFlexAmount: 0,
  extFlexTorso: (amount) => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = Math.PI;
    myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = Math.PI;
    
    myModel.modelSkeleton.getBoneByName('spine001').rotation.x = amount;
  },
}

function initTorso(gui) {
  const torsoFolder = gui.addFolder('Torso');
  
  torsoFolder.add(torsoSettings, 'extFlexAmount', -1, 1, 0.01).onChange(() => { torsoSettings.extFlexTorso(torsoSettings.extFlexAmount) });

}