var puntajeusuario = 0;
var puntajeComputadora = 0;
var rondasJugadas = 0;
var rondasTotales = 0;
var Empates = 0;

function iniciarJuego() {
    rondasTotales = +document.getElementById('cantidadRondas').value;
    rondasJugadas = 0;
    actualizarRonda();
}

function actualizarRonda() {
    document.getElementById('rondaActual').innerText = rondasJugadas + 1;
}

function jugar(opcionUsuario) {
    if (rondasJugadas >= rondasTotales) {
        alert('Juego Terminado! Reinicia para jugar de nuevo.');
        return;
    }
    var opcionesComputador = ['piedra', 'papel', 'tijera'];
    var opcionComputadora = opcionesComputador[Math.floor(Math.random() * 3)];

    document.getElementById('opcionUsuario').innerText = opcionUsuario;
    document.getElementById('opcionComputadora').innerText = opcionComputadora;

    if (opcionUsuario === opcionComputadora){
        alert('Empate!');
        Empates++;
    } else if (
        (opcionUsuario === 'piedra' && opcionComputadora === 'tijeras') ||
        (opcionUsuario === 'papel' && opcionComputadora === 'piedra') ||
        (opcionUsuario === 'tijeras' && opcionComputadora === 'papel')
    ) {
        alert('!Ganaste! Sigue asi!')
        puntajeusuario++;
    } else {
        alert('Oh no, la computadora gana!')
        puntajeComputadora++;
    }
rondasJugadas++;
actualizarRonda()
document.getElementById('puntajeUsuario').innerText = puntajeusuario;
document.getElementById('puntajeComputadora').innerText = puntajeComputadora;
document.getElementById('empates').innerText = Empates;

if (rondasJugadas >= rondasTotales){
    var resultadofinal;
    if (puntajeusuario > puntajeComputadora){
        resultadofinal = 'Felicidades, Ganaste!';
    } else if (puntajeusuario < puntajeComputadora){
        resultadofinal = 'Oh no, La computadora gano, intentalo otra vez!';
    } else {
        resultadofinal = 'Ha sido un empate!, intentalo otra vez!';
    }
    alert('Juego Terminado.\n' + resultadofinal + '\nPuntajefinal:\nUsuario: ' + puntajeusuario + '\nComputadora: ' + puntajeComputadora + '\nEmpates: ' + Empates)
}
}



