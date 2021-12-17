//import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
//import { OrbitControls } from 'https://unpkg.com/three@0.119.1/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.116.1/examples/jsm/loaders/GLTFLoader.js';
	
	let scene, camera, renderer;
	var container,w,h;
	console.log('elo');
	function init() {
		container = document.getElementById("amarena")
		console.log('elo2')
		w=container.offsetWidth
		h=container.offsetHeight

				scene = new THREE.Scene();
				scene.background = new THREE.Color('grey');
				camera = new THREE.PerspectiveCamera(40, window.innerWidth
					/window.innerHeight, 1, 5000);
				camera.rotation.y = 45/100*Math.PI;
				camera.position.x = 800; 
				camera.position.y = 100;
	
				let hlight = new THREE.AmbientLight(0x404040,100);
				scene.add(hlight);
	
				let directionalLight = new THREE.DirectionalLight(0xffffff,100);
				scene.add(directionalLight)
	
				renderer = new THREE.WebGLRenderer({antialias:true});
				renderer.setSize(w,h);
				container.appendChild(renderer.domElement);

				var loader = new GLTFLoader()
				loader.load('./win/scene.gltf', function(gltf){
					var win = gltf.scene.children[0];
					win.scale.set(0.5,0.5,0.5);
					scene.add(gltf.scene);
					renderer.render(scene,camera);
console.log('elo 3');
				});
					
	}
            
init();