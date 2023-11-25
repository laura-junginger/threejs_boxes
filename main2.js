//IMPORT MODULES
import './style.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

//VARIABLES
  //CHALLENGE: Add an array to store multiple cubes.
let width = window.innerWidth;
let height = window.innerHeight;
let myArray = [];
 
//CREATE SCENE AND CAMERA
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 100)
camera.position.set(0, 0, 20)

//CREATE GEOMETRY AND ADD TO THE SCENE
  //CHALLENGE: Create multiple cubes using loops and set different positions for each cube. 
  //For each cube, add them to the array before adding them to the scene. 
const material = new THREE.MeshBasicMaterial( { color: 0x00CC0066});

for (let i=0; i<5; i++) {
  const geometry = new THREE.BoxGeometry(0.5+i*0.1, 0.5+i*0.1, 0.5+i*0.1);
  myArray[i] = new THREE.Mesh( geometry, material );
  myArray[i].position.x = i;
  myArray[i].position.y = i;
  myArray[i].position.z = i;
  scene.add(myArray[i]);
  console.log(myArray[i]);
}

console.log(myArray);

// RESPONSIVE
function handleResize() {
  width = window.innerWidth;
  height = window.innerHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  renderer.render(scene, camera);
}

window.addEventListener('resize', handleResize);

//CREATE A RENDERER
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const container = document.querySelector('#threejs-container');
container.append(renderer.domElement);

//CREATE MOUSE CONTROL
const controls = new OrbitControls( camera, renderer.domElement );

//ANIMATE AND RENDER
  //CHALLENGE: Inside the function animate( ), iterate through the array to access each cube using ForEach. 
  //Set different rotation (i.e. different speeds, different axes) for each cube.
function animate() {
  requestAnimationFrame( animate );
  
  controls.update();

  /*
  myArray[0].rotation.x += 0.01;
  myArray[0].rotation.y += 0.01;
  myArray[1].rotation.x += 0.05;
  myArray[1].rotation.y += 0.05;
  */

  for (let i=0; i<5; i++) {
    myArray[i].rotation.x += i*0.05+0.01;
    myArray[i].rotation.y += i*0.05+0.01;
  }
  
  /*
  myArray.forEach(function(element, index) {
    element.rotation.x += 0.01 * index;
    element.rotation.y += 0.01 * index;
  })
  */

  renderer.render( scene, camera );
}


animate();