const headSettings = {
  extFlexAmount: 1,
  extFlexHead: () => {
    myModel.modelSkeleton.getBoneByName('spine004').rotation.x = headSettings.extFlexAmount;  
  },

  latFlexAmount: 0,
  latFlexHead: () => {
    myModel.modelSkeleton.getBoneByName('spine004').rotation.z = headSettings.latFlexAmount;
    myModel.modelSkeleton.getBoneByName('spine005').rotation.z = headSettings.latFlexAmount * 2;
  },

  rotationAmount: 0,
  rotateHead: () => {
    myModel.modelSkeleton.getBoneByName('spine004').rotation.y = headSettings.rotationAmount;
    myModel.modelSkeleton.getBoneByName('spine005').rotation.y = headSettings.rotationAmount;
    myModel.modelSkeleton.getBoneByName('spine006').rotation.y = headSettings.rotationAmount;
  },
}

function initHead(gui) {
  const headFolder = gui.addFolder('Head');

  headFolder.add(headSettings, 'extFlexAmount', 0, 1.8, 0.01).onChange(() => { headSettings.extFlexHead() }).name('Extension/Flexion');
  headFolder.add(headSettings, 'latFlexAmount', -0.3, 0.3, 0.01).onChange(() => {headSettings.latFlexHead() }).name('Lateral Flexion');
  headFolder.add(headSettings, 'rotationAmount', -0.3, 0.3, 0.01).onChange(() => { headSettings.rotateHead() }).name('Rotation');
  
}