const headSettings = {
  extFlexAmount: 1,
  extFlexHead: (amount) => {
  myModel.modelSkeleton.getBoneByName('spine004').rotation.x = amount;  
  },
}

function initHead(gui) {
  const headFolder = gui.addFolder('Head');

  headFolder.add(headSettings, 'extFlexAmount', 0, 1.8, 0.01).onChange(() => { headSettings.extFlexHead(headSettings.extFlexAmount) }).name('Extension/Flexion');

}