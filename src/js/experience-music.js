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

// document.querySelectorAll(".experience-player").forEach((player) => {
//   const audio = player.querySelector(".audio");
//   const playIcon = player.querySelector(".play-icon");
//   const pauseIcon = player.querySelector(".pause-icon");
//   const seekBar = player.querySelector(".seek-bar");
//   const timeDisplay = player.querySelector(".time-display");

//   function formatTime(seconds) {
//     const min = Math.floor(seconds / 60)
//       .toString()
//       .padStart(2, "0");
//     const sec = Math.floor(seconds % 60)
//       .toString()
//       .padStart(2, "0");
//     return `${min}:${sec}`;
//   }

//   function togglePlay() {
//     if (audio.paused) {
//       audio.play();
//       playIcon.classList.add("hide");
//       pauseIcon.classList.remove("hide");
//     } else {
//       audio.pause();
//       pauseIcon.classList.add("hide");
//       playIcon.classList.remove("hide");
//     }
//   }

//   playIcon.addEventListener("click", togglePlay);
//   pauseIcon.addEventListener("click", togglePlay);

//   audio.addEventListener("timeupdate", () => {
//     if (!audio.duration) return;
//     seekBar.value = (audio.currentTime / audio.duration) * 100;
//     timeDisplay.textContent = formatTime(audio.currentTime);
//   });

//   seekBar.addEventListener("input", () => {
//     audio.currentTime = (seekBar.value / 100) * audio.duration;
//   });
// });

// On déclare ces deux variables à l'extérieur pour qu'elles soient partagées par tous les lecteurs
let currentlyPlayingAudio = null;
let currentlyPlayingIcons = null;

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
      // 1. ARRÊTER LA MUSIQUE EN COURS (si il y en a une différente de celle-ci)
      if (currentlyPlayingAudio && currentlyPlayingAudio !== audio) {
        currentlyPlayingAudio.pause();
        // On remet les icônes de l'ancien lecteur à l'état "Play"
        currentlyPlayingIcons.play.classList.remove("hide");
        currentlyPlayingIcons.pause.classList.add("hide");
      }

      // 2. LANCER LA NOUVELLE MUSIQUE
      audio.play();
      playIcon.classList.add("hide");
      pauseIcon.classList.remove("hide");

      // 3. ENREGISTRER CE LECTEUR COMME ÉTANT CELUI "EN COURS"
      currentlyPlayingAudio = audio;
      currentlyPlayingIcons = { play: playIcon, pause: pauseIcon };
    } else {
      // METTRE EN PAUSE SI ON RE-CLIQUE SUR LE MÊME LECTEUR
      audio.pause();
      pauseIcon.classList.add("hide");
      playIcon.classList.remove("hide");

      // On réinitialise la mémoire si on met en pause
      currentlyPlayingAudio = null;
      currentlyPlayingIcons = null;
    }
  }

  // Écouteurs pour les boutons
  playIcon.addEventListener("click", togglePlay);
  pauseIcon.addEventListener("click", togglePlay);

  // Mise à jour de la barre de progression
  audio.addEventListener("timeupdate", () => {
    if (!audio.duration) return;
    seekBar.value = (audio.currentTime / audio.duration) * 100;
    timeDisplay.textContent = formatTime(audio.currentTime);
  });

  // Scroll dans la musique via la barre
  seekBar.addEventListener("input", () => {
    audio.currentTime = (seekBar.value / 100) * audio.duration;
  });

  // Quand la musique se termine d'elle-même
  audio.addEventListener("ended", () => {
    playIcon.classList.remove("hide");
    pauseIcon.classList.add("hide");
    if (currentlyPlayingAudio === audio) {
      currentlyPlayingAudio = null;
      currentlyPlayingIcons = null;
    }
  });
});
