$(document).ready(function () {
    // type it out
    $(".name-area").on("click", function(){
        $('.splashScreen').css('display', 'none')
        $('.main-content').css('display', 'block')
    })

    typeItOut()

    $('.main-content').on("click", () => {
        console.log('click');
        let sideMenu = $('.side-menu').data('status')
        console.log(sideMenu);
        if ($('.side-menu').data('status') === 'open') {
            // closeSideMenu()
        }
    })

    // title being sticky on small screens
    var screenSize = window.screen.width;
    if (screenSize < 430) {
        $(".title").addClass("small-title");
    }

    // Light and Dark mode
    let color = getColor();
    setColors(color);

    $(".colorMode").on("click", (e) => {
        color = switchColor(color);
        setColors(color);
    });

    // small screen side menu
    $(".menuBtn").on("click", (e) => {
        closeSideMenu()
    });
});

// functions

function closeSideMenu(){ 
    // check navMenu display status
    var sideMenu = $(".side-menu");
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
}


function getColor() {
    try {
        var colorMode = localStorage.getItem("colorMode");
    } catch {
        var colorMode = "dark";
    }
    return colorMode;
}

function switchColor(color) {
    if (color === "dark") {
        color = "light";
        localStorage.setItem("colorMode", "light");
    } else {
        color = "dark";
        localStorage.setItem("colorMode", "dark");
    }
    return color;
}

function setColors(color) {
    var r = document.querySelector(":root");
    if (color === "dark") {
        $(".colorMode").text("Dark Mode");
        r.style.setProperty("--color1", "#d8f3dc");
        r.style.setProperty("--color2", "#b7e4c7");
        r.style.setProperty("--color3", "#40916c");
        r.style.setProperty("--color4", "#74c69d");
        r.style.setProperty("--color5", "#52b788");
    } else {
        $(".colorMode").text("Light Mode");
        r.style.setProperty("--color1", "#264653");
        r.style.setProperty("--color2", "#2a9d8f");
        r.style.setProperty("--color3", "#e9c46a");
        r.style.setProperty("--color4", "#f4a261");
        r.style.setProperty("--color5", "#e76f51");
    }
}


// type it out
function typeItOut(){
    // get txt 
    let txt_container = $('.type-it-out')
    txtList = txt_container.text().split(',')

    txt_container = txt_container.text("")

    var listCount = 0
    var i = 0
    setInterval(async() => {
        let word = txtList[listCount]
        let letter = word[i]
        
        let newText = txt_container.text() + letter
        txt_container.text(newText)
        
        i++
        if (i > word.length){
            if (listCount === txtList.length - 1){
                listCount = 0
            } else {
                listCount++
            }
            sleep(1000)
            txt_container.text('')
            i=0
        }
    }, 150)
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }