window.addEventListener('scroll', function (e) {
    const elements = document.getElementsByClassName('animation');

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const position = element.getBoundingClientRect();

        if (position.top < window.innerHeight) {
            element.style.animationPlayState = 'running';
            break;
        }
    }
});

