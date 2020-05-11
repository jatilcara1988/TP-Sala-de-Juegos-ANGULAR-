import { Juego } from '../clases/juego';

export class JuegoPiedraPapelTijera extends Juego {

    // Parametros propios del juego...
    comSelection: string;
    playerSelection: string;
    handSelector = ['rock', 'paper', 'scissors' ];
    result: string;
    messageResult: string;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Piedra, papel o tijera', gano, jugador);
    }

    // Aqui se inicializa el juego
    public iniciarJuego() {
        this.comSelection = this.handSelector[Math.floor(Math.random() * this.handSelector.length)];
        this.playerSelection = '';
        this.result = '';
        this.messageResult = '';
    }

    public verificar(): boolean {
        this.gano = false;
        if (this.comSelection === this.playerSelection) {
            this.result = 'draw';
            this.messageResult = 'Empate';
        } else {
            switch (this.comSelection) {
                case 'rock':
                    this.gano = (this.playerSelection === 'paper');
                    break;
                case 'paper':
                    this.gano = (this.playerSelection === 'scissors');
                    break;
                case 'scissors':
                    this.gano = (this.playerSelection === 'rock');
                    break;
                default:
                    this.gano = false;
            }
            if (this.gano) {
                this.result = 'win';
                this.messageResult = 'Gano';
            } else {
                this.result = 'lose';
                this.messageResult = 'Perdio';
            }
        }
        return this.gano;
    }

    public showCOMSelection(comSelection: string): boolean {
        return this.comSelection === comSelection;
    }

    public showPlayerSelection(selection: string): boolean {
        return this.playerSelection === selection;
    }

}
