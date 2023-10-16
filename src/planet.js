const THREE = require("three");

class Planet {
  scene;
  camera;
  renderer;
  geometry;
  material;
  mesh;

  constructor() {
    console.log("Bienvenue sur la planète !");

    this.init();
  }

  // méthode dans laquelle on va créer la scène pour dessiner notre planète
  init = () => {
    // ici onb crée une scène = un "espace" dans lequel on peut "dessiner" en 3D avec three.js
    // on instancie la classe Scene fournie par three.js
    this.scene = new THREE.Scene();

    // création d'une caméra = un point de vue pour voir la scène
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    // on déplace la caméra sur l'axe des z (profondeur) pour prendre du recul sur la scène
    this.camera.position.z = 15;
    // on ajoute la caméra dans la scène
    this.scene.add(this.camera);

    // ici on va créer notre planète
    // on crée un volume (une forme)
    this.geometry = new THREE.SphereGeometry(5, 64, 64);
    // on prépare une texture à appliquer sur notre surface
    this.material = new THREE.MeshNormalMaterial();
    // on crée un "mesh" = une forme avec une texture
    this.mesh = new THREE.Mesh(this.geometry, this.material);
    // on ajoute notre mesh à la scène
    this.scene.add(this.mesh);

    // on dessine la scène grâce à un moteur de rendu (webGL)
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // on lui précise la taille de notre zone de dessin
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // on injecte notre zone de dessin dans le DOM
    document.body.appendChild(this.renderer.domElement);
    // enfin on dit à notre renderer de rendre la scène
    // => on transpose nos formes et nos vecteurs en pixels calculés
    // on fait le rendu 3D d'uns cène, depuis le point de vue d'une caméra
    this.renderer.render(this.scene, this.camera);
  };
}

module.exports = Planet;
