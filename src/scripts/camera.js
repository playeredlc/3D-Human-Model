class Camera {

  constructor(fov=60, aspect=2, zNear=0.1, zFar=1000) {
    this.fov = fov;
    this.aspect = aspect;
    this.zNear = zNear;
    this.zFar = zFar;

    this.perpectiveCamera = new THREE.PerspectiveCamera(this.fov, this.aspect, this.zNear, this.zFar);
    this.perpectiveCamera.position.set(5, 5, 5);
  }

  getPerspectiveCamera() {
    return this.perpectiveCamera;
  }

}