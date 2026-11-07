const $ = (selector) => document.querySelector(selector);
$("#year").textContent = new Date().getFullYear();
$("#beginBtn").addEventListener("click", () =>
  $("#note").scrollIntoView({ behavior: "smooth" }),
);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);
document
  .querySelectorAll(".reveal")
  .forEach((section) => observer.observe(section));
function launchConfetti() {
  const pieces = ["✦", "●", "◆", "✧"];
  for (let i = 0; i < 85; i++) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.textContent = pieces[Math.floor(Math.random() * pieces.length)];
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.color = ["#244875", "#7896b8", "#dce5ef", "#ffffff"][i % 4];
    piece.style.fontSize = `${8 + Math.random() * 12}px`;
    piece.style.animationDelay = `${Math.random() * 1.2}s`;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}
$("#celebrateBtn").addEventListener("click", () => {
  launchConfetti();
  $("#finalMessage").textContent =
    "HAPPY BIRTHDAY, SUNNY BHAIYA! Keep shining. ❤️";
  $("#celebrateBtn").textContent = "One more time! ✦";
});
let audio;
let musicOn = false;

$("#musicToggle").addEventListener("click", async () => {
  if (!audio) {
    audio = new Audio("music.mp3");
    audio.volume = 0.25;
    audio.loop = true;
  }

  try {
    if (!musicOn) {
      await audio.play();
      musicOn = true;
      $("#musicToggle").innerHTML = "♫ <span>Turn off music</span>";
    } else {
      audio.pause();
      musicOn = false;
      $("#musicToggle").innerHTML = "♫ <span>Turn on music</span>";
    }
  } catch {
    $("#musicToggle").innerHTML = "♫ <span>Add music file</span>";
  }
});
