class HumanModel3D {
  constructor(pathToModel) {
    this.path = pathToModel;
  }

  init(callback) {

    // glTF loader
    const loader = new THREE.GLTFLoader();
    loader.load(
      this.path,
      (gltf) => {
        this.model = gltf.scene;
        this.model.children[0].children[1].material.color.set( 0x7a78ff );
        this.modelSkeleton = this.model.children[0].children[1].skeleton;
        this.modelSkeleton.pose();
        
        // const skelHelper = new THREE.SkeletonHelper(this.model);
        // scene.add(skelHelper);

        scene.add(this.model);

        callback.bind(this)();

      },
      (xhr) => {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
      },
      (error) => {
        console.log(error);
      }
    );

  }
}