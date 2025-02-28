const button = document.getElementById("toggleButton"); 
const heroImage = document.getElementById("heroImage");
const overlayImage = document.getElementById("overlayImage");

button.addEventListener("click", () => {
    heroImage.style.animation = "rotate360 1.5s linear 1"; 
    overlayImage.style.animation = "rotateOnly 1s linear 1"; // Overlay image rotates slowest

    // Reset animation after completion
    setTimeout(() => {
        heroImage.style.animation = "none";
        overlayImage.style.animation = "none";
    }, 4000); // Wait for the longest duration (4s)
});
