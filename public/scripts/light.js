class Light {
  
  constructor(skyColor=0xffffbb, groundColor=0x080820, intensity=1) {
    this.skyColor = skyColor;
    this.groundColor = groundColor;
    this.intensity = intensity;

    this.light = new THREE.HemisphereLight(this.skyColor, this.groundColor, this.intensity);

  }

  getLight() {
    return this.light;
  }

}