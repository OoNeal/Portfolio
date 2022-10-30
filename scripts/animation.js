window.addEventListener('scroll', function (e) {
    const elements = document.getElementsByClassName('div-animation');

    let passed = 0;
    for (let i = passed; i < elements.length; i++) {
        const element = elements[i];
        const position = element.getBoundingClientRect();

        if (position.top <= window.innerHeight - position.height / 2 && position.bottom >= position.height / 2) {
            element.classList.remove('div-animation');
            element.classList.add('div-animation_active');
            passed++;
        }
    }
});

window.addEventListener('mousemove', function (f) {
    // const images equal all images
    const images = document.querySelectorAll('img');

    for (let i = 0; i < images.length; i++) {
        const image = images[i];

        //transform image to mouse position in relation to the middle of the screen
        image.style.transform = 'rotate(' + (f.clientX - window.innerWidth / 2) / 200 + 'deg';
        image.style.transform += 'translate( 0,' + (f.clientY - window.innerHeight / 2) / 200 + 'px';
    }
});