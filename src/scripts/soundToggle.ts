import { SMSoundService } from "./sound-service";

export function initializeSoundToggle() {
  const toggleSound = document.getElementById("toggleSound");
  const soundIcon = toggleSound?.querySelector("span");
  let isSoundOn = JSON.parse(localStorage.getItem("isSoundOn") || "true");

  function updateSoundState() {
    if (isSoundOn) {
      SMSoundService.enable();
      localStorage.setItem("isSoundOn", "true");
      if (soundIcon) {
        soundIcon.textContent = "🔊";
      }
    } else {
      SMSoundService.disable();
      localStorage.setItem("isSoundOn", "false");
      if (soundIcon) {
        soundIcon.textContent = "🔇";
      }
    }
  }

  updateSoundState();

  if (toggleSound && soundIcon) {
    toggleSound.addEventListener("click", function () {
      isSoundOn = !isSoundOn;
      updateSoundState();
    });
  }
}