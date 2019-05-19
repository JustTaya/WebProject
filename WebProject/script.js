let feedbackButton = document.getElementById("feedback-button");
let fade = document.getElementById("fade");
let feedbackForm = document.getElementById("feedback-form");
let submitButton = document.getElementById("submit-button");

feedbackButton.addEventListener("click", showFeedbackForm);
fade.addEventListener("click", hideFeedbackForm);
submitButton.addEventListener("click", validateFeedbackForm);

let name = document.getElementById("name");
name.addEventListener("input", validateName);
let phone = document.getElementById("phone");
phone.addEventListener("input", validatePhone);
let email = document.getElementById("email");
email.addEventListener("input", validateEmail);
let message = document.getElementById("message");
message.addEventListener("input", validateMessage);

function validateFeedbackForm(event) {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        name.required = true;
        phone.required = true;
        email.required = true;
        message.required = true;
        alert("Fill form correct!");
    } else {
        hideFeedbackForm();
    }
}

function validateName() {
    if (name.validity.rangeUnderflow) {
        name.setCustomValidity("Name has to be >4 characters long.");
        return false;
    } else {
        name.setCustomValidity("");
        return true;
    }
}

function validatePhone() {
    if (phone.validity.patternMismatch) {
        phone.setCustomValidity("Phone format: ***-***-****");
        return false;
    } else {
        phone.setCustomValidity("");
        return true;
    }
}

function validateEmail() {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("Wrong email");
        return false;
    } else {
        email.setCustomValidity("");
        return true;
    }
}

function validateMessage() {
    if (!message.value) {
        message.setCustomValidity("Empty message");
        return false;
    } else {
        message.setCustomValidity("");
        return true;
    }
}

function showFeedbackForm(event) {
    fade.style.display = "block";
    feedbackForm.style.display = "flex";
}

function hideFeedbackForm(event) {
    name.required = false;
    phone.required = false;
    email.required = false;
    message.required = false;

    fade.style.display = "none";
    feedbackForm.style.display = "none";
    feedbackForm.reset();
}

let imageNumber = 0;

let images = [
    document.getElementById('img1'),
    document.getElementById('img2'),
    document.getElementById('img3'),
    document.getElementById('img4'),
];

window.onload = async function () {
    feedbackForm.reset();
    while (true) {
        changeSlide(true);
        await sleep(4600);
    }
};

async function changeSlide(isNext) {
    images[imageNumber].style.opacity = '0';

    if (isNext) {
        if (imageNumber === 3)
            imageNumber = 0;
        else imageNumber++;
    } else {
        if (imageNumber === 0)
            imageNumber = 3;
        else imageNumber--;
    }
    await sleep(600);
    images[imageNumber].style.opacity = '1';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('prev-slide').onclick = function () {
    changeSlide(false);
};

document.getElementById('next-slide').onclick = function () {
    changeSlide(true);
};

let hiddenMenu = document.getElementById("hidden-menu");
let menu = document.getElementById("menu-items");
hiddenMenu.addEventListener("click", showMenu);
let menuOpened = false;

function showMenu(event) {
    if (menuOpened) {
        menu.style.marginTop = '-400px';
        menuOpened = false;
    } else {
        menu.style.marginTop = '20px';
        menuOpened = true;
    }
}
