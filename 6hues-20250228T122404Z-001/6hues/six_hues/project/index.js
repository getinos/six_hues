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

document.addEventListener("DOMContentLoaded", function () {
    const discoverBtn = document.querySelector(".below-section p");
    const belowPart = document.querySelector(".below-part");
    const backBtn = document.querySelector(".back");

    discoverBtn.addEventListener("click", function () {
        belowPart.classList.add("active");
    });

    backBtn.addEventListener("click", function () {
        belowPart.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const imageContainers = document.querySelectorAll(".image-container");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show"); // Apply animation
            } else {
                entry.target.classList.remove("show"); // Reset if scrolling up
            }
        });
    }, { threshold: 0.3 }); // Triggers when 30% of the element is visible

    imageContainers.forEach((container) => observer.observe(container));
});
document.addEventListener("DOMContentLoaded", function () {
    let menuIcon = document.getElementById("menu-icon");
    let sidebar = document.getElementById("sidebar");
    let closeBtn = document.getElementById("close-btn");

    if (menuIcon && sidebar && closeBtn) {
        menuIcon.addEventListener("click", function () {
            sidebar.classList.add("active");
        });

        closeBtn.addEventListener("click", function () {
            sidebar.classList.remove("active");
        });
    } else {
        console.error("Menu icon, sidebar, or close button not found in the DOM.");
    }
});


