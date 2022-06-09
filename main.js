const background = document.getElementById("video-background");
const playBtn = document.getElementById("btn-play");
const audio = document.getElementById("audio");
const progressBar = document.getElementById("progressBar");
const currentTime = document.getElementById("currentTime"); 
const durationTime = document.getElementById("durationTime");

function playPause(){
    if(audio.paused){
      background.play();
      audio.play();
    }else{
      background.pause();
      audio.pause();
  }
}

  playBtn.style.backgroundColor = 'transparent'

  playBtn.addEventListener("click", playPause);

  function progressValue() {
    progressBar.max = audio.duration;
    progressBar.value = audio.currentTime;

    currentTime.textContent = formatTime(audio.currentTime);
    durationTime.textContent = formatTime(audio.duration);
  }

  setInterval(progressValue, 500);

  function formatTime(sec) {
    let minutes = Math.floor(sec / 60);
    let seconds = Math.floor(sec - minutes * 60);
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  }

  function changeProgressBar() {
    audio.currentTime = progressBar.value;
  }