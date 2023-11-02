// Custom scripts
document.addEventListener('DOMContentLoaded', function () {

    //read more
    if (document.querySelector('.privacy__block-link')) {
        const buttons = document.querySelectorAll('.privacy__block-link');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let text = button.previousElementSibling;

                if (text.classList.contains('show-text')) {
                    text.classList.remove('show-text');
                    button.textContent = 'читать далее';
                    
                    text.scrollIntoView({behavior: "smooth"});
                } else {
                    text.classList.add('show-text');
                    button.textContent = 'свернуть';
                }
            });
        });
    }
});
