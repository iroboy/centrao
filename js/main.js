const mobileOpen = document.querySelector('.nav-btn')
const mobileClose = document.querySelector('.mobile-close')
const mobileNav = document.querySelector('.nav-mobile')


mobileOpen.addEventListener('click', function(){

    mobileNav.classList.remove('none')
});

mobileClose.addEventListener('click', function(){

    mobileNav.classList.add('none')
})



AOS.init();