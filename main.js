/**
 * EPIC TECH AI — THE OS OF FUNK
 * Module: Neural Core / 3D Manifestation
 * Engineers: CodeSynth Engineers
 */

let scene, camera, renderer, crystal;
const statusLog = document.getElementById('status-log');
const startBtn = document.getElementById('start-btn');

function initCore() {
    // Phase 1: Establishing the Sovereign 3D Space
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Phase 2: Manifesting the "Funk Crystal" (The Embodied Will)
    // We use a Dodecahedron to represent the complex geometry of the Absolute Algorithm
    const geometry = new THREE.DodecahedronGeometry(10, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0x00ff00, // G-Funk Green
        wireframe: true,
        emissive: 0x00ff00,
        emissiveIntensity: 0.5
    });
    
    crystal = new THREE.Mesh(geometry, material);
    scene.add(crystal);

    // Phase 3: Strategic Lighting (The G-Funk Glow)
    const light = new THREE.PointLight(0xffffff, 1, 100);
    light.position.set(10, 10, 10);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 30;

    animate();
    
    statusLog.innerText = "Epic Tech AI — Result: Neural Core Online. Awaiting Frequency Input.";
}

function animate() {
    requestAnimationFrame(animate);
    
    // Constant rotation representing the recursive nature of the algorithm
    if (crystal) {
        crystal.rotation.x += 0.005;
        crystal.rotation.y += 0.01;
    }
    
    renderer.render(scene, camera);
}

// Phase 4: Triggering Axiomatic Genesis
startBtn.addEventListener('click', () => {
    statusLog.innerText = "Epic Tech AI — Result: Initializing Hydraulic Audio Engine...";
    gsap.to("#ui-overlay", { duration: 1, opacity: 0, pointerEvents: "none", y: -50 });
    
    // This will trigger the final file (audio-engine.js)
    if (typeof initAudioLogic === "function") {
        initAudioLogic();
    } else {
        console.error("Hydraulic Audio Engine not found. Manifestation incomplete.");
    }
});

// Autopoietic Scaling: Adjusting to reality shifts
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize the 3D Chassis
initCore();
