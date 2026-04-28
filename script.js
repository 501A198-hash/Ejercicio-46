const osmd = new opensheetmusicdisplay.OpenSheetMusicDisplay("score-container");
const audioPlayer = new OsmdAudioPlayer();

async function init() {
    // IMPORTANTE: El nombre entre comillas debe ser IGUAL al de tu archivo subido
    await osmd.load("ejercicio46.musicxml"); 
    osmd.render();
    await audioPlayer.loadScore(osmd);
}

document.getElementById("btn-play").addEventListener("click", () => {
    if (audioPlayer.state === "STOPPED" || audioPlayer.state === "PAUSED") {
        audioPlayer.play();
    } else {
        audioPlayer.pause();
    }
});

document.getElementById("tempo-slider").addEventListener("input", (e) => {
    const bpm = e.target.value;
    document.getElementById("tempo-val").innerText = bpm + " BPM";
    audioPlayer.setTempo(bpm);
});

init();
