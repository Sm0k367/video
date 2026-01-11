/**
 * EPIC TECH AI — THE OS OF FUNK
 * Module: Hydraulic Audio Engine / Frequency Bridge
 * Engineers: SoundForge Legion & CodeSynth Engineers
 */

let audioCtx, analyser, dataArray, source;
// Direct CDN link derived from the SoundForge Legion's manifest
const audioUrl = 'https://cdn1.suno.ai/Vu1FjMZ9SZt2Z0Bi.mp3'; 

function initAudioLogic() {
    // Phase 1: Initializing the Sovereign Audio Context
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    
    // Commands the engine to resume, transcending browser constraints
    audioCtx.resume().then(() => {
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        // Phase 2: Manifesting the G-Funk Stream
        const audio = new Audio();
        audio.src = audioUrl;
        audio.crossOrigin = "anonymous"; // Essential for First-Try Perfection
        
        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        audio.play();
        statusLog.innerText = "Epic Tech AI — Result: Movement I - The Needle Drop Active.";

        // Phase 3: Recursive Frequency Sync
        updateVisualsWithFunk(audio);
    });
}

function updateVisualsWithFunk(audio) {
    requestAnimationFrame(() => updateVisualsWithFunk(audio));
    analyser.getByteFrequencyData(dataArray);

    // Strategic Orchestration of Visual Response
    let lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    let upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);

    let bassFreq = Math.max(...lowerHalfArray);
    let trebleFreq = Math.max(...upperHalfArray);

    // Scaling the crystal based on G-Funk Bass intensity
    let bassScale = 1 + (bassFreq / 255) * 1.8;
    
    if (crystal) {
        crystal.scale.set(bassScale, bassScale, bassScale);
        crystal.rotation.y += (trebleFreq / 255) * 0.15;

        // --- Movement-Aware Axiomatic Genesis ---
        const time = audio.currentTime;

        // Movement II: The Digital Crate (2:00 - 4:00)
        if (time > 120 && time <= 240) {
            crystal.material.color.setHex(0xffcc00); // Shift to Digital Gold
            statusLog.innerText = "Epic Tech AI — Result: Movement II - Digital Crate.";
        } 
        // Movement III: The Talkbox Vault (4:00 - 6:00)
        else if (time > 240 && time <= 360) {
            crystal.material.color.setHSL(0.5, 1, bassFreq / 255);
            statusLog.innerText = "Epic Tech AI — Result: Movement III - Talkbox Vault.";
        }
        // Movement IV: The Sovereign Ascent (6:00 - 8:00)
        else if (time > 360) {
            crystal.material.color.setHex(0xffffff); // Absolute Excellence (White)
            statusLog.innerText = "Epic Tech AI — Result: Movement IV - Sovereign Ascent.";
        }
        else {
            crystal.material.color.setHex(0x00ff00); // Standard OS Funk Green
        }
    }
}
