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

function calculateDistances(bones, point) {
  const distances = new Array();
  const boneWorldPos = new THREE.Vector3();

  bones.forEach(bone => {
    bone.getWorldPosition(boneWorldPos); // bone position from local to world (because point is in relation to world)
    distances.push(boneWorldPos.distanceTo(point));
  });
  
  distances.shift(); // remove first bone because it is not used;
  return { 
    distances: distances,
    minIndex: distances.indexOf(Math.min(...distances)) + 1, 
  }
}

const movements = {
  head: [
    'Extension/Flexion',
    'Lateral Flexion',
    'Rotation',
  ],
  torso: [
    'Extension/Flexion',
    'Lateral Flexion',
    'Rotation',
  ],
  upperLimb: [
    'R - Extension/Flexion',
    'R - Adduction/Abduction',
    'R - Horizontal Adduction/Abduction',
    'R - Lateral/Medial Rotation',
    'L - Extension/Flexion',
    'L - Adduction/Abduction',
    'L - Horizontal Adduction/Abduction',
    'L - Lateral/Medial Rotation',
  ],
  lowerLimb: [
    'R - Hip Ext/Flex',
    'R - Knee Ext/Flex',
    'R - Plantar/Dorsiflexion',
    'L - Hip Ext/Flex',
    'L - Knee Ext/Flex',
    'L - Plantar/Dorsiflexion',
  ],
}

function startAnimation() {
  const ps = savedPainSpots[viewPainSpotSettings.actualIndex][0];

  const bodyPart = _.camelCase(ps.bodyPart);
  const movement = _.camelCase(ps.movement);
  
  animation[bodyPart][movement]();

};
