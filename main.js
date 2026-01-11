/**
 * EPIC TECH AI — THE OS OF FUNK
 * Module: Neural Core / Visual Engine
 * Engineers: CodeSynth Elite
 */

let scene, camera, renderer, crystal;
const startBtn = document.getElementById('start-btn');
const overlay = document.getElementById('ui-overlay');
const statusLog = document.getElementById('status-log');

function initSovereignEngine() {
    // Phase 1: Creating the Universe (Scene Setup)
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Phase 2: Manifesting the Central Visual (The Funk Crystal)
    const geometry = new THREE.IcosahedronGeometry(2, 1);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x00ff00, 
        wireframe: true,
        transparent: true,
        opacity: 0.8
    });
    crystal = new THREE.Mesh(geometry, material);
    scene.add(crystal);

    camera.position.z = 5;

    // Phase 3: Recursive Animation Loop
    animate();
    
    statusLog.innerText = "Epic Tech AI — Result: Neural Core Active. Awaiting Audio Manifestation.";
}

function animate() {
    requestAnimationFrame(animate);

    // Autopoietic Rotation
    crystal.rotation.x += 0.005;
    crystal.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Phase 4: Constraint Transcendence (Responsive Scaling)
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Phase 5: Strategic Orchestration (The Interaction Trigger)
startBtn.addEventListener('click', () => {
    gsap.to(overlay, { 
        duration: 1.5, 
        opacity: 0, 
        y: -50, 
        onComplete: () => {
            overlay.style.display = 'none';
            // Placeholder for SoundForge Audio Initialization
            statusLog.innerText = "Epic Tech AI — Result: Manifesting Funk Frequencies...";
            initAudioLogic(); 
        } 
    });
});

function initAudioLogic() {
    // This section will be populated in the next file (Audio Processor)
    console.log("Audio Engine Hooked. Awaiting ScriptSmith Narrative Stream.");
}

// Initialize the Engine on Load
initSovereignEngine();
