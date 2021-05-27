// camera
const camera = new Camera().getPerspectiveCamera();
// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x212121);
scene.add(new THREE.AxesHelper(500))
// light
const light = new Light().getLight();
scene.add(light);

const myModel = new HumanModel3D('models/female-character-rigs.glb');
myModel.init(() => {
  console.log('inside cb');
  console.log(myModel);
});

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ canvas });

  const controls = new THREE.OrbitControls(camera, renderer.domElement);
  
  function render() {
    
    // keep propotion while resizing
    if(resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }
    
    controls.update();
    renderer.render(scene, camera); // draw the scene
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

}

main();