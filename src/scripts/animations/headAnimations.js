const headAnimation = {
  extFlex: () => {
    const lowerBound = 0;
    const upperBound = 1.8;
    const stepSize = 0.02;

    const animateForward = () => {
      
      var forwardId = setInterval(() => {        
        headSettings.extFlexAmount = headSettings.extFlexAmount + stepSize;
        headSettings.extFlexHead();
        console.log(headSettings.extFlexAmount);
  
        if(headSettings.extFlexAmount >= upperBound) {
          clearInterval(forwardId);
          animateBackward();
        }        
      }, 15);
    
    };

    const animateBackward = () => {

      var backwardId = setInterval(() => {
        headSettings.extFlexAmount = headSettings.extFlexAmount - stepSize;
        headSettings.extFlexHead()
        console.log(headSettings.extFlexAmount);
  
        if(headSettings.extFlexAmount <= lowerBound) {
          clearInterval(backwardId);
          animateForward();
        }
      }, 15);

    };

    animateForward();

  },
};
