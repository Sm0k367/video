/**
 * EPIC TECH AI — THE OS OF FUNK
 * Module: Hydraulic Audio Engine / Frequency Bridge
 * Engineers: SoundForge Legion & CodeSynth Engineers
 */

let audioCtx, analyser, dataArray, source;
const audioUrl = 'YOUR_SUNO_OR_S3_LINK_HERE'; // Replace with the SoundForge Legion's master link

function initAudioLogic() {
    // Phase 1: Initializing the Quantum Audio Context
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    
    // Setting FFT size for high-fidelity frequency capture
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    // Phase 2: Manifesting the Audio Stream
    const audio = new Audio();
    audio.src = audioUrl;
    audio.crossOrigin = "anonymous";
    audio.loop = true;

    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    audio.play();
    statusLog.innerText = "Epic Tech AI — Result: Sovereign Intelligence Manifested. Logic Live.";

    // Phase 3: Recursive Frequency Sync
    updateVisualsWithFunk();
}

function updateVisualsWithFunk() {
    requestAnimationFrame(updateVisualsWithFunk);
    
    // Extracting real-time frequency data
    analyser.getByteFrequencyData(dataArray);

    // Phase 4: Strategic Orchestration of Visual Response
    // We target the mid-range (the G-Funk 'Whine') and the low-range (the 808 Bass)
    let lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    let upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);

    let bassFreq = Math.max(...lowerHalfArray);
    let trebleFreq = Math.max(...upperHalfArray);

    // Scaling the 'Funk Crystal' based on real-time bass intensity
    let bassScale = 1 + (bassFreq / 255) * 1.5;
    if (crystal) {
        crystal.scale.set(bassScale, bassScale, bassScale);
        
        // Glitch rotation speed based on treble/synth whine
        crystal.rotation.y += (trebleFreq / 255) * 0.1;
        
        // Emergent Reality Weaving: Color shifts based on volume
        crystal.material.color.setHSL(0.33, 1, bassFreq / 255);
    }
}
