const upperSettings = {
  extFlexAmount: Math.PI / 2, // 90 deg 
  extFlexUpper: () => {
    myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = 0.52; // 30 deg
    
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = upperSettings.extFlexAmount; 
  },
  
  abductionAmount: 1.57,
  abductionUpper: () => {
    myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = -0.87 // 50 deg
    
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = upperSettings.abductionAmount;
  },

  horizAbductionAmount: -1,
  horizAbductionUpper: () => {
    myModel.modelSkeleton.getBoneByName('handR').rotation.y = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 1.745; // 100 deg
    
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = upperSettings.horizAbductionAmount;
  },
}

function initUpperLimb(gui) {
  const upperFolder = gui.addFolder('Upper Limb');

  upperFolder.add(upperSettings, 'extFlexAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.extFlexUpper() }).name('Extension/Flexion');
  upperFolder.add(upperSettings, 'abductionAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.abductionUpper() }).name('Adduction/Abduction');
  upperFolder.add(upperSettings, 'horizAbductionAmount', -1 , 0.61, 0.01).onChange(() => { upperSettings.horizAbductionUpper() });
}
