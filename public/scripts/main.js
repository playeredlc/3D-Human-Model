// canvas size
let w, h;
// camera
const camera = new Camera().getPerspectiveCamera();
// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x212121);
scene.add(new THREE.AxesHelper(500))
// light
const light = new Light().getLight();
scene.add(light);
// model
const myModel = new HumanModel3D('models/female-character-rigs.glb');
myModel.init(() => {
  console.log(myModel);
  loadGUI();
});

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ canvas });
  const controls = new THREE.OrbitControls(camera, renderer.domElement);

  renderer.domElement.addEventListener('dblclick', (event) => {
    addMark( event.clientX, event.clientY );
  });

  function render() {
    
    // keep propotion while resizing
    if(resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    
    controls.update();
    renderer.render(scene, camera); // draw the scene
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();
