const songs = [
  {
    name: "India Waale",
    artist: "shahrukh khan",
    image: "images/india_waale.jpg",
    file: "songs/india_waale.mp3",
  },
  {
    name: "Sweety tera drama",
    artist: "Ayushmann Khurrana",
    image: "images/sweety_tera_drama.jpg",
    file: "songs/sweety_tera_drama.mp3",
  },
  {
    name: "Chammak Chalo",
    artist: "shahrukh khan",
    image: "images/chammak_chalo.jpg",
    file: "songs/chammak_chalo.mp3",
  },
];
document.onkeydown = (e) => {
  if (e.keyCode == 39) {
    next.click();
  } else if (e.keyCode == 37) {
    previous.click();
  } else if (e.keyCode == 32) {
    play.click();
  }
};
var index = 0;
var songName = document.querySelector(".heading");
var songArtist = document.querySelector(".heading");
var songImage = document.querySelector(".music_img");
play = document.getElementById("play");
var music = new Audio();
music.src = songs[index].file;
var playSong = () => {
  play.classList.replace("fa-play", "fa-pause");
  music.play();
  isplay = true;
  songImage.classList.add("rotateimg");
};
var pauseSong = () => {
  play.classList.replace("fa-pause", "fa-play");
  music.pause();
  isplay = false;
  songImage.classList.remove("rotateimg");
};
songName.firstElementChild.innerHTML = songs[index].name;
songArtist.lastElementChild.innerHTML = songs[index].artist;
songImage.firstElementChild.src = songs[index].image;
var isplay = false;
play.addEventListener("click", () => {
  if (!isplay) {
    isplay = true;
    playSong();
  } else {
    isplay = false;
    pauseSong();
  }
});
next = document.querySelector(".fa-forward");
next.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  songName.firstElementChild.innerHTML = songs[index].name;
  songArtist.lastElementChild.innerHTML = songs[index].artist;
  songImage.firstElementChild.src = songs[index].image;
  music.src = songs[index].file;
  playSong();
});
previous = document.querySelector(".fa-backward");
previous.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  songName.firstElementChild.innerHTML = songs[index].name;
  songArtist.lastElementChild.innerHTML = songs[index].artist;
  songImage.firstElementChild.src = songs[index].image;
  music.src = songs[index].file;
  playSong();
});
// progress bar start

progress = document.getElementById("progress");
progress_bar = document.querySelector(".progress_bar");
curr_time = document.getElementById("current_time");
time_duration = document.getElementById("time_duration");
music.addEventListener("timeupdate", (event) => {
  // console.log(event);
  const { currentTime, duration } = event.srcElement;
  let progress_time = (currentTime / duration) * 100;
  progress.style.width = `${progress_time}%`;
  let currentTime_min = Math.floor(currentTime / 60);
  let currentTime_sec = Math.floor(currentTime % 60);
  let duration_min = Math.floor(duration / 60);
  let duration_sec = Math.floor(duration % 60);
  if (currentTime_sec < 10) {
    currentTime_sec = `0${currentTime_sec}`;
  }
  curr_time.innerHTML = `${currentTime_min}:${currentTime_sec}`;
  time_duration.innerHTML = `${duration_min}:${duration_sec}`;
});
progress_bar.addEventListener("click", (event) => {
  let timeonclick = (event.offsetX / event.srcElement.clientWidth) * 100;
  console.log(timeonclick);
  music.currentTime = (music.duration * timeonclick) / 100;
  console.log(music.duration);
  console.log(music.currentTime);
});

// progress bar end
