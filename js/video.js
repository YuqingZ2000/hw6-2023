var video;

video = document.querySelector("#player1");
let playButton = document.querySelector("#play");
let pauseButton = document.querySelector("#pause");
let slowerButton = document.querySelector("#slower");
let fasterButton = document.querySelector("#faster");
let skipButton = document.getElementById("skip");
let muteButton = document.querySelector("#mute");
let volumeSlider = document.querySelector("#slider");
let volumeInfo = document.querySelector("#volume");
let oldSchoolButton = document.querySelector("#vintage");
let originalButton = document.querySelector("#orig");

// Page load - Initialize the video element and turn off autoplay and looping.
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	console.log("Autoplay is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

// Play Button - Play the video and update the volume information.
playButton.addEventListener("click", function () {
	video.play();
	console.log("Video is played");
    updateVolumeInfo(); 
});

// Pause Button - Pause the video.
pauseButton.addEventListener("click", function () {
    video.pause();
	console.log("Video is paused");
});

// Slow Down - Slow the current video speed by 10% each time the button 
// is clicked and log the new speed to the console.
slowerButton.addEventListener("click", function () {
    video.playbackRate *= 0.9;
	video.playbackRate = parseFloat(video.playbackRate.toFixed(2));
    console.log("New Video Speed: " + video.playbackRate);
});

// Speed Up - Increase the current video speed each time the button is clicked
// and log the new speed to the console.
fasterButton.addEventListener("click", function () {
    video.playbackRate /= 0.9;
	video.playbackRate = parseFloat(video.playbackRate.toFixed(2));
    console.log("New Video Speed: " + video.playbackRate);
});

// Skip Ahead - Advance the current video by 10 seconds. If the video length has been 
// exceeded go back to the start of the video - no farther. Log the current 
// location of the video.
skipButton.addEventListener("click", function () {
    video.currentTime += 10;
    if (video.currentTime >= video.duration) {
		console.log("Video exceeds duration");
		video.currentTime = 0;
    }
    console.log("Current video location: " + video.currentTime);
});

// Mute - Mute/unmute the video and update the text in the button.
muteButton.addEventListener("click", function () {
	video.muted = !video.muted;
	if (video.muted) {
		muteButton.innerText = "Unmute";
		volumeSlider.value = 0;
  	} else {
		muteButton.innerText = "Mute";
		volumeSlider.value = 100;
  	}
  	updateVolumeInfo();
});

// Volume Slider - Change the volume and update the volume information.
volumeSlider.addEventListener("input", function () {
	updateVolumeInfo(); 
});

// Styled - Utilize the existing oldSchool class on the video element
oldSchoolButton.addEventListener("click", function () {
    video.classList.add("oldSchool");
	console.log("Old school style on");
});

// Original - Remove the oldSchool class from the video.
originalButton.addEventListener("click", function () {
    video.classList.remove("oldSchool");
	console.log("Old school style removed");
});

// Function - Update the volume information.
function updateVolumeInfo() {
    var volume = volumeSlider.value / 100;
    video.volume = volume;
    volumeInfo.innerText = Math.round(volume * 100) + "%";
}

