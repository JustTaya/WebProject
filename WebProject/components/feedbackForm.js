document.write(`<div id="fade"></div>
<form id="feedback-form">
    <h1>Обратная связь</h1>
    <label for="name">Ваше имя</label>
    <input placeholder="Name: >4 letters" type="text" id="name" minlength="4">
    <label for="phone">Телефон</label>
    <input placeholder="Format: 095-777-7777" type="tel" id="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
    <label for="email">Email</label>
    <input placeholder="mail@mail.mail" type="email" id="email">
    <label for="message">Сообщение</label>
    <textarea id="message"></textarea>
    <div class="button" id="submit-button">Отправить</div>
</form>`);