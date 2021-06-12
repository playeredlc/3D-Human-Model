const lowerSettings = {
  hip: {
    extFlexAmount: Math.PI,
    extFlexHip: () => {
      if(nowMoving === 'extFlexHip') {
        myModel.modelSkeleton.getBoneByName('thighR').rotation.x = lowerSettings.hip.extFlexAmount;
      } else {
        nowMoving='extFlexHip';
      }
    },
  },
  
  knee: {
    extFlexAmount: Math.PI/2,
    extFlexKnee: () => {
      if(nowMoving === 'extFlexKnee') {
        myModel.modelSkeleton.getBoneByName('shinR').rotation.x = lowerSettings.knee.extFlexAmount;
      } else {
        nowMoving='extFlexKnee';
        myModel.modelSkeleton.getBoneByName('thighR').rotation.x = Math.PI/2;
        myModel.modelSkeleton.getBoneByName('shinR').rotation.x = Math.PI/2;
      }
    },
  },

  ankle: {
    plantarFlexAmount: -1.22,
    plantarFlex: () => {
      if(nowMoving === 'plantarFlex') {
        myModel.modelSkeleton.getBoneByName('footR').rotation.x = lowerSettings.ankle.plantarFlexAmount;
      } else {
        nowMoving='plantarFlex';
        myModel.modelSkeleton.getBoneByName('thighR').rotation.x = Math.PI/2;
        myModel.modelSkeleton.getBoneByName('shinR').rotation.x = Math.PI/2;
      }

    }
  },
}

function initLowerLimb(gui) {
  const lowerFolder = gui.addFolder('Lower Limb');

  lowerFolder.add(lowerSettings.hip, 'extFlexAmount', Math.PI/2, Math.PI + (0.26), 0.01).onChange(() => { lowerSettings.hip.extFlexHip() }).name('Hip Ext/Flex');
  lowerFolder.add(lowerSettings.knee, 'extFlexAmount', 0, (Math.PI/2 + 1.13), 0.01).onChange(() => { lowerSettings.knee.extFlexKnee() }).name('Knee Ext/Flex');
  lowerFolder.add(lowerSettings.ankle, 'plantarFlexAmount', -Math.PI/2, -0.52, 0.01).onChange(() => { lowerSettings.ankle.plantarFlex() }).name('Plantar/Dorsiflexion');
}