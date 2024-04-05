import * as THREE from 'three';

const mainScene = new THREE.Scene();

const mainCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement); 

const torusGeometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);

const greenMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00});
const torusKnotMesh = new THREE.Mesh(torusGeometry, greenMaterial);

mainScene.add(torusKnotMesh);
mainCamera.position.z = 5;

function animate() {
    requestAnimationFrame(animate); 
    torusKnotMesh.rotation.x += 0.01;
    torusKnotMesh.rotation.y += 0.01;
    torusKnotMesh.rotation.z += 0.01;
    renderer.render(mainScene, mainCamera);
}
animate();