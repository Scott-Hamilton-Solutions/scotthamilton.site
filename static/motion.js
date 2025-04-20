const button = document.getElementById('startAnimation');
const graphic = document.querySelector('.graphic');

button.addEventListener('click', () => {
    graphic.classList.add('animate'); // Add the class to start the animation
});