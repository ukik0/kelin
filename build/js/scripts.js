// Custom Scripts
// Custom scripts

window.onload = function () {
    let buttons = document.querySelectorAll('.privacy__block-link');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            let text = button.previousElementSibling;
            if (text.classList.contains('show-text')) {
                text.classList.remove('show-text');
                button.textContent = 'читать далее';
            } else {
                text.classList.add('show-text');
                button.textContent = 'свернуть';
            }
        });
    });
};

