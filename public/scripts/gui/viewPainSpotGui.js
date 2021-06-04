let psViewController;
let viewPainSpotFolder;
const viewPainSpotSettings = {
  total: 0,
  painSpotList: new Array(),
  selectPainSpot: '',
}

function initViewPainSpot(gui) {
  viewPainSpotFolder = gui.addFolder('View Pain Spots');
  psViewController = viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(viewPainSpotSettings.painSpotList);
}

function updatePsViewController() {
  if(psViewController) {
    psViewController.remove();
    psViewController = viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(viewPainSpotSettings.painSpotList);
  }
}