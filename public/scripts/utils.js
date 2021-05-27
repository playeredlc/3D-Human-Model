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