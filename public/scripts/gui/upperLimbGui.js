const upperSettings = {
  extFlexAmount: Math.PI / 2, // 90 deg 
  extFlexUpper: (amount) => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = 0.52; // 30 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = amount;
  },
  
  abductionAmount: 1.57,
  abductionUpper: (amount) => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = -0.87 // 50 deg
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = amount;
  },
}

function initUpperLimb(gui) {
  const upperFolder = gui.addFolder('Upper Limb');

  upperFolder.add(upperSettings, 'extFlexAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.extFlexUpper(upperSettings.extFlexAmount) }).name('Extension/Flexion');
  upperFolder.add(upperSettings, 'abductionAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.abductionUpper(upperSettings.abductionAmount) }).name('Adduction/Abduction');

}
