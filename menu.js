// Menu
const nav = document.querySelector('.navbar')
const navTwo =document.querySelector('.nav')
window.onscroll = () => {
    if(window.pageYOffset < 200){
        nav.classList.remove('top')
        navTwo.classList.remove('top')
    }
    else{
        nav.classList.add('top')
        navTwo.classList.add('top')
    }
}