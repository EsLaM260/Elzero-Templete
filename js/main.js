// header
let showMegaMenu = document.querySelector("header .main-nav > li:last-child a");
let MegaMenu = document.querySelector("header .main-nav > li > .mega-menu");
showMegaMenu.onclick = function (e) {
    e.preventDefault(); 
    MegaMenu.classList.toggle("show-mega-menu");
}

// countDown Timer
let daysContainer = document.querySelectorAll(".events .time .unit span")[0];
let hoursContainer = document.querySelectorAll(".events .time .unit span")[2];
let minutesContainer = document.querySelectorAll(".events .time .unit span")[4];
let secondsContainer = document.querySelectorAll(".events .time .unit span")[6];

let countDownData = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {

    let dateNow = new Date().getTime();

    let diffDate = countDownData - dateNow;


    let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

    if (diffDate < 0) {
        clearInterval(counter);
        daysContainer.innerHTML = "00";
        hoursContainerContainer.innerHTML = "00";
        minutesContainer.innerHTML = "00";
        secondsContainer.innerHTML = "00";
    }

    daysContainer.innerHTML = `${days}`
    hoursContainer.innerHTML = `${hours}`
    minutesContainer.innerHTML = `${minutes}`
    secondsContainer.innerHTML = `${seconds}`

},1000)

// on scrolling


let sectionSkills = document.querySelector(".our-skills");
let spansOfSkillsSection = document.querySelectorAll(".our-skills .the-progress span");

// increment number
let sectionStats = document.querySelector(".stats");
let spansOfStats = document.querySelectorAll(".stats span.number");
let started = false
window.onscroll = function () {

    if (window.scrollY >= sectionSkills.offsetTop - 50) {
        // Skills Animate Width
        spansOfSkillsSection.forEach((span) => {
            span.style.width = span.dataset.width;
        });

    }
    // Stats Increase Number
    if (window.scrollY >= sectionStats.offsetTop - 100) {
        if (!started) {
            spansOfStats.forEach((num) => startCount(num));
            started = true;
        }

    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++
        if (el.textContent === goal) {
            clearInterval(count);
        }
    } , 2000 / goal)
}

// scroll to top

let fixed = document.querySelector(".fixed");

window.onscroll = function () {
    if (this.scrollY >= 1000) {
        fixed.classList.add("show");
    } else {
        fixed.classList.remove("show");
    }
};
fixed.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

// loading
let loading = document.querySelector(".loading");

window.onload = function () {
    setTimeout(()=>{
        loading.classList.add("hide");
    },2000)
}