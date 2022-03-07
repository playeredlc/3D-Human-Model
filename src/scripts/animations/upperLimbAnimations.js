var animation = {

  ... animation,

  upperLimb: {
    rExtensionFlexion: () => {
      const lowerBound = 0.33;
      const upperBound = Math.PI;
      
      animation.move(
        lowerBound,
        upperBound,
        upperSettings.right,
        'extFlexAmount',
        upperSettings.right.extFlexUpper
      );
    },

    lExtensionFlexion: () => {
      const lowerBound = 0.33;
      const upperBound = Math.PI;
      
      animation.move(
        lowerBound,
        upperBound,
        upperSettings.left,
        'extFlexAmount',
        upperSettings.left.extFlexUpper
      );
    },    

    rAdductionAbduction: () => {
      const lowerBound = 0.33;
      const upperBound = Math.PI;

      animation.move(
        lowerBound,
        upperBound,
        upperSettings.right,
        'abductionAmount',
        upperSettings.right.abductionUpper,
      );
    },

    lAdductionAbduction: () => {
      const lowerBound = 0.33;
      const upperBound = Math.PI;

      animation.move(
        lowerBound,
        upperBound,
        upperSettings.left,
        'abductionAmount',
        upperSettings.left.abductionUpper,
      );
    },

    rHorizontalAdductionAbduction: () => {
      const lowerBound = -1;
      const upperBound = 0.61;

      animation.move(
        lowerBound,
        upperBound,
        upperSettings.right,
        'horizAbductionAmount',
        upperSettings.right.horizAbductionUpper,
      );
    },

    lHorizontalAdductionAbduction: () => {
      const lowerBound = -1;
      const upperBound = 0.61;

      animation.move(
        lowerBound,
        upperBound,
        upperSettings.left,
        'horizAbductionAmount',
        upperSettings.left.horizAbductionUpper,
      );
    },

    rLateralMedialRotation: () => {
      const lowerBound = (-Math.PI/2);
      const upperBound = 1.30;

      animation.move(
        lowerBound,
        upperBound,
        upperSettings.right,
        'latRotationAmount',
        upperSettings.right.latRotationUpper,
      );
    },

    lLateralMedialRotation: () => {
      const lowerBound = (-Math.PI/2);
      const upperBound = 1.30;

      animation.move(
        lowerBound,
        upperBound,
        upperSettings.left,
        'latRotationAmount',
        upperSettings.left.latRotationUpper,
      );
    },
  },
};
