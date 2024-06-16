document.addEventListener('DOMContentLoaded', function() {
    const botonBarra = document.querySelector('.Barra_Boton');
    const barraLateral = document.querySelector('.barra_lateral');

    botonBarra.addEventListener('click', function() {
        // Cambiamos el valor de la propiedad left de la barra lateral para mostrar/ocultar la barra
        if (barraLateral.style.left === '0px') {
            barraLateral.style.left = '-250px';
        } else {
            barraLateral.style.left = '0px';
        }
    });
});

function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
}

const Audio_Fondo=new Audio('Fondo.mp3');
Audio_Fondo.loop=true;
Audio_Fondo.play();