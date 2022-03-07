var animation = {

  ... animation,

  lowerLimb: {
    rHipExtFlex: () => {
      const lowerBound = Math.PI/2;
      const upperBound = Math.PI + (0.26);

      animation.move(
        lowerBound,
        upperBound,
        lowerSettings.right.hip,
        'extFlexAmount',
        lowerSettings.right.hip.extFlexHip,
      );
    },

    lHipExtFlex: () => {
      const lowerBound = Math.PI/2;
      const upperBound = Math.PI + (0.26);

      animation.move(
        lowerBound,
        upperBound,
        lowerSettings.left.hip,
        'extFlexAmount',
        lowerSettings.left.hip.extFlexHip,
      );
    },

    rKneeExtFlex: () => {
      const lowerBound = 0;
      const upperBound = (Math.PI/2 + 1.13);

      animation.move(
        lowerBound,
        upperBound,
        lowerSettings.right.knee,
        'extFlexAmount',
        lowerSettings.right.knee.extFlexKnee,
      );
    },

    lKneeExtFlex: () => {
      const lowerBound = 0;
      const upperBound = (Math.PI/2 + 1.13);

      animation.move(
        lowerBound,
        upperBound,
        lowerSettings.left.knee,
        'extFlexAmount',
        lowerSettings.left.knee.extFlexKnee,
      );},

    rPlantarDorsiflexion: () => {
      const lowerBound = -Math.PI/2;
      const upperBound = -0.52;

      animation.move(
        lowerBound,
        upperBound,
        lowerSettings.right.ankle,
        'plantarFlexAmount',
        lowerSettings.right.ankle.plantarFlex,
      );
    },

    lPlantarDorsiflexion: () => {
      const lowerBound = -Math.PI/2;
      const upperBound = -0.52;

      animation.move(
        lowerBound,
        upperBound,
        lowerSettings.left.ankle,
        'plantarFlexAmount',
        lowerSettings.left.ankle.plantarFlex,
      );
    },
  },
};
