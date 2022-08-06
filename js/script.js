// ===================== LATEST PROJECTS OBJECT =======================
const latestPorjects = [
        {
        id : 1,
        img : "img/Screenshots/thumbnails/BDMAE.jpeg",
        name : "BDMAE",
        skills : "HTML5, CSS3, JS",
        preview : "https://genuine-paprenjak-5c036d.netlify.app/",
        githubLink : "https://github.com/ayoubkhabali/BDMAE-THEME",
        category : "theme",
        description : "",
    },
        {
        id : 2,
        img : "img/Screenshots/thumbnails/CASHING.jpeg",
        name : "CASHING",
        skills : "HTML5, CSS3, JS",
        preview : "https://hilarious-starburst-5cbd0f.netlify.app/",
        githubLink : "https://github.com/ayoubkhabali/CASHING-THEME",
        category : "theme",
        description : "",
    },
    {
        id : 3,
        img : "img/Screenshots/thumbnails/FRIEND'S COFFEE.jpeg",
        name : "friend's Coffee",
        skills : "HTML5, CSS3, JS",
        preview : "https://silver-semifreddo-3c658d.netlify.app/",
        githubLink : "https://github.com/ayoubkhabali/Friends-Coffee-website",
        category : "theme",
        description : "",
    },
    {
        id : 4,
        img : "img/Screenshots/thumbnails/WomenFume.jpeg",
        name : "WomenFume",
        skills : "HTML5, CSS3, JS",
        preview : "https://venerable-sopapillas-4e7059.netlify.app/",
        githubLink : "https://github.com/ayoubkhabali/WomenFume-theme",
        category : "theme",
        description : "",
    },
    {
        id : 5,
        img : "img/Screenshots/thumbnails/currency exchanger.png",
        name : "currency exchanger",
        skills : "HTML5, CSS3, JS",
        preview : "https://endearing-froyo-eb8c78.netlify.app/",
        githubLink : "https://github.com/ayoubkhabali/from-EUR-to-various-arabian-currencies",
        category : "service",
        description : "",
    },
    {
        id : 6,
        img : "img/Screenshots/thumbnails/printing certifications.jpeg",
        name : "printing certifications",
        skills : "HTML5, CSS3, JS",
        preview : "https://loquacious-strudel-050e00.netlify.app/",
        githubLink : "https://github.com/ayoubkhabali/GREENLAB",
        category : "service",
        description : "",
    },
]


//==================== DECLARING VARIABLES==========================
// FOR HEADER BAR
const navbar = document.querySelector(".header")
const navToggler = document.querySelector(".nav-toggler")
const mainNav = document.querySelector(".main-nav")
const navbarItems = document.querySelectorAll(".navbar ul li a")
// FOR SKILLS SECTION
const bars = document.querySelectorAll(".bar")
const pourcentages = document.querySelectorAll(".pourcentage");
const processBar = document.querySelectorAll(".process-bar")
// FOR LATEST PROJECTS SECTION
const projectsContainer = document.querySelector(".projects .container")
const cardsBx           = document.querySelector(".projects .cards")
// HIRE ME ITEMS
const hireFirstPage = document.querySelector(".hire-me .first-page")
const hireSecondPage = document.querySelector(".hire-me .second-page")
const hireBtn = document.querySelector(".hire-me .hire-me-btn")
const backBtn = document.querySelector(".hire-me .back-btn")
const userEmail = document.querySelector(".hire-me .email")
// SCROLL TOP
const scrollTop = document.querySelector(".scroll-top")
// FOR SECTIONS
const projectsSection = document.getElementById("projects")
const skillsSection = document.getElementById("skills")
const hireMeSection = document.getElementById("hire-me")
const aboutMeSection = document.getElementById("about-me")




// ====================== RUNNING FUNCTIONS =============================
// FOR NAVBAR SECTION
navToggler.addEventListener("click", ()=> {
    if (navToggler.querySelector("i").classList.contains("fa-bars")) {
        navToggler.querySelector("i").classList.remove("fa-bars")
        navToggler.querySelector("i").classList.add("fa-x")
    } else {
        navToggler.querySelector("i").classList.add("fa-bars")
        navToggler.querySelector("i").classList.remove("fa-x") 

    }

    mainNav.classList.toggle("stickNav")
})

navbarItems.forEach((item)=> {
    item.addEventListener("click", ()=>{
        if (item){
            mainNav.classList.remove("stickNav")
            navToggler.querySelector("i").classList.add("fa-bars")
            navToggler.querySelector("i").classList.remove("fa-x")  
            } 
    
    })
})

window.addEventListener("scroll", ()=> {
    if (this.scrollY > 100) {
        navbar.classList.add("stick")
        scrollTop.style.transform = "translateX(0%)"
    } else {
        navbar.classList.remove("stick")
        scrollTop.style.transform = "translateX(200%)"

    }
})

document.addEventListener("click", (e)=> {
    console.log(e.currentTarget)
    // if (!e.currentTarget.querySelector("header")) {
    //     navbar.classList.remove("stickNav")
    // }
})

// FOR SKILLS SECTION
window.onscroll = ()=> {
    if (window.scrollY > skillsSection.offsetTop ) {
        processBar.forEach(function(pourcentageItem){

        
                        var count = 0;
                    var counter = setInterval(timer, 20);
                    function timer(){
                    if (count<pourcentageItem.dataset.pourcentage) { count += 1
                        pourcentageItem.style.height = `${count}%`}
                    }
                    


        })
        pourcentages.forEach(function(item){
            var count = 0;
            var counter = setInterval(timer, 40);
            function timer(){
            if (count<item.dataset.pourcentage) { count += 1
                item.textContent = `${count}%`}
            }
        })
    }

}

// DISPLAYING LATEST PROJECTS ITEMS

window.addEventListener("DOMContentLoaded", () => {
    let displayProjects = latestPorjects.map(function(item){
        return `        <div class="card">
        <div class="imgBx">
            <div class="hoverBx">
                <a href="${item.githubLink}" target="_blank" class="githubLink"><i class='bx bxl-github'></i> GitHub</a>
                <a href="${item.preview}" target="_blank" class="previewLink"><i class='bx bxs-happy-heart-eyes'></i> Preview</a>
            </div>
            <img src="${item.img}" alt="" srcset="">
        </div>
        <div class="infoBx">
            <h3 class="card-title">${item.name}</h3>
            <span>${item.skills}</span>
        </div>
    </div>`
    })

    displayProjects = displayProjects.join("")

    cardsBx.innerHTML = displayProjects
})



// ====================== HIRE ME FUNCTIONS =============================
hireBtn.addEventListener("click", ()=> {
    hireFirstPage.style.transform = "translateX(-100%)"
    hireSecondPage.style.transform = "translateX(0)"
})

backBtn.addEventListener("click", ()=> {
    hireFirstPage.style.transform = "translateX(0%)"
    hireSecondPage.style.transform = "translateX(100%)"
})


// ======================= SCROLL TO TOP ===============================


scrollTop.addEventListener("click", ()=> {
    document.documentElement.scrollTop = 0
})

/////////////////// SCROLL REVEALLLLLLLLLLL
ScrollReveal({
    reset : true,
    distance : "50px",
    duration : 2600,
    delay : 400
});

ScrollReveal().reveal(".highlight h1", {origin : 'left',delay :200, interval : 200})
ScrollReveal().reveal(".first-side .info-Bx", {origin : "left", delay : 50,interval:100})
ScrollReveal().reveal(".third-side .info-Bx", {origin : "right", delay : 50, interval : 100})
ScrollReveal().reveal(".second-side", {origin : "top"})
ScrollReveal().reveal(".section-title", {origin:'top', delay : 200})
ScrollReveal().reveal(".bar",{origin : 'bottom',delay : 300, interval : 100})
ScrollReveal().reveal(".cards",{origin : 'bottom',delay : 300, interval : 300})
ScrollReveal().reveal(".hire-me .container-bx", {origin : "left", delay : 300})

