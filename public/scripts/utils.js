// renderer resize function to overcome low resolution problem when resizing screen
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const heigth = canvas.clientHeight;

  const needResize = canvas.width != width || canvas.heigth != heigth;
  if(needResize) {
    renderer.setSize(width, heigth, false); // false to prevent default
  }

  return needResize;
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
  myModel.model.children[0].children[1].worldToLocal(pIntersect);
  
  let sprite = new THREE.Sprite(spriteMat);
  sprite.scale.set(0.5, 0.5, 0.5);
  sprite.position.copy(intersection.face.normal).multiplyScalar(0.05).add(pIntersect);
  myModel.model.children[0].children[1].add(sprite);

}
