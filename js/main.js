const image = document.querySelector('#bacon');

image.addEventListener('mouseover', function() {
    image.style.transform = 'scale(1.1)';
    image.style.transition = "transform .8s ease-in-out";
});

image.addEventListener('mouseout', function (){
    image.style.transform = 'scale(1)';
});