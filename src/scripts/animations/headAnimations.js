var animation = {
 
  ... animation,
  
  head: {
    extensionFlexion: () => {
      const lowerBound = 0;
      const upperBound = 1.8;
      
      animation.move(
        lowerBound,
        upperBound,
        headSettings,
        'extFlexAmount',
        headSettings.extFlexHead
      );  
    },

    lateralFlexion: () => {
      const lowerBound = -0.3;
      const upperBound = 0.3;
      
      animation.move(
        lowerBound,
        upperBound,
        headSettings,
        'latFlexAmount',
        headSettings.latFlexHead
      );
    },

    rotation: () => {
      const lowerBound = -0.3;
      const upperBound = 0.3;

      animation.move(
        lowerBound,
        upperBound,
        headSettings,
        'rotationAmount',
        headSettings.rotateHead
      );
    },
  },

};
