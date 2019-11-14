window.onload = cargarImagenes;

function cargarImagines() {
    
    for (var i = 0; i < document.images.length; i++) {
        if (document.images[i].parentNode.tagName == "A") {
            configuraRollover(document.images[i]);
        }
    }
}

function configuraRollover(imagen) {
    imagen.imagenOff = new Image();
    imagen.imagenOff.src = "enviar_of.jpg";
    imagen.onmouseout = cambiaOff;
    
    imagen.imagenOn = new Image();
    imagen.imagenOn.src = "enviar:on.png";
    imagen.onmouseover = cambiaOn;
}
/**
 * Estas funciones se ejecutan segun el evento que se dispare
 * pero no es al iniciar la pagina, sino depende del
 * boton que se presione, son conocidad como handlers
 */
// Se asocio a el evento onmouseout
function cambiaOff(){
    this.src = this.imagenOff.src;// Tomamos los valores ya asociados
}

// Se asocio a el evento onmouseover
function cambiaOn() {
    this.src = this.imagenOn.src;//tomamos los valores ya asociados
}
        

