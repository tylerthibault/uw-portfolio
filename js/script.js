var isDarkMode = true;
$(document).ready(function () {
    $(".colorMode").on("click", (e) => {
        setColors();
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
