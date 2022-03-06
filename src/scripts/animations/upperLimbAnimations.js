var animation = {

  ... animation,

  upperLimb: {
    rExtensionFlexion: () => {
      const lowerBound = 0.33;
      const upperBound = Math.PI;
      const stepSize = 0.02;
      
      animation.move(
        lowerBound,
        upperBound,
        stepSize,
        upperSettings.right,
        'extFlexAmount',
        upperSettings.right.extFlexUpper
      );

    },
  },
};
