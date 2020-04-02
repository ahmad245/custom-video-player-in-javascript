// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.dropdown-trigger');
//    var instances = M.Dropdown.init(elems, {});
   
//   });
// noUiSlider.create(slider, {
//  start: [0, 80],
//  connect: true,
//  step: 1,
//  orientation: 'horizontal', // 'horizontal' or 'vertical'
//  range: {
//    'min': 0,
//    'max': 100
//  }
// });

M.AutoInit();
var slider = document.getElementById('test-slider');
console.log(slider);

const video=document.querySelector('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const pause=document.getElementById('pause');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

const toggleStatus=()=>{
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}
const updatePlayIcon=()=>{
  play.classList.add('hide');
  pause.classList.remove('hide');
}
const updatePauseIcon=()=>{
    play.classList.remove('hide');
    pause.classList.add('hide');
  }
  const updateProgress=()=>{
    progress.value=(video.currentTime / video.duration)*100;
    // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
  }
  const updateCurentTime=()=>{
    
    video.currentTime=(+progress.value * video.duration) / 100;
  }
  const stopVideo=()=>{
    video.currentTime=0;
    video.pause();
  }


video.addEventListener('click',toggleStatus);
video.addEventListener('play',updatePlayIcon);
video.addEventListener('pause',updatePauseIcon);
video.addEventListener('timeupdate',updateProgress);

play.addEventListener('click',toggleStatus);
stop.addEventListener('click',stopVideo);
pause.addEventListener('click',toggleStatus);

progress.addEventListener('change',updateCurentTime);