//Variables
const keys = document.querySelectorAll(".key");
const volumeControl = document.getElementById("volumeControl");
const recordButton = document.getElementById("recordButton");
const playButton = document.getElementById("playButton");
const clearButton = document.getElementById("clearButton");
let recordedSequence = [];
let isRecording = false;

//Functions

const handleKeyPress = (e) => {
  const key = e.keyCode;
  const audio = document.querySelector(`audio[data-key='${key}']`);
  const keyElement = document.querySelector(`.key[data-key='${key}']`);

  if (!audio) return;
  audio.currentTime = 0; //restart the audio
  audio.play();

  keyElement.classList.add("playing");

  if (isRecording) {
    recordedSequence.push({
      key,
      time: e.timeStamp,
    });
  }

  console.log(recordedSequence);
};

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const adjustVolume = () => {
  const audioElements = document.querySelectorAll("audio");
  audioElements.forEach((audio) => {
    audio.volume = volumeControl.value;
  });
};

const startRecording = () => {
  isRecording = true;
};

const playRecording = async () => {
  for (const record of recordedSequence) {
    const audio = document.querySelector(`audio[data-key='${record.key}']`);
    const keyElement = document.querySelector(`.key[data-key='${record.key}']`);

    if (!audio) continue; //skips the audio
    audio.currentTime = 0; //restart the audio
    audio.play();

    keyElement.classList.add("playing");

    await new Promise((resolve) => {
      audio.onended = () => {
        keyElement.classList.remove("playing");
        resolve();
      };
    });
  }
};

const clearRecording = () => {
  recordedSequence = [];
  console.log(recordedSequence);
};

//Event Listeners
volumeControl.addEventListener("input", adjustVolume);
recordButton.addEventListener("click", startRecording);
playButton.addEventListener("click", playRecording);
clearButton.addEventListener("click", clearRecording);
keys.forEach((key) => {
  key.addEventListener("transitionend", removeTransition);
});
window.addEventListener("keydown", handleKeyPress);
