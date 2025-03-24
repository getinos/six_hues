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