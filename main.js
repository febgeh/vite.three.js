import './style.css';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const particleSystemNeutron = new THREE.Mesh(
  new THREE.SphereGeometry(4.5, 14, 14),
  new THREE.MeshBasicMaterial({
    color: 0xffffff,
    emissive:100,
    emissiveIntensity:100,
    transparent: true,
    opacity: 0.4
  })
);
scene.add(particleSystemNeutron);

const NeutronPic = new THREE.TextureLoader().load('bilder/proton1.jpg')
const TextureNeutron = new THREE.TextureLoader().load('bilder/normal.jpg')

const Neutronstar = new THREE.Mesh(
  new THREE.SphereGeometry(4,14,24),
  new THREE.MeshStandardMaterial({
    map: NeutronPic,
    normalMap: TextureNeutron,
    emissiveMap: NeutronPic, // Use the same texture as the map for emissive
    emissiveIntensity: 3, // Set the intensity of the emissive effect
    emissive: 0xffffff, // Set the color of the emissive effect to white
    metalness: 0, // Increase the metalness to make it look more like a glowing sun
  })
)
Neutronstar.position.set(0, 0, 200);
scene.add(Neutronstar)

const DwarfPic = new THREE.TextureLoader().load('bilder/proton1.jpg')
const TextureDwarf = new THREE.TextureLoader().load('bilder/WhiteD3.jpg')

const Dwarfstar = new THREE.Mesh(
  new THREE.SphereGeometry(4,500,50),
  new THREE.MeshStandardMaterial({
    map: DwarfPic,
    normalMap: TextureDwarf,
    emissiveMap: DwarfPic, // Use the same texture as the map for emissive
    displacementMap:TextureDwarf,
    emissiveIntensity: 3, // Set the intensity of the emissive effect
    emissive: 0xffffff, // Set the color of the emissive effect to white
    metalness: 0, // Increase the metalness to make it look more like a glowing sun
  })
)
Dwarfstar.position.set(0, 0, 300);
scene.add(Dwarfstar)

const black = new THREE.TextureLoader().load('bilder/black12.jpg')
const DwarfBstar = new THREE.Mesh(
  new THREE.SphereGeometry(4,500,50),
  new THREE.MeshStandardMaterial({
    emissiveMap: black, // Use the same texture as the map for emissive
    displacementMap:TextureDwarf,
    emissiveIntensity: 1, // Set the intensity of the emissive effect
    emissive: 0xffffff, // Set the color of the emissive effect to white
    metalness: 1, // Increase the metalness to make it look more like a glowing sun 
  })
)
DwarfBstar.position.set(0, 0, 300);
scene.add(DwarfBstar)

//sun--------
const sunTexture = new THREE.TextureLoader().load('bilder/sun2.jpg');
const sunNormalTexture = new THREE.TextureLoader().load('bilder/normal.jpg');

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 20),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: sunNormalTexture,
    emissiveMap: sunTexture, // Use the same texture as the map for emissive
    emissiveIntensity: 1, // Set the intensity of the emissive effect
    emissive: 0xffffff, // Set the color of the emissive effect to white
    metalness: 1, // Increase the metalness to make it look more like a glowing sun
  })
);

sphere.position.set(0, 0, 200);
scene.add(sphere);

const particleSystem = new THREE.Mesh(
  new THREE.SphereGeometry(21, 10, 19),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.4
  })
);
scene.add(particleSystem);

const sphere1 = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 20),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: sunNormalTexture,
    emissiveMap: sunTexture, // Use the same texture as the map for emissive
    emissiveIntensity: 1, // Set the intensity of the emissive effect
    emissive: 0xffffff, // Set the color of the emissive effect to white
    metalness: 1, // Increase the metalness to make it look more like a glowing sun
  })
);
sphere1.position.set(0, 0, 300);
scene.add(sphere1);

//for the Red giant and the Red Suprgiant
const particleSystemRedG = new THREE.Mesh(
  new THREE.SphereGeometry(11.6, 11, 19),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.6
  })
);
scene.add(particleSystemRedG);
const sphereRedG = new THREE.Mesh(
  new THREE.SphereGeometry(11, 32, 20),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: sunNormalTexture,
    emissiveMap: sunTexture, // Use the same texture as the map for emissive
    emissiveIntensity: 1, // Set the intensity of the emissive effect
    emissive: 0xff0000, // Set the color of the emissive effect to white
    metalness: 1, // Increase the metalness to make it look more like a glowing sun
  })
);
sphereRedG.position.set(0, 0, 500);
scene.add(sphereRedG);


//superGiant
const particleSystemRedGS = new THREE.Mesh(
  new THREE.SphereGeometry(21, 10, 19),
  new THREE.MeshBasicMaterial({
    color: 0xff0000,
    transparent: true,
    opacity: 0.6
  })
);
scene.add(particleSystemRedGS);
const sphereRedGS = new THREE.Mesh(
  new THREE.SphereGeometry(20, 32, 20),
  new THREE.MeshStandardMaterial({
    map: sunTexture,
    normalMap: sunNormalTexture,
    emissiveMap: sunTexture, // Use the same texture as the map for emissive
    emissiveIntensity: 1, // Set the intensity of the emissive effect
    emissive: 0xff0000, // Set the color of the emissive effect to white
    metalness: 1, // Increase the metalness to make it look more like a glowing sun
  })
);
sphereRedGS.position.set(0, 0, 500);
scene.add(sphereRedGS);







// Add point light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 20, 18);
scene.add(pointLight);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);



//stars-------
function addStar() {
  const geometry = new THREE.SphereGeometry(0.20, 24, 24);
  const material = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    emissive: 0xffffff, // set the emissive color to gold
    emissiveIntensity: 1.0 // set the intensity of the emissive light
  });
  const star = new THREE.Mesh(geometry, material);

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(300));
  star.position.set(x, y, z);
  scene.add(star);
}
Array(200).fill().forEach(addStar)

//backgrund
const spaceTexture = new THREE.TextureLoader().load('bilder/milky_gogo_gaga.jpg')
scene.background = spaceTexture

camera.position.set(0, 0, 50);

const controls = new OrbitControls(camera, renderer.domElement);

//moon-------
const moonTexture = new THREE.TextureLoader().load('bilder/meg.PNG')

const moon = new THREE.Mesh(
  new THREE.BoxGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map: moonTexture,    
    map: moonTexture,
    emissiveMap: moonTexture, // Use the same texture as the map for emissive
    emissiveIntensity: 1, // Set the intensity of the emissive effect
    emissive: 0xffffff, // Set the color of the emissive effect to white
    metalness: 1, // Increase the metalness to make it look more like a glowing sun 
  })
)

sphere.position.setX(20)
sphere1.position.setX(-25)
sphereRedG.position.setX(-27)
sphereRedGS.position.setX(32)
sphereRedG.position.setY(-7)
sphereRedGS.position.setY(-14)
Neutronstar.position.setX(12)
Dwarfstar.position.setX(10)
DwarfBstar.position.setX(10)
moon.position.setX(-10)
scene.add(moon)

//move everything away from camera and move camera away
function moveCamera(){
  //get clients position
  const t = document.body.getBoundingClientRect().top
  moon.rotation.y += 0.01;
  moon.rotation.x += 0.05;
  sphereRedG.rotation.y = 0.2;
  sphereRedGS.rotation.y = 0.02;
  // set new position based on scroll position
  sphere.position.z = 85+ t * 0.09;
  sphere1.position.z = 420+ t * 0.09;
  sphereRedG.position.z = 560+t * 0.1;
  sphereRedGS.position.z = 490+ t * 0.09;
  Neutronstar.position.z = 853 + t*0.09;
  Dwarfstar.position.z = 1160 + t*0.09;
  DwarfBstar.position.z = 1230 + t*0.09;
  moon.position.z = 300 + t * 0.09;
  camera.position.x = t * -0.00002;
  camera.position.y = t * -0.00002;
}
document.body.onscroll = moveCamera


//makes spin-spin hehehe
function animate() {
  requestAnimationFrame(animate);
  Dwarfstar.rotation.y+= 0.02
  Dwarfstar.rotation.x+= 0.001
  Dwarfstar.rotation.z+= 0.0001
  sphere.rotation.y += 0.01;
  sphere1.rotation.y += 0.01;
  Neutronstar.rotation.y += 0.02;
  particleSystemNeutron.position.copy(Neutronstar.position)
  particleSystemNeutron.rotation.copy(Neutronstar.rotation)

  sphereRedG.rotation.copy(sphere1.rotation)
  sphereRedGS.rotation.copy(sphere1.rotation)
  controls.update()
  particleSystem.position.copy(sphere1.position);
  particleSystem.rotation.copy(sphere1.rotation)
  particleSystemRedG.position.copy(sphereRedG.position)
  particleSystemRedGS.position.copy(sphereRedGS.position)


  renderer.render(scene, camera);
}

animate();


