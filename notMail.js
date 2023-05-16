import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene2 = new THREE.Scene();

const camera2 = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#br'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


//sun--------
const sunTexture1 = new THREE.TextureLoader().load('bilder/sun2.jpg');
const sunNormalTexture1 = new THREE.TextureLoader().load('bilder/normal.jpg');

// Add point light
const pointLight1 = new THREE.PointLight(0xffffff, 1, 100);
pointLight1.position.set(10, 20, 18);
scene2.add(pointLight1);

// Add ambient light
const ambientLight1 = new THREE.AmbientLight(0xffffff, 0.3);
scene2.add(ambientLight1);



//stars-------
function addStar1() {
    const geometry = new THREE.SphereGeometry(0.2, 24, 24);
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      emissive: 0xffffff, // set the emissive color to gold
      emissiveIntensity: 1.0 // set the intensity of the emissive light
    });
    const star = new THREE.Mesh(geometry, material);
  
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
    star.position.set(x, y, z);
    scene2.add(star);
  }
  
Array(200).fill().forEach(addStar1);

//backgrund
const spaceTexture1 = new THREE.TextureLoader().load('bilder/space5.jpg')
scene2.background = spaceTexture1

camera2.position.set(0, 0, 50);

const controls1 = new OrbitControls(camera2, renderer.domElement);

//sixPlanets 
function sixPlanetsF() {
    const colors = [0xffffff, 0x0000ff, 0xffa500, 0xffff00, 0xff0000]; // Define an array of colors
    const colorIndex = Math.floor(Math.random() * colors.length); // Pick a random color from the array
    const color = colors[colorIndex];
  
    const sixPlanets = new THREE.Mesh(
      new THREE.SphereGeometry(5),
      new THREE.MeshStandardMaterial({
        map: sunTexture1,
        normalMap: sunNormalTexture1,
        emissiveMap: sunTexture1,
        emissiveIntensity: 1,
        emissive: color,
        metalness: 1,
        color: color // Set the color of the material
      })
    );
  
    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(70));
    sixPlanets.position.set(x, y, z);
    sixPlanets.userData.rotationSpeed = new THREE.Vector3(
      THREE.MathUtils.randFloat(-2, 2),
      THREE.MathUtils.randFloat(-2, 2),
      THREE.MathUtils.randFloat(-2, 2)
    );
    scene2.add(sixPlanets);
  }
  
  Array(5).fill().forEach(sixPlanetsF);
  

let lastUpdateTime = Date.now();

function animate1() {
    // Calculate time elapsed since last frame
    const currentTime = Date.now();
    const deltaTime = (currentTime - lastUpdateTime) / 1000; // convert to seconds
    lastUpdateTime = currentTime;
  
    // Loop through all the stars and update their rotation
    scene2.traverse(object => {
      if (object.userData && object.userData.rotationSpeed) {
        object.rotation.y += object.userData.rotationSpeed.y * deltaTime;
      }
    });
    controls1.update()
    // Render the scene2
    renderer.render(scene2, camera2);
  
    // Request the next frame
    requestAnimationFrame(animate1);
  }
  
  animate1();

