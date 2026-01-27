// const audio = document.getElementById("audio");
// const playIcon = document.getElementById("play-icon");
// const pauseIcon = document.getElementById("pause-icon");
// const seekBar = document.getElementById("seek-bar");
// const timeDisplay = document.getElementById("time-display");

// function formatTime(seconds) {
//   const min = Math.floor(seconds / 60)
//     .toString()
//     .padStart(2, "0");
//   const sec = Math.floor(seconds % 60)
//     .toString()
//     .padStart(2, "0");
//   return `${min}:${sec}`;
// }

// // toggle
// function togglePlay() {
//   if (audio.paused) {
//     audio.play();
//     playIcon.classList.add("hide");
//     pauseIcon.classList.remove("hide");
//   } else {
//     audio.pause();
//     pauseIcon.classList.add("hide");
//     playIcon.classList.remove("hide");
//   }
// }

// playIcon.addEventListener("click", togglePlay);
// pauseIcon.addEventListener("click", togglePlay);

// audio.addEventListener("timeupdate", () => {
//   if (!audio.duration) return;
//   seekBar.value = (audio.currentTime / audio.duration) * 100;
//   timeDisplay.textContent = formatTime(audio.currentTime);
// });

// seekBar.addEventListener("input", () => {
//   audio.currentTime = (seekBar.value / 100) * audio.duration;
// });

document.querySelectorAll(".experience-player").forEach((player) => {
  const audio = player.querySelector(".audio");
  const playIcon = player.querySelector(".play-icon");
  const pauseIcon = player.querySelector(".pause-icon");
  const seekBar = player.querySelector(".seek-bar");
  const timeDisplay = player.querySelector(".time-display");

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const sec = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${min}:${sec}`;
  }

  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playIcon.classList.add("hide");
      pauseIcon.classList.remove("hide");
    } else {
      audio.pause();
      pauseIcon.classList.add("hide");
      playIcon.classList.remove("hide");
    }
  }

  playIcon.addEventListener("click", togglePlay);
  pauseIcon.addEventListener("click", togglePlay);

  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    seekBar.value = (audio.currentTime / audio.duration) * 100;
    timeDisplay.textContent = formatTime(audio.currentTime);
  });

  seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  });
});
