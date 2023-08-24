function showDescription(personName) {
    var description = document.getElementById('description-' + personName);
    if (description.style.display === 'none') {
      description.style.display = 'block';
    } else {
      description.style.display = 'none';
    }
  }
  // Variables to keep track of the currently playing speech
let currentlySpeaking = null;

// Function to speak the description
function speakDescription(descriptionId) {
  const descriptionElement = document.getElementById(descriptionId);
  const descriptionText = descriptionElement.textContent;

  // Check if the SpeechSynthesis API is available
  if ('speechSynthesis' in window) {
    const speechSynthesis = window.speechSynthesis;
    const speechUtterance = new SpeechSynthesisUtterance(descriptionText);

    // Pause any currently speaking speech
    if (currentlySpeaking) {
      speechSynthesis.cancel();
      currentlySpeaking = null;
    }

    // Speak the description
    speechSynthesis.speak(speechUtterance);
    currentlySpeaking = speechUtterance;
  } else {
    alert('Text-to-speech is not supported in this browser.');
  }
}

// Function to pause speech
function pauseSpeech() {
  if (currentlySpeaking) {
    const speechSynthesis = window.speechSynthesis;
    speechSynthesis.pause();
  }
}

