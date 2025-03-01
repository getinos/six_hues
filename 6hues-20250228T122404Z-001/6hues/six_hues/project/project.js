document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const loadingContainer = document.querySelector(".loading-container");
        const mainContent = document.querySelector(".main-content");
        const heroSection = document.querySelector(".hero-section");
        const imageList = document.querySelector(".image-list"); // Correctly select the element

        if (loadingContainer) {
            loadingContainer.style.opacity = "0"; // Fade out loading screen
            setTimeout(() => {
                loadingContainer.style.display = "none";
                if (mainContent) {
                    mainContent.style.display = "block";
                    setTimeout(() => mainContent.style.opacity = "1", 100);
                }
                if (heroSection) {
                    heroSection.style.display = "block";
                }
                if (imageList) { 
                    imageList.style.display = "flex";  // Change from 'block' to 'flex' (because it's a flex container)
                    setTimeout(() => imageList.style.opacity = "1", 100);
                }
            }, 500);
        }
    }, 5000);
});

// Get the hero section and all thumbnail images
const heroSection = document.getElementById('hero-section');
const thumbnails = document.querySelectorAll('.thumbnail');

if (heroSection && thumbnails.length > 0) {
    // Smooth transition for background change
    heroSection.style.transition = "background-image 0.5s ease-in-out, opacity 0.3s";

    // Add click event listener to each thumbnail
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const bgImage = thumbnail.getAttribute('data-bg');
            if (bgImage) {
                heroSection.style.opacity = "0"; // Fade out before changing
                setTimeout(() => {
                    heroSection.style.backgroundImage = `url('${bgImage}')`;
                    heroSection.style.opacity = "1"; // Fade back in
                }, 200);
            }
        });
    });
}
