var puntajeusuario = 0;
var puntajeconsola = 0;


var opcionesconsola = ("#piedra", "#papel", "#tijeras");
var opcionesjugador = ("#piedra", "#papel", "#tijeras");

var opcionconsola = opcionesconsola(Math.floor(Math.random() * 3));

document.writeln("#opcionconsola") = opcionconsola;
document.writeln("#opcionjugador") = opcionesjugador;

if (opcionesjugador === opcionesconsola) {
    alert("Empate!");
} else if (opcionesjugador === "#piedra" && opcionesconsola === "#tijeras" || (opcionesjugador === "#papel" && opcionesconsola === "#piedra" || opcionesjugador === "#tijeras" && opcionesconsola === "#papel")){
    alert("Ganaste");
    puntajeusuario++;
} else {
    alert("Perdiste");
    puntajeconsola++;
}

document.writeln("#puntajeusuario") = puntajeusuario;
document.writeln("puntajeconsola") = puntajeconsola;