// Custom scripts
document.addEventListener('DOMContentLoaded', function () {
    //read more
    if (document.querySelector('.privacy__block-link')) {
        const buttons = document.querySelectorAll('.privacy__block-link');

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                let text = button.previousElementSibling;

                if (!text.classList.contains('show-text')) {
                    text.classList.add('show-text');
                    text.classList.remove('hide-text');
                    button.style.display = 'none';
                }
            });
        });
    }

    //video play
    function videoPlayerPlay(videoPlayerSelector, buttonSelector) {
        if (document.querySelector(buttonSelector)) {
            const button = document.querySelector(buttonSelector);
            if (document.querySelector(videoPlayerSelector)) {
                const videoPlayer = document.querySelector(videoPlayerSelector);
                videoPlayer.controls = false;

                button.innerHTML =
                    "<svg  width='30' height='43' viewBox='0 0 30 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M30 21.5L0.749998 42.7176L0.75 0.282376L30 21.5Z' fill='white' /> </svg>";

                button.addEventListener('click', () => {
                    if (videoPlayer.paused == true) {
                        videoPlayer.play();
                        button.innerHTML =
                            '<svg width="39" height="49" viewBox="0 0 39 49" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="16.7143" height="49" fill="white"/><rect x="22.2856" width="16.7143" height="49" fill="white"/></svg>';
                    } else {
                        videoPlayer.pause();
                        button.innerHTML =
                            "<svg  width='30' height='43' viewBox='0 0 30 43' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M30 21.5L0.749998 42.7176L0.75 0.282376L30 21.5Z' fill='white' /> </svg>";
                    }
                });
            }
        }
    }

    videoPlayerPlay('.home__video-player', '.home__video-player-button');
});
