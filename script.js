// parallax container and layers

window.addEventListener('DOMContentLoaded', function() {
    let sun = document.getElementById('sun');
    let clouds = document.getElementById('clouds');
    let text = document.getElementById('text');
    let btn = document.getElementById('btn');
    let mountains_front = document.getElementById('mountains-front');
    let header = document.querySelector('header');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    clouds.style.left = value * 0.25 + 'px';
    sun.style.top = value * 1.05 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
    });
});
