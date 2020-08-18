function mostrar01() {
    document.getElementById('etica').style.display="block";
    document.getElementById('Elecciones').style.display="none";
    document.getElementById('DivisionPoderes').style.display="none";
    document.getElementById('AccesoJusticia').style.display="none";
    document.getElementById('InformacionPublica').style.display="none";
}

function mostrar02() {
    document.getElementById('etica').style.display="none";
    document.getElementById('Elecciones').style.display="block";
    document.getElementById('DivisionPoderes').style.display="none";
    document.getElementById('AccesoJusticia').style.display="none";
    document.getElementById('InformacionPublica').style.display="none";
}

function mostrar03() {
    document.getElementById('etica').style.display="none";
    document.getElementById('Elecciones').style.display="none";
    document.getElementById('DivisionPoderes').style.display="block";
    document.getElementById('AccesoJusticia').style.display="none";
    document.getElementById('InformacionPublica').style.display="none";
}

function mostrar04() {
    document.getElementById('etica').style.display="none";
    document.getElementById('Elecciones').style.display="none";
    document.getElementById('DivisionPoderes').style.display="none";
    document.getElementById('AccesoJusticia').style.display="block";
    document.getElementById('InformacionPublica').style.display="none";
}

function mostrar05() {
    document.getElementById('etica').style.display="none";
    document.getElementById('Elecciones').style.display="none";
    document.getElementById('DivisionPoderes').style.display="none";
    document.getElementById('AccesoJusticia').style.display="none";
    document.getElementById('InformacionPublica').style.display="block";
}

$(document).ready(function(){
    var altura = $('nav').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura ) {
            $('nav').addClass('menu-fixed');
        } else {
            $('nav').removeClass('menu-fixed');
        }
    });
})

$(document).ready(function(){
    var altura = $('.BotonDenuncia01').offset().top;
    $(window).on('scroll', function(){
        if($(window).scrollTop() > altura ) {
            $('.BotonDenuncia01').addClass('BotonDenuncia02');
        } else {
            $('.BotonDenuncia01').removeClass('BotonDenuncia02');
        }
    });
})

