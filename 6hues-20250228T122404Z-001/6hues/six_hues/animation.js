document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loadingContainer = document.querySelector(".loading-container");
        const mainContent = document.querySelector(".main-content");
        const heroSection = document.querySelector(".hero-section");
        const heroQuote = document.querySelector(".hero-quote");
        const imageList = document.querySelector(".image-list");
        const socialIcons = document.querySelectorAll(".social-icons .icon");

        if (loadingContainer) {
            loadingContainer.style.opacity = "0";
            setTimeout(() => {
                loadingContainer.style.display = "none";
                if (mainContent) {
                    mainContent.style.display = "block";
                    setTimeout(() => mainContent.style.opacity = "1", 300); // Increased delay
                }
                if (heroSection) {
                    heroSection.style.display = "block";
                }
                if (imageList) {
                    imageList.style.display = "flex";
                    setTimeout(() => imageList.style.opacity = "1", 300); // Smoother fade-in
                }
                if (heroQuote) {
                    heroQuote.style.display = "block";
                    setTimeout(() => heroQuote.style.opacity = "1", 500); // Even slower appearance
                }
                if (socialIcons.length > 0) {
                    socialIcons.forEach((icon, index) => {
                        setTimeout(() => {
                            icon.style.display = "flex";
                            setTimeout(() => icon.style.opacity = "1", 100);
                        }, 700 + index * 200); // Staggered appearance
                    });
                }
            }, 800);
        }
    }, 5000);
});

// Selecting elements
const heroSection = document.querySelector('.hero-section'); 
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

let currentIndex = 0; 
let autoChangeInterval;

// Function to change background smoothly
function changeBackground(bgImage) {
    if (!bgImage) return;

    const enlargedImg = document.createElement("img");
    enlargedImg.src = bgImage;
    enlargedImg.classList.add("enlarged-image");
    document.body.appendChild(enlargedImg);

    enlargedImg.style.top = "50%";
    enlargedImg.style.left = "50%";
    enlargedImg.style.width = "100vw";
    enlargedImg.style.height = "100vh";
    enlargedImg.style.transform = "translate(-50%, -50%)";
    enlargedImg.style.opacity = "1";

    setTimeout(() => {
        
        setTimeout(() => {
            heroSection.style.backgroundImage = `url('${bgImage}')`;
            heroSection.style.opacity = "1"; // Slow fade-in
        },400); // Increased duration
        document.body.removeChild(enlargedImg);
    }, 400); // Smoother transition
}

// Function to go to the next image
function nextImage() {
    if (thumbnails.length === 0) return;
    currentIndex = (currentIndex + 1) % thumbnails.length;
    changeBackground(thumbnails[currentIndex].getAttribute("data-bg"));
    resetSlideshow();
}

// Function to go to the previous image
function prevImage() {
    if (thumbnails.length === 0) return;
    currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
    changeBackground(thumbnails[currentIndex].getAttribute("data-bg"));
    resetSlideshow();
}

// Auto-change background every **7 seconds**
function startAutoSlideshow() {
    if (thumbnails.length === 0) return;
    autoChangeInterval = setInterval(nextImage, 9000); // Increased from 7000ms to 9000ms
}

// Reset slideshow when user interacts
function resetSlideshow() {
    clearInterval(autoChangeInterval);
    setTimeout(startAutoSlideshow, 9000);
}

// Click event for thumbnails
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
        currentIndex = index;
        changeBackground(thumbnail.getAttribute("data-bg"));
        resetSlideshow();
    });
});

// Start auto slideshow on page load
startAutoSlideshow();
