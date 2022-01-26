const upperSettings = {
  right: {
    extFlexAmount: Math.PI / 2, // 90 deg 
    extFlexUpper: () => {
      if(nowMoving === 'rightExtFlexUpper') {
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = upperSettings.right.extFlexAmount;
      } else {
        nowMoving='rightExtFlexUpper';
        myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = 0.52; // 30 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg
      }
  
    },
    abductionAmount: 1.57,
    abductionUpper: () => {
      if(nowMoving === 'rightAbductionUpper') {
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = upperSettings.right.abductionAmount;
      } else {
        nowMoving='rightAbductionUpper';
        myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = -0.87 // 50 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg
      }      
    },
    horizAbductionAmount: -1,
    horizAbductionUpper: () => {
      if(nowMoving === 'rightHorizAbductionUpper') {
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = upperSettings.right.horizAbductionAmount;        
      } else {
        nowMoving='rightHorizAbductionUpper';
        myModel.modelSkeleton.getBoneByName('handR').rotation.y = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 1.745; // 100 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = 0.16; // 10 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = -0.105; // 6 deg        
      }
    },
    latRotationAmount: 0,
    latRotationUpper: () => {
      if(nowMoving === 'rightLatRotationUpper') {
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.z = upperSettings.right.latRotationAmount; // 90 deg
      } else {
        nowMoving='rightLatRotationUpper';
        myModel.modelSkeleton.getBoneByName('handR').rotation.y = 0.345; // 20 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.x = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.y = -0.87; // 50 deg
        myModel.modelSkeleton.getBoneByName('upper_armR').rotation.z = 1.745; // 100 deg
        myModel.modelSkeleton.getBoneByName('forearmR').rotation.x = Math.PI / 2; // 90 deg
      }
    },
  },

  left: {
    extFlexAmount: Math.PI / 2, // 90 deg 
    extFlexUpper: () => {
      if(nowMoving === 'leftExtFlexUpper') {
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -(upperSettings.left.extFlexAmount);
      } else {
        nowMoving='leftExtFlexUpper';
        myModel.modelSkeleton.getBoneByName('handL').rotation.y = -0.345; // 20 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.x = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.y = -0.52; // 30 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = 0.16; // 10 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.z = 0.105; // 6 deg
      }  
    },
    abductionAmount: 1.57,
    abductionUpper: () => {      
      if(nowMoving === 'leftAbductionUpper') {
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -(upperSettings.left.abductionAmount);
      } else {
        nowMoving='leftAbductionUpper';
        myModel.modelSkeleton.getBoneByName('handL').rotation.y = -0.345; // 20 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.y = 0.87 // 50 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = 0.16; // 10 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.z = 0.105; // 6 deg
      }     
    },
    horizAbductionAmount: -1,
    horizAbductionUpper: () => {
      if(nowMoving === 'leftHorizAbductionUpper') {
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.y = -(upperSettings.left.horizAbductionAmount);        
      } else {
        nowMoving='leftHorizAbductionUpper';
        myModel.modelSkeleton.getBoneByName('handL').rotation.y = -(Math.PI / 2); // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.x = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -1.745; // 100 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = 0.16; // 10 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.z = 0.105; // 6 deg
      }      
    },
    latRotationAmount: 0,
    latRotationUpper: () => {
      if(nowMoving === 'leftLatRotationUpper') {
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.z = -(upperSettings.left.latRotationAmount); // 90 deg
      } else {
        nowMoving='leftLatRotationUpper';
        myModel.modelSkeleton.getBoneByName('handL').rotation.y = -0.345; // 20 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.x = Math.PI / 2; // 90 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.y = 0.87; // 50 deg
        myModel.modelSkeleton.getBoneByName('upper_armL').rotation.z = -1.745; // 100 deg
        myModel.modelSkeleton.getBoneByName('forearmL').rotation.x = Math.PI / 2; // 90 deg
      }
    },
  },
}

function initUpperLimb(gui) {
  const upperFolder = gui.addFolder('Upper Limb');
  const upperRightFolder = upperFolder.addFolder('Right Side');
  const upperLeftFolder = upperFolder.addFolder('Left Side');

  // extension/flexion
  upperRightFolder.add(upperSettings.right, 'extFlexAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.right.extFlexUpper() }).name('Extension/Flexion R');
  upperLeftFolder.add(upperSettings.left, 'extFlexAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.left.extFlexUpper() }).name('Extension/Flexion L');
  // adduction/abduction
  upperRightFolder.add(upperSettings.right, 'abductionAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.right.abductionUpper() }).name('Adduction/Abduction');
  upperLeftFolder.add(upperSettings.left, 'abductionAmount', 0.33, Math.PI, 0.01).onChange(() => { upperSettings.left.abductionUpper() }).name('Adduction/Abduction');
  // horizontal abduction
  upperRightFolder.add(upperSettings.right, 'horizAbductionAmount', -1 , 0.61, 0.01).onChange(() => { upperSettings.right.horizAbductionUpper() }).name('Horizontal Adduction/Abduction');
  upperLeftFolder.add(upperSettings.left, 'horizAbductionAmount', -1 , 0.61, 0.01).onChange(() => { upperSettings.left.horizAbductionUpper() }).name('Horizontal Adduction/Abduction');  
  // lateral rotation
  upperRightFolder.add(upperSettings.right, 'latRotationAmount', (-Math.PI/2), 1.30, 0.01).onChange(() => { upperSettings.right.latRotationUpper() }).name('Lateral/Medial Rotation');
  upperLeftFolder.add(upperSettings.left, 'latRotationAmount', (-Math.PI/2), 1.30, 0.01).onChange(() => { upperSettings.left.latRotationUpper() }).name('Lateral/Medial Rotation');
}
