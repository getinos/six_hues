let items = document.querySelectorAll('.slider .items'); // Change '.items' to '.list .items' if necessary
let prevBtn = document.getElementById('prev');
let nextBtn = document.getElementById('next');
let lastPosition = items.length - 1;
let active = 0;

nextBtn.onclick = () => {
    active = (active + 1) % items.length; // Ensures it loops back to 0 when reaching the end
    setSlider();
}

prevBtn.onclick = () => {
    active = (active - 1 + items.length) % items.length; // Ensures it loops to the last item when going backward
    setSlider();
}

const setSlider = () => {
    let oldActive = document.querySelector('.slider .items.active'); // Ensure correct class selector
    if (oldActive) oldActive.classList.remove('active');
    
    // Prevent undefined errors by checking the active index
    if (items[active]) {
        items[active].classList.add('active');
    }
}

const setDiameter = () => {
    let slider = document.querySelector('.slider');
    let widthSlider = slider.offsetWidth;
    let heightSlider = slider.offsetHeight;
    let diameter = Math.sqrt(Math.pow(widthSlider, 2) + Math.pow(heightSlider, 2));
    document.documentElement.style.setProperty('--diameter', diameter + 'px');
}

setDiameter();
window.addEventListener('resize', setDiameter);
