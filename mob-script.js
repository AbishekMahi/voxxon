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

// spacebar down
window.addEventListener('keypress', function (e) {
  if (e.which == 32 && e.target == document.body) {
    e.preventDefault();
  }
});

// carousel
const carousel = [...document.querySelectorAll('.carousel img')];
let carouselImageIndex = 0;
const changeCarousel = () => {
  carousel[carouselImageIndex].classList.toggle('active');

  if (carouselImageIndex >= carousel.length - 1) {
    carouselImageIndex = 0;
  } else {
    carouselImageIndex++;
  }

  carousel[carouselImageIndex].classList.toggle('active');
}
setInterval(() => {
  changeCarousel();
}, 3000);



// heart
const like = document.getElementById("like");
like.addEventListener("click", function () {
  like.classList.toggle("liked");
});


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

// const backToHomeBtn = document.querySelector('.music-player-section .back-btn');

// backToHomeBtn.addEventListener('click', () => {
//   musicPlayerSection.classList.remove('active');
// })

// access menu button
const menuBtn = document.querySelector('#menu');
const menuSection = document.querySelector('.menu_slider');

menuBtn.addEventListener('click', () => {
  menuSection.classList.add('menu_open');
})

// back from menu to home
const menuToHomeBtn = document.querySelector('#menu_back');

menuToHomeBtn.addEventListener('click', () => {
  // menuSection.classList.remove('menu_close');
  menuSection.classList.remove('menu_open');
})

// access Full Player
const playerSection = document.querySelector('.full-player');
const miniPlayer = document.querySelector('.player');

miniPlayer.addEventListener('click', () => {
  playerSection.classList.toggle('active');
})

// back from Full Player to home
const plrToHome = document.querySelector('#player_back');

plrToHome.addEventListener('click', () => {
  playerSection.classList.remove('active');
})

