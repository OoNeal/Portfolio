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

//if a user scroll the class first__scroll will disappear
window.addEventListener('scroll', function (e) {
    const element = document.getElementById('first__scroll');
    const position = element.getBoundingClientRect();

    if (position.top <= window.innerHeight - position.height / 2 && position.bottom >= position.height / 2) {
        element.classList.add('first__scroll_hide');
    }
    if (element.classList.contains('first__scroll_hide')) {
        setTimeout(function () {
            element.style.display = 'none';
        }, 1500);
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