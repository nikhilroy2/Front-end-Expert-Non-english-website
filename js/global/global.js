window.onscroll = e=> {
    if(window.scrollY > 200){
        $('header').addClass('position-sticky shadow-sm')
    } else {
        $('header').removeClass('position-sticky shadow-sm')
    }
}