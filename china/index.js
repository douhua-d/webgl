/**
 * Created by Rayr Lee on 2021/7/7.
 */

class ChinaMap {
	constructor() {
		this.init();
	}

	init() {
		this.scene = new THREE.Scene(); //初始化场景
		this.activeInstersect = [];
		this.setCamera();
		this.setRender();

		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({color: 0x00ff00});

		this.cube = new THREE.Mesh(geometry, material);
		this.scene.add(this.cube);

		this.animate();
	}

	setCamera() {
		this.camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		this.camera.position.set(0, 0, 10);
	}

	setRender() {
		this.render = new THREE.WebGLRenderer({
			canvas: document.getElementById('canvas'),
		});
		this.render.setPixelRatio(window.devicePixelRatio); // 设置显示器比例
		this.render.setSize(window.innerWidth, window.innerHeight); //设置画布大小
	}

	setLight() {
		this.ambientLight = new THREE.AmbientLight(0xffffff);
		this.scene.add(this.ambientLight);
	}

	animate() {
		requestAnimationFrame(this.animate.bind(this));
		this.cube.rotation.x = this.cube.rotation.x + 0.01;
		this.cube.rotation.y = this.cube.rotation.y + 0.01;
		this.renderBox();
		this.setLight();
	}

	renderBox() {
		this.render.render(this.scene, this.camera);
	}
}
