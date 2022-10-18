window.addEventListener('scroll', function (e) {
    var elements = document.getElementsByClassName('animation');
    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];
        var position = element.getBoundingClientRect();
        if (position.top < window.innerHeight) {
            element.style.animationPlayState = 'running';
            break;
        }
    }
});

