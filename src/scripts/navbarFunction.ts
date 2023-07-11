
let mobileNavBtn : any = document.getElementById('mobile-nav-btn');
let mobileNavMenu : any = document.getElementById('mobile-nav-menu');

mobileNavBtn.addEventListener('click', ()=> {
    mobileNavMenu.classList.add('activate');
    console.log("hi");
})