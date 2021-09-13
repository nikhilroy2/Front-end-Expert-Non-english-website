window.onscroll = e=> {
    if(window.scrollY > 200){
        $('header').addClass('position-sticky')
    } else {
        $('header').removeClass('position-sticky')
    }
}