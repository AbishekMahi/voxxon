// Greatings
var myDate = new Date();
var hrs = myDate.getHours();
var greet;
if (hrs < 12)
  greet = 'Good Morning!';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good Afternoon!';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good Evening!';
document.getElementById('autoGreetings').innerHTML = '<h2>' + greet + '</h2>';

//Nav Blur:
var nav = document.querySelector('nav'); // Identify target

window.addEventListener('scroll', function (event) { // To listen for event
  event.preventDefault();

  if (window.scrollY <= 300) { // Just an example
    nav.style.backgroundColor = 'transparent'; // or default color
  } else {
    nav.style.backgroundColor = '#13120D';
  }
});


// heart
const like = document.getElementById("like");
like.addEventListener("click", function () {
  like.classList.toggle("liked");
});


// forward
function goForward() {
  window.history.forward();
}
// backward
function goBack() {
  window.history.back();
}

// Play and Pause
var ppicon = document.getElementById("ppbutton");
var audio = document.getElementById("audiofile");
ppbutton.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    ppicon.src = "icons/pause.png";
  } else {
    audio.pause();
    ppicon.src = "icons/play.png";
  }
});
$(window).keypress(function (e) {
  if (e.which == 32) {
    if (audio.paused) {
      ppicon.src = "icons/pause.png";
      audio.play();
    } else {
      audio.pause();
      ppicon.src = "icons/play.png";
    }
  }
});


window.addEventListener('keypress', function(e) {
  if(e.which == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

// mute unmute
var mutebtn = document.getElementById("mutebtn")
mutebtn.addEventListener("click", mute);
function mute() {
  if (audio.muted) {
    audio.muted = false;
    mutebtn.src = "icons/volume.png";
  } else {
    audio.muted = true;
    mutebtn.src = "icons/mute.png";
  }
}
// $(window).keypress(function (event) {
//   if (event.which == 77) {
//     if (audio.muted) {
//       mutebtn.src = "icons/volume.png";
//       audio.muted = false;
//     } else {
//       audio.muted = true;
//       mutebtn.src = "icons/mute.png";
//     }
//   }
// });

// volume control
var volumeslider;
volumeslider = document.getElementById("volumeslider");
volumeslider.addEventListener("click", setvolume);

function setvolume() {
  audio.volume = volumeslider.value / 100;
}

// audio source
const music = document.querySelector('#audiofile');

let currentMusic = 0;
const songName = document.querySelector('.current-song-name');
const artistName = document.querySelector('.artist-name');
const coverImage = document.querySelector('#cover');
const currentMusicTime = document.querySelector('.start-time');
const musicDuration = document.querySelector('.play-time');
const seekBar = document.querySelector('.music-progress');
const queue = [...document.querySelectorAll('.queue-song')];

const repeatBtn = document.querySelector('.fa-retweet');


// funtion for setting up music

const setMusic = (i) => {
  seekBar.value = 0;
  let song = songs[i];
  currentMusic = i;

  music.src = song.path;

  songName.innerHTML = song.name;
  artistName.innerHTML = song.artist;
  coverImage.src = song.cover;

  setTimeout(() => {
    seekBar.max = music.duration;
    musicDuration.innerHTML = formatTime(music.duration);
  }, 300);
  currentMusicTime.innerHTML = '00 : 00';
  queue.forEach(item => item.classList.remove('active'));
  queue[currentMusic].classList.add('active');
}

setMusic(0);

// format duration in 00 : 00 format

const formatTime = (time) => {
  let min = Math.floor(time / 60);
  if (min < 10) {
    min = `0` + min;
  }

  let sec = Math.floor(time % 60);
  if (sec < 10) {
    sec = `0` + sec;
  }

  return `${min} : ${sec}`;
}

// //  forward btn
const forwardBtn = document.querySelector('.fa-forward');
forwardBtn.addEventListener('click', () => {
  if (currentMusic >= songs.length - 1) {
    currentMusic = 0;
  } else {
    currentMusic++;
  }
  setMusic(currentMusic);
  ppbutton.click();
})

// // backward btn
const backwardBtn = document.querySelector('.fa-backward');
backwardBtn.addEventListener('click', () => {
  if (currentMusic <= 0) {
    currentMusic = songs.length - 1;
  } else {
    currentMusic--;
  }
  setMusic(currentMusic);
  ppbutton.click();
})

// repeat button
repeatBtn.addEventListener('click', () => {
  repeatBtn.classList.toggle('active');
})

// Function to reset all values to their default
function resetValues() {
  currentMusicTime.textContent = "00:00";
  musicDuration.textContent = "00:00";
  seek_slider.value = 0;
}


// access playlist

const playlistSection = document.querySelector('.pl-queue');
const plButton = document.querySelector('#plButton');

plButton.addEventListener('click', () => {
  playlistSection.classList.toggle('active');
})

queue.forEach((item, i) => {
  item.addEventListener('click', () => {
    setMusic(i);
    ppbutton.click();
  })
})



// seek bar events

// setInterval(() => {
//   seekBar.value = music.start-time;
//   currentMusicTime.innerHTML = formatTime(music.start-time);
//   if(Math.floor(music.start-time) == Math.floor(seekBar.max)){
//       if(repeatBtn.className.includes('active')){
//           setMusic(currentMusic);
//           ppbutton.click();
//       } else{
//           forwardBtn.click();
//       }
//   }
// }, 500)
// seekBar.addEventListener('change', () => {
//   music.start-time = seekBar.value;
// })