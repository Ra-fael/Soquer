const send = document.getElementById('enviar');
const nameField = document.getElementById('name');
const email = document.getElementById('email');


nameField.addEventListener('keydown', () => {
    send.disabled = nameField.value.length <= 0 || email.value.length <= 0;
});

email.addEventListener('keydown', () => {
    send.disabled = email.value.length <= 0 || nameField.value.length <= 0;
});



send.addEventListener('click', (event) => {
    event.preventDefault();

    alert(`Obrigado por assinar, ${nameField.value}!`);
});