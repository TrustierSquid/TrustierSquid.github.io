let mobileNavBtn = document.getElementById('mobile-nav-btn');
let mobileNavMenu = document.getElementById('mobile-nav-menu');
let mobileNavExitBtn = document.getElementById('mobile-nav-exit');


/* mobileNavBtn.addEventListener('click', ()=> {
    mobileNavMenu.style.width = '100%';
    mobileNavBtn.style.display = 'none';
    mobileNavExitBtn.style.display = 'block'; //
    
    mobileNavBtn.style.opacity = '0'; 
})
 */

window.addEventListener('click', (element)=> {
    if (element.target === mobileNavBtn) { 
        mobileNavMenu.style.width = '100%';
        mobileNavBtn.style.display = 'none';
        mobileNavExitBtn.style.display = 'block';
        location.href = '#'
        disableScroll();
    } else if (element.target === mobileNavExitBtn) {
        mobileNavExitBtn.style.display = 'none';
        mobileNavMenu.style.width = '0%';
        mobileNavBtn.style.display = 'block';
        enableScroll();
    }  
})

function disableScroll() {
    // Get the current page scroll position
    scrollTop =
    window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft =
    window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted,
        // set this to the previous value
        window.onscroll = ()=> {
            window.scrollTo(scrollLeft, scrollTop);
        };
}


function enableScroll() {
    window.onscroll = function() {};
}