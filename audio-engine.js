/**
 * EPIC TECH AI — THE OS OF FUNK
 * Module: Hydraulic Audio Engine / Frequency Bridge
 * Engineers: SoundForge Legion & CodeSynth Engineers
 */

let audioCtx, analyser, dataArray, source;
// NOTE: Use the direct audio stream URL from Suno for the Web Audio API to function
const audioUrl = 'https://cdn1.suno.ai/Vu1FjMZ9SZt2Z0Bi.mp3'; 

function initAudioLogic() {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    const bufferLength = analyser.frequencyBinCount;
    dataArray = new Uint8Array(bufferLength);

    const audio = new Audio();
    audio.src = audioUrl;
    audio.crossOrigin = "anonymous";
    audio.loop = false; // Set to false to respect the 480s duration

    source = audioCtx.createMediaElementSource(audio);
    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    audio.play();
    statusLog.innerText = "Epic Tech AI — Result: Sovereign Intelligence Manifested. Movement I Active.";

    updateVisualsWithFunk(audio);
}

function updateVisualsWithFunk(audio) {
    requestAnimationFrame(() => updateVisualsWithFunk(audio));
    analyser.getByteFrequencyData(dataArray);

    let lowerHalfArray = dataArray.slice(0, (dataArray.length / 2) - 1);
    let upperHalfArray = dataArray.slice((dataArray.length / 2) - 1, dataArray.length - 1);

    let bassFreq = Math.max(...lowerHalfArray);
    let trebleFreq = Math.max(...upperHalfArray);

    let bassScale = 1 + (bassFreq / 255) * 1.5;
    
    if (crystal) {
        crystal.scale.set(bassScale, bassScale, bassScale);
        crystal.rotation.y += (trebleFreq / 255) * 0.1;

        // --- Strategic Movement Tracking (8-Minute Logic) ---
        const currentTime = audio.currentTime;

        // Movement II: The Digital Crate (2:00 - 4:00) - Shift to Gold
        if (currentTime > 120 && currentTime <= 240) {
            crystal.material.color.setHex(0xffcc00); 
            statusLog.innerText = "Epic Tech AI — Result: Movement II - Digital Crate Active.";
        } 
        // Movement III: The Talkbox Vault (4:00 - 6:00) - Pulse Blue/Green
        else if (currentTime > 240 && currentTime <= 360) {
            crystal.material.color.setHSL(0.5, 1, bassFreq / 255);
            statusLog.innerText = "Epic Tech AI — Result: Movement III - Talkbox Vault Active.";
        }
        // Movement IV: The Sovereign Ascent (6:00 - 8:00) - High Intensity White/Green
        else if (currentTime > 360) {
            crystal.material.color.setHex(0xffffff);
            statusLog.innerText = "Epic Tech AI — Result: Movement IV - Sovereign Ascent.";
        }
        else {
            crystal.material.color.setHex(0x00ff00); // Default G-Funk Green
        }
    }
}
