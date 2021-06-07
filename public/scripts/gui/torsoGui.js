const torsoSettings = {
  extFlexAmount: 0,
  extFlexTorso: () => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = Math.PI;
    myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = Math.PI;
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = 0.16; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg
    myModel.modelSkeleton.getBoneByName('forearmL').rotation.z = 0.105; // 6 deg    
    
    myModel.modelSkeleton.getBoneByName('spine001').rotation.x = torsoSettings.extFlexAmount;
  },

  latExtAmount: 0,
  latExtTorso: () => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 2.35; // 135 deg
    myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -2.35;
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = 0.16; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg

    myModel.modelSkeleton.getBoneByName('spine001').rotation.z = torsoSettings.latExtAmount;
    myModel.modelSkeleton.getBoneByName('spine002').rotation.z = torsoSettings.latExtAmount;
    myModel.modelSkeleton.getBoneByName('spine003').rotation.z = torsoSettings.latExtAmount;
  },

  rotationAmount: 0,
  rotationTorso: () => {
    myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 2.35; // 135 deg
    myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -2.35;
    myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = Math.PI / 2; // 10 deg
    myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = Math.PI / 2; // 10 deg

    myModel.modelSkeleton.getBoneByName('spine001').rotation.y = torsoSettings.rotationAmount;
    myModel.modelSkeleton.getBoneByName('spine002').rotation.y = torsoSettings.rotationAmount;
    myModel.modelSkeleton.getBoneByName('spine003').rotation.y = torsoSettings.rotationAmount;
  },
}

function initTorso(gui) {
  const torsoFolder = gui.addFolder('Torso');
  
  torsoFolder.add(torsoSettings, 'extFlexAmount', -1, 1, 0.01).onChange(() => { torsoSettings.extFlexTorso() }).name('Extension/Flexion');
  torsoFolder.add(torsoSettings, 'latExtAmount', -0.26, 0.26, 0.01).onChange(() => { torsoSettings.latExtTorso() }).name('Lateral Flexion');
  torsoFolder.add(torsoSettings, 'rotationAmount', -0.34, 0.34, 0.01).onChange(() => { torsoSettings.rotationTorso() });
}