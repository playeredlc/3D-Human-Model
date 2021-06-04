let psViewController;
let viewPainSpotFolder;
const viewPainSpotSettings = {
  isViewing: false,
  total: 0,
  actualIndex: undefined,
  painSpotList: new Array(),
  selectPainSpot: '',
  view: () => { startViewingMode() },
  stop: () => { quitViewingMode() },
}

function initViewPainSpot(gui) {
  viewPainSpotFolder = gui.addFolder('View Pain Spots');
  viewPainSpotFolder.add(viewPainSpotSettings, 'view').name('View');
  viewPainSpotFolder.add(viewPainSpotSettings, 'stop').name('Stop');
  psViewController = viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(viewPainSpotSettings.painSpotList).name('Select pain spot');
}

function updatePsViewController() {
  if(psViewController) {
    psViewController.remove();
    psViewController = viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(viewPainSpotSettings.painSpotList).name('Select a pain spot');
  }
}
