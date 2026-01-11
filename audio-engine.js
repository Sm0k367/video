/**
 * EPIC TECH AI — THE OS OF FUNK
 * Module: Refactored Hydraulic Audio Engine
 * Engineers: CodeSynth Engineers & KeyMaster Ops
 */

function initAudioLogic() {
    // Phase 1: Create and IMMEDIATELY resume the context
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    
    // THE CRITICAL FIX: Explicitly resume the context on user gesture
    audioCtx.resume().then(() => {
        console.log("Epic Tech AI — Result: AudioContext Resumed.");
        
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);

        const audio = new Audio();
        // Ensure this is the DIRECT .mp3 link from the Suno CDN
        audio.src = 'https://cdn1.suno.ai/Vu1FjMZ9SZt2Z0Bi.mp3'; 
        audio.crossOrigin = "anonymous"; // Necessary for frequency analysis
        
        // Error handling for Relentless Manifestation
        audio.onerror = () => {
            statusLog.innerText = "ERROR: LINK EXPIRED OR NOT DIRECT. USE CDN URL.";
        };

        source = audioCtx.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioCtx.destination);

        audio.play().catch(e => {
            statusLog.innerText = "EPIC TECH AI — Result: Playback Blocked. Check Link.";
        });

        updateVisualsWithFunk(audio);
    });
}
