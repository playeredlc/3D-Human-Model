const upperSettings = {
  right: {
    extFlexAmount: Math.PI / 2, // 90 deg 
    extFlexUpper: () => {
      myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
      myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
      myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = 0.52; // 30 deg
      myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
      myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg
  
      myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = upperSettings.right.extFlexAmount; 
    },
  },

  left: {
    extFlexAmount: Math.PI / 2, // 90 deg 
    extFlexUpper: () => {
      myModel.modelSkeleton.getBoneByName('handL').rotation.y = -0.345; // 20 deg
      myModel.modelSkeleton.getBoneByName('upper_armL').rotation.x = Math.PI / 2; // 90 deg
      myModel.modelSkeleton.getBoneByName('upper_armL').rotation.y = -0.52; // 30 deg
      myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = 0.16; // 10 deg
      myModel.modelSkeleton.getBoneByName('forearmL').rotation.z = 0.105; // 6 deg
  
      myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -(upperSettings.left.extFlexAmount);
    },
  },
  
  abductionAmount: 1.57,
  abductionUpper: () => {
    myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = -0.87 // 50 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg
    
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = upperSettings.abductionAmount;
  },

  horizAbductionAmount: -1,
  horizAbductionUpper: () => {
    myModel.modelSkeleton.getBoneByName('handR').rotation.y = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 1.745; // 100 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg
    
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = upperSettings.horizAbductionAmount;
  },

  latRotationAmount: 0,
  latRotationUpper: () => {
    myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = -0.87; // 50 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 1.745; // 100 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = Math.PI / 2; // 90 deg

    myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = upperSettings.latRotationAmount; // 90 deg
  },
}

function initUpperLimb(gui) {
  const upperFolder = gui.addFolder('Upper Limb');
  const upperRightFolder = upperFolder.addFolder('Right Side');
  const upperLeftFolder = upperFolder.addFolder('Left Side');

  upperRightFolder.add(upperSettings.right, 'extFlexAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.right.extFlexUpper() }).name('Extension/Flexion R');
  upperLeftFolder.add(upperSettings.left, 'extFlexAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.left.extFlexUpper() }).name('Extension/Flexion L');
  upperFolder.add(upperSettings, 'abductionAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.abductionUpper() }).name('Adduction/Abduction');
  upperFolder.add(upperSettings, 'horizAbductionAmount', -1 , 0.61, 0.01).onChange(() => { upperSettings.horizAbductionUpper() }).name('Horizontal Adduction/Abduction');
  upperFolder.add(upperSettings, 'latRotationAmount', (-Math.PI/2), 1.30, 0.01).onChange(() => { upperSettings.latRotationUpper() }).name('Lateral/Medial Rotation');
}
