/**
 * Created by Rayr Lee on 2021/7/9.
 */

const w = window.innerWidth;
const h = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias: true});
//设置渲染器的尺寸
renderer.setSize(w, h);
//将渲染器放置到页面当中
document.body.appendChild(renderer.domElement);

function add() {
	let a = 1;
}

//创建场景
var scene = new THREE.Scene();

//创建相机，设置位置
var camera = new THREE.PerspectiveCamera(45, w / h, 1, 10000);
//设置相机的位置
camera.position.set(0, 0, 400);

//创建一个平行光光源照射到物体上

var light = new THREE.DirectionalLight(0xffffff);
//设置平型光照射方向，照射方向为设置的点照射到原点
light.position.set(1, 1, 1);
//将灯光放到场景当中
scene.add(new THREE.AmbientLight(0x404040));
scene.add(light);

//创建一个接受光照并带有纹理映射的立方体，并添加到场景中
//首先，获取到纹理
var map = new THREE.TextureLoader().load('/webgl/images/caizhi.jpeg');

var material = new THREE.MeshLambertMaterial({map: map});

//创建一个立方体的几何体
var geometry = new THREE.BoxGeometry(200, 200, 200, 1, 1, 1);

//将集合体和材质放到一个网格中
var cube = new THREE.Mesh(geometry, material);

//将立方体网格添加到场景中
scene.add(cube);

var controls = new THREE.TrackballControls(camera, renderer.domElement);

controls.rotateSpeed = 5;
controls.zoomSpeed = 3;
controls.panSpeed = 0.8;
controls.noZoom = false;
controls.noPan = false;
controls.staticMoving = false;
controls.keys = ['KeyA', 'KeyS', 'KeyD'];
//动态阻尼系数 就是灵敏度
controls.dynamicDampingFactor = 0.3;

//controls.addEventListener('change', renderer);

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}

animate();
