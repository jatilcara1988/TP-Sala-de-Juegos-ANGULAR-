import { Juego } from '../clases/juego';

export class JuegoAnagrama extends Juego {

    // Parametros propios del juego...

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Anagrama', gano, jugador);
    }

    public iniciarJuego() {
        // Aqui se inicializa el juego
    }
    public verificar(): boolean {
        throw new Error('Method not implemented.');
    }
}
