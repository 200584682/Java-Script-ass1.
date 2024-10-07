// Array of words with Indian themes
const subjects = [
    "A clever monkey",
    "A wise elephant",
    "A brave little tiger",
    "A playful peacock",
    "A kind-hearted princess"
];
const verbs = [
    "dances with",
    "explores",
    "plays with",
    "guides",
    "ventures with"
];
const adjectives = [
    "colorful",
    "joyful",
    "brave",
    "sparkling",
    "graceful"
];
const objects = [
    "a magical lotus",
    "a golden necklace",
    "a silver crown",
    "a mythical sword",
    "a beautiful sari"
];
const places = [
    "in a lush jungle",
    "by the flowing Ganges",
    "in a majestic palace",
    "under the twinkling stars",
    "in a vibrant marketplace"
];

// Stores selected words
let selectedSubject = "", selectedVerb = "", selectedAdjective = "", selectedObject = "", selectedPlace = "";
let textToSpeak = "";

// Take a random word from an array
function getRandomWord(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Button event listeners
document.getElementById('subjectBtn').addEventListener('click', () => {
    selectedSubject = getRandomWord(subjects);
    updateStory();
});

document.getElementById('verbBtn').addEventListener('click', () => {
    selectedVerb = getRandomWord(verbs);
    updateStory();
});

document.getElementById('adjectiveBtn').addEventListener('click', () => {
    selectedAdjective = getRandomWord(adjectives);
    updateStory();
});

document.getElementById('objectBtn').addEventListener('click', () => {
    selectedObject = getRandomWord(objects);
    updateStory();
});

document.getElementById('placeBtn').addEventListener('click', () => {
    selectedPlace = getRandomWord(places);
    updateStory();
});

// Update the story
function updateStory() {
    const subject = selectedSubject || "___";
    const verb = selectedVerb || "___";
    const adjective = selectedAdjective || "___";
    const object = selectedObject || "___";
    const place = selectedPlace || "___";

    textToSpeak = `${subject} ${verb} a ${adjective} ${object} ${place}.`;
    document.getElementById('story').textContent = textToSpeak;
}

// Speak the story
document.getElementById('speakBtn').addEventListener('click', () => {
    if (textToSpeak.includes("___")) {
        alert("Please complete the story by selecting all parts.");
    } else {
        speakNow(textToSpeak);
    }
});

// Story reset
document.getElementById('resetBtn').addEventListener('click', () => {
    selectedSubject = selectedVerb = selectedAdjective = selectedObject = selectedPlace = "";
    textToSpeak = "";
    document.getElementById('story').textContent = "Your story will appear here.";
});

function speakNow(text) {
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
}
