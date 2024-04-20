// * Button functionality for the hero section.

let projectBtn = document.getElementById('contact-btn');
let heroGithubBtn = document.getElementById('hero-github')
let heroLinkedinBtn = document.getElementById('hero-linkedin')

projectBtn.addEventListener('click', ()=> {
    console.log("clicked project btn")
    location.href = "#projects"
})

function migrate(GH, LI) {
    GH.addEventListener('click', ()=>{
        location.href = "https://github.com/TrustierSquid";
    })

    LI.addEventListener('click', ()=>{
        location.href = "www.linkedin.com/in/samuel-hunt-387ab7245"
    })
}

migrate(heroGithubBtn, heroLinkedinBtn)