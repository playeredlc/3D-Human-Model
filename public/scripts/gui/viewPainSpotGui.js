const viewPainSpotSettings = {
  selectPainSpot: ''
}

function initViewPainSpot(gui) {
  const viewPainSpotFolder = gui.addFolder('View Pain Spots');
  viewPainSpotFolder.add(viewPainSpotSettings, 'selectPainSpot').options(savedPainSpots);

}