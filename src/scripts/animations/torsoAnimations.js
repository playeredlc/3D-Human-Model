var animation = {

  ... animation,

  torso: {
    extensionFlexion: () => {
      const lowerBound = -1;
      const upperBound = 1;

      animation.move(
        lowerBound,
        upperBound,
        torsoSettings,
        'extFlexAmount',
        torsoSettings.extFlexTorso,
      );
    },

    lateralFlexion: () => {
      const lowerBound = -0.26;
      const upperBound = 0.26;

      animation.move(
        lowerBound,
        upperBound,
        torsoSettings,
        'latFlexAmount',
        torsoSettings.latFlexTorso,
      );
    },

    rotation: () => {
      const lowerBound = -0.34;
      const upperBound = 0.34;

      animation.move(
        lowerBound,
        upperBound,
        torsoSettings,
        'rotationAmount',
        torsoSettings.rotationTorso,
      );
    },
  }

};
