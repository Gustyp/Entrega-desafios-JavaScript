const animarTituloPrincipal = () => {
    $(`#tituloPrincipal`).animate({
        "font-size": "4rem"
    }).slideDown("fast");
}

const animarTituloLogo = () => {
    $(`#tituloLogo`).animate({
        "font-size": "1.8rem"
    }).fadeOut(5000).delay(100).fadeIn(5000);
}

$(() =>{
    animarTituloLogo();
    animarTituloPrincipal();
})
