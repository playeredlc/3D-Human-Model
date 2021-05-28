const torsoSettings = {
  extFlexAmount: 0,
  extFlexTorso: (amount) => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = Math.PI;
    myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = Math.PI;
    
    myModel.modelSkeleton.getBoneByName('spine001').rotation.x = amount;
  },

  latExtAmount: 0,
  latExtTorso: (amount) => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 2.35; // 135 deg
    myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -2.35;

    myModel.modelSkeleton.getBoneByName('spine001').rotation.z = amount;
    myModel.modelSkeleton.getBoneByName('spine002').rotation.z = amount;
    myModel.modelSkeleton.getBoneByName('spine003').rotation.z = amount;
  },
}

function initTorso(gui) {
  const torsoFolder = gui.addFolder('Torso');
  
  torsoFolder.add(torsoSettings, 'extFlexAmount', -1, 1, 0.01).onChange(() => { torsoSettings.extFlexTorso(torsoSettings.extFlexAmount) }).name('Extension/Flexion');
  torsoFolder.add(torsoSettings, 'latExtAmount', -0.26, 0.26, 0.01).onChange(() => { torsoSettings.latExtTorso(torsoSettings.latExtAmount) }).name('Lateral Extension');

}