const headSettings = {
  extFlexAmount: 1,
  extFlexHead: (amount) => {
  myModel.modelSkeleton.getBoneByName('spine004').rotation.x = amount;  
  },

  latFlexAmount: 0,
  latFlexHead: (amount) => {
    myModel.modelSkeleton.getBoneByName('spine004').rotation.z = amount;
    myModel.modelSkeleton.getBoneByName('spine005').rotation.z = amount * 2;
  },
}

function initHead(gui) {
  const headFolder = gui.addFolder('Head');

  headFolder.add(headSettings, 'extFlexAmount', 0, 1.8, 0.01).onChange(() => { headSettings.extFlexHead(headSettings.extFlexAmount) }).name('Extension/Flexion');
  headFolder.add(headSettings, 'latFlexAmount', -0.3, 0.3, 0.01).onChange(() => {headSettings.latFlexHead(headSettings.latFlexAmount) }).name('Lateral Flexion');
}