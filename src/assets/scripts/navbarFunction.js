const mobileNavBtn = document.getElementById("mobile-nav-btn");
const mobileNavMenu = document.getElementById("mobile-nav-menu");
const mobileNavExitBtn = document.getElementById("mobile-nav-exit");
const navBar = document.getElementById("navbar");
const mobileNavLinks = document.querySelectorAll(".mobileNavLinks");

/* mobileNavBtn.addEventListener('click', ()=> {
    mobileNavMenu.style.width = '100%';
    mobileNavBtn.style.display = 'none';
    mobileNavExitBtn.style.display = 'block'; //

    mobileNavBtn.style.opacity = '0';
})
 */

let redirect = (email) => {
  window.location.href = `mailto:${email}`;
};

let closeMenu = () => {
  mobileNavExitBtn.style.display = "none";
  mobileNavMenu.style.width = "0%";
  mobileNavBtn.style.display = "block";
  navBar.style.background = "none";
};

// MOBILE NAV FUNCTIONALITY

window.addEventListener("click", (element) => {
  // Checking for clicking on mobile nav button
  if (element.target === mobileNavBtn) {
    mobileNavMenu.style.width = "100%";
    mobileNavBtn.style.display = "none";
    mobileNavExitBtn.style.display = "block";
    location.href = "#";
    navBar.style.backgroundColor = "#333";

    mobileNavLinks.forEach((link) => {
      link.addEventListener("click", () => {
        switch (link.innerText) {
          case "About me":
            location.href = "#about";
            closeMenu();
            console.log("Navigate to " + link.innerText);
            break;
          case "Projects":
            console.log("Navigate to " + link.innerText);
            location.href = "#projects";
            closeMenu();
            break;
          case "Contact":
            console.log("Navigate to " + link.innerText);
            redirect("huntdevelops@gmail.com");
            closeMenu();
            break;
          default:
        }
      });
    });
  } else if (element.target === mobileNavExitBtn) {
    closeMenu();
  }
});

function disableScroll() {
  // Get the current page scroll position in the vertical direction
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  // Get the current page scroll position in the horizontal direction

  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

  // if any scroll is attempted,
  // set this to the previous value
  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };

  function enableScroll() {
    window.onscroll = function () {};
  }
}

// * BUTTON FUNCTIONALITY FOR THE HERO SECTION

let projectBtn = document.getElementById("contact-btn");
let heroGithubBtn = document.getElementById("hero-github");
let heroLinkedinBtn = document.getElementById("hero-linkedin");



// function migrate(GH, LI) {
//   GH.addEventListener("click", () => {
//     window.open = "https://github.com/TrustierSquid, '_blank'";
//   });

//   LI.addEventListener("click", () => {
//     location.href = "www.linkedin.com/in/samuel-hunt-387ab7245";
//   });
// }

// migrate(heroGithubBtn, heroLinkedinBtn);
