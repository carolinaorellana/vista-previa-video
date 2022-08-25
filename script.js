/*Me costó entender por qué en este caso, había que declarar una variable... al parecer es sólo sintaxis
me gustaria agregar un evento onclick, para dar sonido.*/

/*Las dos funciones requeridas, una para dar play y otra para pausar */
var v = document.getElementById("videoPrincipal");

function reproducirVideo(){
    v.play();
} 

function pararVideo(){
    v.pause();
} 

/* Evento Onclick*/
function sonidoVideo(){
    if (v.muted == true) {
            v.muted = false;
    } 
    else {
        v.muted = true;
    }
}
