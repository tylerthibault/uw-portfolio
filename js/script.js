var isDarkMode = true;
$(document).ready(function () {
    // title being sticky on small screens
    var screenSize = window.screen.width;
    if (screenSize < 430) {
        $(".title").addClass("small-title");
    }

    // Light and Dark mode
    $(".colorMode").on("click", (e) => {
        setColors();
    });

    // small screen side menu
    $(".menuBtn").on("click", (e) => {
        // check navMenu display status
        var sideMenu = $(".side-menu");
        console.log($(sideMenu).data("status"));
        if (sideMenu.data("status") === "close") {
            $(sideMenu).addClass("side-menu-open");
            $(sideMenu).removeClass("side-menu-close");
            $(sideMenu).css("display", "block");
            $(sideMenu).data("status", "open");
        } else {
            $(sideMenu).addClass("side-menu-close");
            $(sideMenu).removeClass("side-menu-open");
            $(sideMenu).data("status", "close");
            setTimeout(() => {
                $(sideMenu).css("display", "none");
            }, 2000);
        }
    });
});

function setColors() {
    console.log("setColor");
    var r = document.querySelector(":root");
    var rs = getComputedStyle(r);
    if (isDarkMode) {
        isDarkMode = false;
        $(".colorMode").text("Dark Mode");
        r.style.setProperty("--color1", "#d8f3dc");
        r.style.setProperty("--color2", "#b7e4c7");
        r.style.setProperty("--color3", "#40916c");
        r.style.setProperty("--color4", "#74c69d");
        r.style.setProperty("--color5", "#52b788");
    } else {
        isDarkMode = true;
        $(".colorMode").text("Light Mode");
        r.style.setProperty("--color1", "#264653");
        r.style.setProperty("--color2", "#2a9d8f");
        r.style.setProperty("--color3", "#e9c46a");
        r.style.setProperty("--color4", "#f4a261");
        r.style.setProperty("--color5", "#e76f51");
    }
}
