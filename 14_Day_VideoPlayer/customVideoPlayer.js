
//video onclick and toggle button to play and pause

const video =  document.querySelector(".videoplayer");
const toggle = document.querySelector(".toggle");

video.addEventListener("click", toggleVideo)
toggle.addEventListener("click", toggleVideo)

function toggleVideo(){
    const method = video.paused ? "play" : "pause"
    video[method]()
}

//Updating play and pause icon 

video.addEventListener("play" , updateIcon)
video.addEventListener("pause" , updateIcon)

function updateIcon(){
    const icon = this.paused ? "▶" : "⏸";
    toggle.textContent = icon
    
}

//Skipping video

const skip = document.querySelectorAll("[data-skip]")

skip.forEach(skip => skip.addEventListener("click" , skippingfunc))

function skippingfunc(){
     //   console.log(this.dataset);
  //   console.log(this.dataset.skip);
    video.currentTime += parseFloat(this.dataset.skip)
}

//Range for volume and speed of the video

const ranges = document.querySelectorAll(".player__slider");

ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

function handleRangeUpdate() {
  //   console.log(this.name);
  //   console.log(this.value);
  video[this.name] = this.value;
}


//Progress bar which is created in width ,height and bgcolor

const progressBar = document.querySelector(".progress-filled")


video.addEventListener("timeupdate", handleProgress);

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

//When user clicks on progress bar or moves the video playtime on progress bar

const progress = document.querySelector(".progress");

let mousedown = false;
progress.addEventListener("click", scrub);

progress.addEventListener("mousemove", (e) => {
   if (mousedown) {
     scrub(e);
   }
 });
 
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));

function scrub(e) {
  //   console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}