import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {TessellateModifier} from 'three/examples/jsm/modifiers/TessellateModifier'
import {vertShader, fragShader, uniforms} from 'three/examples/jsm/shaders'
import './test.css';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bf'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 20, 18);
scene.add(pointLight);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Add light helper
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(2000,400)
scene.add(lightHelper,gridHelper);


const sunTex = new THREE.TextureLoader().load('bilder/sun2.jpg')
const sunTex1 = new THREE.TextureLoader().load('bilder/normal.jpg')

// Create a mesh with a basic material for the red glow effect
const particleSystem = new THREE.Mesh(
  new THREE.SphereGeometry(21, 20, 20),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.2
  })
);
scene.add(particleSystem);

const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(20, 40, 33),
    new THREE.MeshStandardMaterial({
      map:sunTex,
      normalMap: sunTex1,
      emissiveMap: sunTex, // Use the same texture as the map for emissive
      size: 0.05,
      emissiveIntensity: 1, // Set the intensity of the emissive effect
      emissive: '#660000', // Set the color of the emissive effect to dark red
      metalness: 1, // Increase the metalness to make it look more like a glowing sun 
    })
  );
  
scene.add(sphere);

camera.position.set(0, 10, 50);
camera.lookAt(sphere.position);

const controls = new OrbitControls(camera, renderer.domElement);

scene.background = new THREE.TextureLoader().load('bilder/space6.jpg')

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.y += 0.01

  controls.update()

  // Update the position of the red point light to match the sphere
  pointLight.position.copy(sphere.position);

  renderer.render(scene, camera);
}

animate();
