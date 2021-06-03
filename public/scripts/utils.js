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
  return distances;
}

const headMovements = [
  'Extension/Flexion',
  'Lateral Flexion',
  'Rotation',
];
const torsoMovements = [
  'Extension/Flexion',
  'Lateral Flexion',
];
const upperLimbMovements = [
  'Extension/Flexion',
  'Adduction/Abduction',
];
const lowerLimbMovements = [
  'Hip Ext/Flex',
  'Knee Ext/Flex',
];

const movements = {
  head: [
    'Extension/Flexion',
    'Lateral Flexion',
    'Rotation',
  ],
  torso: [
    'Extension/Flexion',
    'Lateral Flexion',
  ],
  upperLimb: [
    'Extension/Flexion',
    'Adduction/Abduction',
  ],
  lowerLimb: [
    'Hip Ext/Flex',
    'Knee Ext/Flex',
  ],
}
