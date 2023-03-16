let darkLight = false;
let lines = false;

function changeColor () {

    var reveals = document.querySelectorAll(".linktext")
    var externalLinkDark = document.querySelectorAll(".SitePicture")

    if (darkLight == false) {
        darkLight = true;
        document.body.style.backgroundColor = '#212427';
        document.body.style.color = '#fff';
        document.getElementById('Start').style.backgroundImage = "url('./img/BackgroundDark.jpg')";
        document.getElementById('Start').style.backgroundAttachment = "cover";
        document.getElementById('Start').style.backgroundPosition = "center";
        document.querySelectorAll('.Email')[0].style.color = "#fff";
        for (let x = 0; x < externalLinkDark.length; x++) {
            externalLinkDark[x].classList.add("dark");
        }
        for (let x = 0; x < reveals.length; x++) {
            reveals[x].classList.add("dark");
        }
    } else {
        darkLight = false;
        document.body.style.backgroundColor = '#F0ECE3';
        document.body.style.color = '#596E79';
        document.getElementById('Start').style.backgroundImage = "url('./img/BackgroundLight.jpg')";
        document.querySelectorAll('.Email')[0].style.color = "#596E79";
        for (let x = 0; x < externalLinkDark.length; x++) {
            externalLinkDark[x].classList.remove("dark");
        }
        for (let x = 0; x < reveals.length; x++) {
            reveals[x].classList.remove("dark");
        }
    }

}

window.addEventListener("scroll", reveal);

function reveal() {
    var reveals = document.querySelectorAll(".SideNavbar")
    var startelement = document.querySelectorAll(".TitleName")
    for (var i = 0; i < reveals.length; i++) {

        var windowHeight = window.innerHeight;
        var elementTop = startelement[i].getBoundingClientRect().bottom;
        var elementVisible = 600;
    
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("resize", resize)
onload = resize;

function resize() {
    if (document.body.offsetWidth < 800) {
        document.getElementsByClassName("Navbar")[0].classList.add("active");
        document.getElementsByClassName("HamburgerMenu")[0].classList.add("active");
    } else {
        document.getElementsByClassName("Navbar")[0].classList.remove("active");
        document.getElementsByClassName("HamburgerMenu")[0].classList.remove("active");
    }
    if (lines == true) {
        hamburger();
    }
}

function hamburger() {
    if (lines == false) {
    document.getElementsByClassName("line1")[0].classList.add("active");
    document.getElementsByClassName("line2")[0].classList.add("active");
    document.getElementsByClassName("line3")[0].classList.add("active");
    document.getElementsByClassName("hamburgerOpen")[0].classList.add("active");
    lines = true;
    } else {
    document.getElementsByClassName("line1")[0].classList.remove("active");
    document.getElementsByClassName("line2")[0].classList.remove("active");
    document.getElementsByClassName("line3")[0].classList.remove("active");
    document.getElementsByClassName("hamburgerOpen")[0].classList.remove("active");
    lines = false;
    }
}