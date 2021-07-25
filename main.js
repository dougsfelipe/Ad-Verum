function IrCursos() {
    var dist = ($('#curso').offset().top - $(window).scrollTop()) / 2;
    $('html, body').animate({
        scrollTop: $('#curso').offset().top + 10
    }, Math.abs(dist));
}

function somar(){
    var s1 = parseInt(document.getElementById('teste2').innerHTML, 10);
    var s1 = s1 + 1;
    localStorage.setItem('verum:new-prouct', 
    JSON.stringify(s1))
    document.getElementById("teste2").innerHTML = s1;
    
    }
