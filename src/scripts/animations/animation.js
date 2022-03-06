var animation = {
  
  ... animation,

  move: (lowerBound, upperBound, stepSize, settingsObj, controllerProp, moveFunction) => {
    
    const animateForward = () => {

      var forwardId = setInterval(() => {
        settingsObj[controllerProp] = settingsObj[controllerProp] + stepSize;        
        moveFunction();
        
        if(!viewPainSpotSettings.isViewing) {
          clearInterval(forwardId);
          generalSettings.resetPosition();
          nowMoving = '';
        } else if( settingsObj[controllerProp] >= upperBound) {
          clearInterval(forwardId);
          animateBackward();
        }
          
      }, 15);

    };

    const animateBackward = () => {
      
      var backwardId = setInterval(() => {
        settingsObj[controllerProp] = settingsObj[controllerProp] - stepSize;
        moveFunction();
        
        if(!viewPainSpotSettings.isViewing) {
          clearInterval(backwardId);
          generalSettings.resetPosition();
          nowMoving = '';
        } else if(settingsObj[controllerProp] <= lowerBound) {
          clearInterval(backwardId);
          animateForward();
        }
      }, 15);

    };
    
    animateForward();

  },

};
