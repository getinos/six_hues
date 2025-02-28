document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.querySelector(".loading-container").style.opacity = "0"; // Fade out loading screen
        setTimeout(() => {
            document.querySelector(".loading-container").style.display = "none"; 
            document.querySelector(".main-content").style.display = "block";
            document.querySelector(".hero-section").style.display = "block"; // Show hero section
            setTimeout(() => {
                document.querySelector(".main-content").style.opacity = "1";
            }, 100);
        }, 500);
    }, 5000);
});
