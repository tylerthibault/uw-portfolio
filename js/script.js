$(document).ready(function () {
    // title being sticky on small screens
    var screenSize = window.screen.width;
    if (screenSize < 430) {
        $(".title").addClass("small-title");
    }

    // Light and Dark mode
    let color = getColor();
    setColors(color);

    $(".colorMode").on("click", (e) => {
        console.log("the color is: " + color);
        color = switchColor(color);
        setColors(color);
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
function getColor() {
    try {
        var colorMode = localStorage.getItem("colorMode");
        console.log("try");
    } catch {
        var colorMode = "dark";
        console.log("catch");
    }
    console.log("color mode is: " + colorMode);
    return colorMode;
}

function switchColor(color) {
    console.log("switch color: " + color);
    if (color === "dark") {
        color = "light";
        localStorage.setItem("colorMode", "light");
    } else {
        color = "dark";
        localStorage.setItem("colorMode", "dark");
    }
    console.log("returning the color " + color);
    return color;
}

function setColors(color) {
    console.log("set color: " + color);
    var r = document.querySelector(":root");
    if (color === "dark") {
        console.log("change to light mode");
        $(".colorMode").text("Dark Mode");
        r.style.setProperty("--color1", "#d8f3dc");
        r.style.setProperty("--color2", "#b7e4c7");
        r.style.setProperty("--color3", "#40916c");
        r.style.setProperty("--color4", "#74c69d");
        r.style.setProperty("--color5", "#52b788");
    } else {
        console.log("change to dark mode");
        $(".colorMode").text("Light Mode");
        r.style.setProperty("--color1", "#264653");
        r.style.setProperty("--color2", "#2a9d8f");
        r.style.setProperty("--color3", "#e9c46a");
        r.style.setProperty("--color4", "#f4a261");
        r.style.setProperty("--color5", "#e76f51");
    }
}
