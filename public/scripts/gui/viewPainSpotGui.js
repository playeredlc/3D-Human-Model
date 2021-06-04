let psViewController;
let viewPainSpotFolder;
const viewPainSpotSettings = {
  total: 0,
  painSpotList: new Array(),
  selectPainSpot: '',
  view: () => { remakePainSpot() }
}

function initViewPainSpot(gui) {
  viewPainSpotFolder = gui.addFolder('View Pain Spots');
  viewPainSpotFolder.add(viewPainSpotSettings, 'view').name('View');
  psViewController = viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(viewPainSpotSettings.painSpotList).name('Select pain spot');
}

function updatePsViewController() {
  if(psViewController) {
    psViewController.remove();
    psViewController = viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(viewPainSpotSettings.painSpotList).name('Select pain spot');
  }
}