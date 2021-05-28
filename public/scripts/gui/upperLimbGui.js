const upperSettings = {
  abductionAmount: 1.57,
  abductionUpper: (amount) => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = amount;
  },
}

function initUpperLimb(gui) {
  const upperFolder = gui.addFolder('Upper Limb');

  upperFolder.add(upperSettings, 'abductionAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.abductionUpper(upperSettings.abductionAmount) }).name('Adduction/Abduction');

}
