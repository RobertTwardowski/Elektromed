// Menu
window.onscroll = () => {
    if(window.pageYOffset < 200){
        nav.classList.remove('top')
    }
    else{
        nav.classList.add('top')
    }
}