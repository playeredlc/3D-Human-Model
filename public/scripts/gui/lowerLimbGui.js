const lowerSettings = {
  hip: {
    extFlexAmount: Math.PI,
    extFlexHip: () => {
      myModel.modelSkeleton.getBoneByName('thighR').rotation.x = lowerSettings.hip.extFlexAmount;
    },
  },
}


function initLowerLimb(gui) {
  const lowerFolder = gui.addFolder('Lower Limb');

  lowerFolder.add(lowerSettings.hip, 'extFlexAmount', Math.PI/2, Math.PI + (0.26), 0.01).onChange(() => { lowerSettings.hip.extFlexHip() }).name('Hip Ext/Flex');
  
}