
(function() {
    var _stage = document.querySelector('.stage');
    var _house = document.querySelector('.house');
    var _progress = document.querySelector('.progress-bar');
    var mousePos = {x:0, y:0};
    var maxScrollValue;

    var resizeHandler = function() {
        maxScrollValue = document.body.offsetHeight - window.innerHeight;
    }

    window.addEventListener('scroll', function() {
        var p = pageYOffset / maxScrollValue;
        var zMove = p * 1000 - 490;
        _house.style.transform = 'translateZ(' + zMove + 'vw)';
        _progress.style.width = p * 100 + '%';
    });

    window.addEventListener('mousemove', function(e) {
        mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
        mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
        _stage.style.transform = 'rotateX(' + (mousePos.y * 5) + 'deg) rotateY(' +  (mousePos.x * 5) + 'deg)';
    });

    window.addEventListener('resize', resizeHandler);
    resizeHandler();

})();