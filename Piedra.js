let puntosJugador = 0;
let puntosMaquina = 0;

function jugar(eleccionJugador) {
    const opcionesMaquina = ['piedra', 'papel', 'tijera'];
    /*
        let aleatorio = Math.random() * 3;
        aleatorio = Math.floor(aleatorio);
        let eleccionM = opcionesMaquina[aleatorio];
    */
    const eleccionMaquina = opcionesMaquina[Math.floor(Math.random() * 3)];
    let resultado;
    if (eleccionJugador == eleccionMaquina) {//empate
        resultado = "Empate!";
    } else if (
        (eleccionJugador === 'piedra' && eleccionMaquina === 'tijera') ||
        (eleccionJugador === 'papel' && eleccionMaquina === 'piedra') ||
        (eleccionJugador === 'tijera' && eleccionMaquina === 'papel')
    )//gana jugador
    {
        resultado = "Ganaste!";
        puntosJugador++;
    }
    else {//gana máquina
        resultado = "Perdiste!";
        puntosMaquina++;
    }

    const emojis = {
        piedra: '🧱',
        papel: '📃',
        tijera: '✂'
    }

    document.getElementById('result').innerHTML =
        `Tu elección: ${emojis[eleccionJugador]} vs Computadora: ${emojis[eleccionMaquina]} ${resultado}`

};
