/**
 * Created by Rayr Lee on 2021/7/12.
 */

/**
 * Created by Rayr Lee on 2021/7/9.
 */

let w = window.innerWidth;
let h = window.innerHeight;

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // 默认的是，没有设置的这个清晰 THREE.PCFShadowMap

//设置渲染器的尺寸
renderer.setSize(w, h);
//将渲染器放置到页面当中
document.body.appendChild(renderer.domElement);

//创建场景
var scene = new THREE.Scene();

//创建相机，设置位置
var camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 1000);
//设置相机的位置
camera.position.set(0, 0, 400);
camera.lookAt(new THREE.Vector3(0, 0, 0));

//创建一个平行光光源照射到物体上

scene.add(new THREE.AmbientLight(0x444444));
var light = new THREE.PointLight(0xffffff);
//设置平型光照射方向，照射方向为设置的点照射到原点
light.position.set(15, 30, 10);
light.castShadow = true;
//将灯光放到场景当中
scene.add(light);

//增加多面体


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