//**
// UPDATE PAIN SPOT LIST
//**
function updatePsCount(){
  viewPainSpotSettings.total++;
  const psName = 'Pain Spot ' + (viewPainSpotSettings.total);
  viewPainSpotSettings.painSpotList.push(psName);
  viewPainSpotSettings.selectPainSpot = viewPainSpotSettings.painSpotList[0];
  updatePsViewController();
}

function discardUnsavedChanges() {
  if(tempPainSpots.length > 0) {
    // discard unsaved changes
    for(i=0; i<tempPainSpots.length; i++) {
      removeLastMark();
    }
  }
}

//**
// MANAGE VIEWING MODE
//**
function startViewingMode() {
  if(viewPainSpotSettings.isViewing === true) {
    quitViewingMode();
  }

  if(!viewPainSpotSettings.selectPainSpot) {
    alert('Select pain spot!')
  } else {
    viewPainSpotSettings.isViewing = true;
    controls.autoRotate= true;
    discardUnsavedChanges();
    remakePainSpot();
    startAnimation();
  }
}
function quitViewingMode() {
  removePainSpot();
  viewPainSpotSettings.isViewing = false;
  controls.autoRotate= false;
}

//**
// RE-INSERT A SAVED PAIN SPOT
//**
function remakePainSpot() {
  const selectedIndex = viewPainSpotSettings.painSpotList.indexOf(viewPainSpotSettings.selectPainSpot);
  const ps = savedPainSpots[selectedIndex];
  viewPainSpotSettings.actualIndex = selectedIndex;
  let sprite;
  
  myModel.modelSkeleton.pose();

  ps.forEach(painMark => {
    sprite = createSprite(painMark.position);
    attachSpriteToBone(sprite, painMark.boneName);
  });
}

//**
// REMOVE ALL PAIN MARKS
//**
function removePainSpot() {
  if(viewPainSpotSettings.isViewing) {
    const ps = savedPainSpots[viewPainSpotSettings.actualIndex];
    let bone;
    ps.forEach(painMark => {
      bone = myModel.modelSkeleton.getBoneByName(painMark.boneName);
      bone.children.forEach((object, index) => {
        if(object.type === "Sprite") {
          bone.children.splice(index, 1);
        }
      });
    });
  }
}