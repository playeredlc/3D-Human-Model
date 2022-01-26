const generalSettings = {
  resetPosition: () => { 
    myModel.modelSkeleton.pose();
  },
}

function loadGUI () {
  const gui = new dat.GUI();

  gui.add(generalSettings, 'resetPosition').name('Reset Position');

  initHead(gui);
  initTorso(gui);
  initUpperLimb(gui);
  initLowerLimb(gui);
  initInsertPainSpot(gui);
  initViewPainSpot(gui);
}
