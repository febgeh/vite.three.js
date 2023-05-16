import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  10000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bf'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
const sunNormalTexture1 = new THREE.TextureLoader().load('bilder/normal.jpg');
const sunPic = new THREE.TextureLoader().load('bilder/sun2.jpg');
const bigSun = new THREE.Mesh(
    new THREE.SphereGeometry(1500, 64, 64),
    new THREE.MeshStandardMaterial({
        map:sunPic,
        normalMap:sunNormalTexture1,
        emissiveMap: sunPic,
        emissiveIntensity: 1,
        emissive: 0xffffff, 
        metalness: 1,
    })
);
bigSun.position.set(0, 0, 0);
scene.add(bigSun);

const earthPic = new THREE.TextureLoader().load('bilder/earth1.jpg');
const bigEarth = new THREE.Mesh(
    new THREE.SphereGeometry(20),
    new THREE.MeshStandardMaterial({
      map: earthPic,
      emissiveMap: earthPic,
      emissiveIntensity: 1,
      emissive: 0xffffff,
      metalness: 1,
    })
  );
  bigEarth.position.set(0, 0, 1540);
  const initialEarthZ = bigEarth.position.z; // Save initial z position
  scene.add(bigEarth);

// Add point light
const pointLight = new THREE.PointLight(0xffffff, 1, 100);
pointLight.position.set(10, 20, 300);
scene.add(pointLight);

// Add ambient light
const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
scene.add(ambientLight);

// Add light helper
const lightHelper = new THREE.PointLightHelper(pointLight);
const gridHelper = new THREE.GridHelper(2000, 400);
scene.add(lightHelper, gridHelper);

const spaceTexture = new THREE.TextureLoader().load('bilder/milky_gogo_gaga.jpg');
scene.background = spaceTexture;

camera.position.set(-150, 170, 1900);

const controls = new OrbitControls(camera, renderer.domElement);

function moveCamera() {
    //get clients position
    const t = document.body.getBoundingClientRect().top;
  
    // set new position based on scroll position
    bigEarth.position.z = t * 0.09;
    bigSun.position.z =  t * 0.09;
  
    camera.position.x = t * -0.00002;
    camera.position.y = t * -0.00002;
}

document.body.onscroll = moveCamera;

function animate1() {
    bigSun.rotation.y += 0.0001;
    bigEarth.rotation.y += 0.04;


    controls.update();
    renderer.render(scene, camera);
    // Request the next frame
    requestAnimationFrame(animate1);
}


document.querySelector(".range").addEventListener("input", function (e) {
    console.log(e.target.value);
    bigEarth.position.z = initialEarthZ + parseFloat(e.target.value); // Add range input value to initial z position
    bigEarth.position.x = parseFloat(-e.target.value); // Add range input value to initial z position
  });

animate1();
