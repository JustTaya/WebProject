let feedbackButton = document.getElementById("feedback-button");
let fade = document.getElementById("fade");
let feedbackForm = document.getElementById("feedback-form");
let submitButton = document.getElementById("submit-button");
feedbackButton.addEventListener("click", showFeedbackForm);
fade.addEventListener("click",hideFeedbackForm);
submitButton.addEventListener("click", validateFeedbackForm);

window.onload=function () {
    feedbackForm.reset();
};

function validateFeedbackForm(event) {
    let name=document.getElementById("name");
    if(!validateName(name))
        alert("Fill form correct!");
    let phone=document.getElementById("phone");
    validatePhone(phone);
    let email=document.getElementById("email");
    validateEmail(email);
    let message=document.getElementById("message");
    validateMessage(message);
    hideFeedbackForm();
}

function validateName(name) {

}

function validatePhone(phone) {

}

function validateEmail(email) {

}

function validateMessage(message) {

}

function showFeedbackForm(event) {
    fade.style.display = "block";
    feedbackForm.style.display = "flex";
}

function hideFeedbackForm(event) {
    fade.style.display = "none";
    feedbackForm.style.display = "none";
    feedbackForm.reset();
}