const painSpotSettings = {
  addPainSpot: () => { startInsertion(); },
}

function initPainSpot(gui) {
  const painSpotFolder = gui.addFolder('Pain Spot');

  painSpotFolder.add(painSpotSettings, 'addPainSpot').name('Add pain spot');

}

// **
// FUNCTIONS
// **
function startInsertion() {
  renderer.domElement.addEventListener('click', handleInsertion);
}

function handleInsertion(event) {
  addMark(event.clientX, event.clientY);
  renderer.domElement.removeEventListener('click', handleInsertion);
}

function addMark(x, y) {
  
  let mouse = new THREE.Vector2();
  mouse.x = ( x / w ) * 2 - 1;
	mouse.y = - ( y / h ) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  
  const map = new THREE.TextureLoader().load('/textures/spark1.png');
  var spriteMat = new THREE.SpriteMaterial({
    map: map,
    color: 'red',
  });

  let intersects = raycaster.intersectObject(myModel.model.children[0].children[1]);
  if (intersects.length < 1) return;


  let intersection = intersects[0];
  let pIntersect = intersection.point.clone();
  // pIntersect from global to local (mesh)
  myModel.model.children[0].children[1].worldToLocal(pIntersect);

  let sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(0.5, 0.5, 0.5);
  sprite.position.add(pIntersect);
  
  const distances = calculateDistances(myModel.modelSkeleton.bones, intersection.point); // intersection.point => world position
  const minIndex = distances.indexOf(Math.min(...distances)) + 1; // index of the nearest bone
  const boneName = myModel.modelSkeleton.bones[minIndex].name;
  console.log(boneName);
  myModel.modelSkeleton.getBoneByName(boneName).attach(sprite);

}