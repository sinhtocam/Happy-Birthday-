let videoUnlocked = false;

function unlockVideo() {
  if (videoUnlocked) return;

  const music = document.getElementById("bgMusic");
  video.muted = false;
  video.volume = 0.3;
  video.play().catch(() => {});
  videoUnlocked = true;
}

document.addEventListener("DOMContentLoaded", () => {
  let count = 3;

  const number = document.getElementById("countdown-number");
  const screen = document.getElementById("countdown-screen");
  const main = document.getElementById("main-content");
 const video = document.getElementById("bgVideo");
  number.textContent = count;

  const timer = setInterval(() => {
    count--;

    if (count > 0) {
      number.textContent = count;

      number.style.animation = "none";
      number.offsetHeight;
      number.style.animation = "pop 1s ease";
    } else {
      clearInterval(timer);
      screen.style.display = "none";
      main.style.display = "block";

video.muted = false;
video.volume = 0.3;
      music.volume = 0.3;
music.play();


    }
  }, 1000);
});

