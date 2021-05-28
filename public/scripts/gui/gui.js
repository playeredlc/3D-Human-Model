const generalSettings = {
  resetPosition: () => { alert('Triggered') },
}

function loadGUI () {
  const gui = new dat.GUI();

  gui.add(generalSettings, 'resetPosition').name('Reset Position');

  initHead(gui);
  initTorso(gui);
  initUpperLimb(gui);
  initLowerLimb(gui);
}
