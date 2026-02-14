

const messages = [
    "Wait, think again!",
    "Are you completely sure?",
    "Maybe reconsider?",
    "Come on, give it a chance!",
    "Pretty please?",
    "You might regret this...",
    "Last chance to change your mind!",
    "I'm running out of reasons here...",
    "Fine, I'll leave you alone...",
    "Just kidding! Say yes! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-btn');
    const yesButton = document.querySelector('.yes-btn');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}