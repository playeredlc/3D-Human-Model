const painSpotsArray = new Array();
const painSpotSettings = {
  addPainSpot: () => { startInsertion(); },
}

function initPainSpot(gui) {
  const painSpotFolder = gui.addFolder('Pain Spot');

  painSpotFolder.add(painSpotSettings, 'addPainSpot').name('Add pain spot');

}

// **
// START INSERTION
// **
function startInsertion() {
  canvas.classList.add('inserting-pain-spot');
  renderer.domElement.addEventListener('click', handleInsertion);
}

// **
// HANDLE INSERTION
// **
function handleInsertion(event) {
  const result = addMark(event.clientX, event.clientY);

  canvas.classList.remove('inserting-pain-spot');
  renderer.domElement.removeEventListener('click', handleInsertion);

  // store insertion
  if(result.success){
    const ps = {
      pIntersect: result.position,
      boneName: result.boneName,
    }
    painSpotsArray.push(ps);
  }
}

// **
// ADD PAIN SPOT
// **
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
  if (intersects.length < 1){
    return {
      success: false,
    };
  }

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

  return {
    success: true,
    boneName: boneName,
    position: pIntersect,
  };
}