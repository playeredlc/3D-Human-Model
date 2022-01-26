const lowerSettings = {
  right: {   
    hip: {
      extFlexAmount: Math.PI,
      extFlexHip: () => {
        if(nowMoving === 'rightExtFlexHip') {
          myModel.modelSkeleton.getBoneByName('thighR').rotation.x = lowerSettings.right.hip.extFlexAmount;
        } else {
          nowMoving='rightExtFlexHip';
        }
      },
    },
    
    knee: {
      extFlexAmount: Math.PI/2,
      extFlexKnee: () => {
        if(nowMoving === 'rightExtFlexKnee') {
          myModel.modelSkeleton.getBoneByName('shinR').rotation.x = lowerSettings.right.knee.extFlexAmount;
        } else {
          nowMoving='rightExtFlexKnee';
          myModel.modelSkeleton.getBoneByName('thighR').rotation.x = Math.PI/2;
          myModel.modelSkeleton.getBoneByName('shinR').rotation.x = Math.PI/2;
        }
      },
    },

    ankle: {
      plantarFlexAmount: -1.22,
      plantarFlex: () => {
        if(nowMoving === 'rightPlantarFlex') {
          myModel.modelSkeleton.getBoneByName('footR').rotation.x = lowerSettings.right.ankle.plantarFlexAmount;
        } else {
          nowMoving='rightPlantarFlex';
          myModel.modelSkeleton.getBoneByName('thighR').rotation.x = Math.PI/2;
          myModel.modelSkeleton.getBoneByName('shinR').rotation.x = Math.PI/2;
        }
      },
    },
  },

  left: {
    hip: {
      extFlexAmount: Math.PI,
      extFlexHip: () => {
        if(nowMoving === 'leftExtFlexHip') {
          myModel.modelSkeleton.getBoneByName('thighL').rotation.x = lowerSettings.left.hip.extFlexAmount;
        } else {
          nowMoving='leftExtFlexHip';
        }
      },
    },
    
    knee: {
      extFlexAmount: Math.PI/2,
      extFlexKnee: () => {
        if(nowMoving === 'leftExtFlexKnee') {
          myModel.modelSkeleton.getBoneByName('shinL').rotation.x = lowerSettings.left.knee.extFlexAmount;
        } else {
          nowMoving='leftExtFlexKnee';
          myModel.modelSkeleton.getBoneByName('thighL').rotation.x = Math.PI/2;
          myModel.modelSkeleton.getBoneByName('shinL').rotation.x = Math.PI/2;
        }
      },
    },

    ankle: {
      plantarFlexAmount: -1.22,
      plantarFlex: () => {
        if(nowMoving === 'leftPlantarFlex') {
          myModel.modelSkeleton.getBoneByName('footL').rotation.x = lowerSettings.left.ankle.plantarFlexAmount;
        } else {
          nowMoving='leftPlantarFlex';
          myModel.modelSkeleton.getBoneByName('thighL').rotation.x = Math.PI/2;
          myModel.modelSkeleton.getBoneByName('shinL').rotation.x = Math.PI/2;
        }
      },
    },
  },
}

function initLowerLimb(gui) {
  const lowerFolder = gui.addFolder('Lower Limb');
  const lowerRightFolder = lowerFolder.addFolder('Right Side');
  const lowerLeftFolder = lowerFolder.addFolder('Left Side');

  // hip: ext/flex
  lowerRightFolder.add(lowerSettings.right.hip, 'extFlexAmount', Math.PI/2, Math.PI + (0.26), 0.01).onChange(() => { lowerSettings.right.hip.extFlexHip() }).name('Hip Ext/Flex');
  lowerLeftFolder.add(lowerSettings.left.hip, 'extFlexAmount', Math.PI/2, Math.PI + (0.26), 0.01).onChange(() => { lowerSettings.left.hip.extFlexHip() }).name('Hip Ext/Flex');
  // knee: ext/flex
  lowerRightFolder.add(lowerSettings.right.knee, 'extFlexAmount', 0, (Math.PI/2 + 1.13), 0.01).onChange(() => { lowerSettings.right.knee.extFlexKnee() }).name('Knee Ext/Flex');
  lowerLeftFolder.add(lowerSettings.left.knee, 'extFlexAmount', 0, (Math.PI/2 + 1.13), 0.01).onChange(() => { lowerSettings.left.knee.extFlexKnee() }).name('Knee Ext/Flex');
  // ankle: plantar flexion
  lowerRightFolder.add(lowerSettings.right.ankle, 'plantarFlexAmount', -Math.PI/2, -0.52, 0.01).onChange(() => { lowerSettings.right.ankle.plantarFlex() }).name('Plantar/Dorsiflexion');
  lowerLeftFolder.add(lowerSettings.left.ankle, 'plantarFlexAmount', -Math.PI/2, -0.52, 0.01).onChange(() => { lowerSettings.left.ankle.plantarFlex() }).name('Plantar/Dorsiflexion');
}
