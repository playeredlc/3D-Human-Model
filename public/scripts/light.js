class Light {
  
  constructor(color = 0xFFFFFF, intensity = 1, positionX = -1, positionY = 2, positionZ = 4) {
    this.color = color;
    this.intensity = intensity;
    this.positionX = positionX;
    this.posisitionY = positionY;
    this.positionZ = positionZ;

    this.light = new THREE.DirectionalLight(this.color, this.intensity);
    this.light.position.set(positionX, positionY, positionX);
  }

  getLight() {
    return this.light;
  }

}