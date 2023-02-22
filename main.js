import "./style.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.setZ(30);
camera.position.setX(-3);

renderer.render(scene, camera);

const floor = new THREE.Mesh(
  new THREE.BoxGeometry(30, 1, 30),
  new THREE.MeshStandardMaterial({
    color: "#48413b",
  })
);
const wall1 = new THREE.Mesh(
  new THREE.BoxGeometry(30, 20, 1),
  new THREE.MeshStandardMaterial({
    color: "#6e5b4a",
  })
);
const wall2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 20, 30),
  new THREE.MeshStandardMaterial({
    color: "#6e5b4a",
  })
);
const table1 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 1, 16),
  new THREE.MeshStandardMaterial({
    color: "#3e281f",
  })
);
const table2 = new THREE.Mesh(
  new THREE.BoxGeometry(17, 1, 5),
  new THREE.MeshStandardMaterial({
    color: "#3e281f",
  })
);
const tableFoot1 = new THREE.Mesh(
  new THREE.BoxGeometry(5, 6, 10),
  new THREE.MeshStandardMaterial({
    color: "#3e281f",
  })
);
const tableFoot2 = new THREE.Mesh(
  new THREE.BoxGeometry(6, 6, 5),
  new THREE.MeshStandardMaterial({
    color: "#3e281f",
  })
);
tableFoot1.position.set(12, 3.5, 3);
tableFoot2.position.set(-4.5, 3.5, 12);
table1.position.set(12, 7, 6);
table2.position.set(1, 7, 12);
wall1.position.set(0, 10.5, 14.5);
wall2.position.set(14.5, 10.5, 0);

scene.add(tableFoot1);
scene.add(tableFoot2);
scene.add(table1);
scene.add(table2);
scene.add(wall1);
scene.add(wall2);
scene.add(floor);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(-15, 15, -15);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Helpers

//const lightHelper = new THREE.PointLightHelper(pointLight);
//const gridHelper = new THREE.GridHelper(200, 50);
//scene.add(lightHelper, gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
  requestAnimationFrame(animate);

  //sphere.rotation.x += 0.01;
  //sphere.rotation.y += 0.005;
  //sphere.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();
