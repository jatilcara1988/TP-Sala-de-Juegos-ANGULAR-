import { Juego } from './juego';

export class JuegoAgilidad extends Juego {

    primerNumero = 0;
    operacion = '';
    segundoNumero = 0;
    respuestaIngresada: number;
    solucion: number;

    constructor(nombre?: string, gano?: boolean, jugador?: string) {
        super('Agilidad aritmética', gano, jugador);
    }

    public iniciarJuego() {
        const operadores = [ '+', '-', '*', '/' ];
        this.operacion = operadores[Math.floor(Math.random() * operadores.length)];
        this.primerNumero = 0;
        this.segundoNumero = 0;
        this.solucion = 0;
        switch (this.operacion) {
            case '+':
                this.primerNumero = Math.floor((Math.random() * 100) + 1);
                this.segundoNumero = Math.floor((Math.random() * 100) + 1);
                this.solucion = (this.primerNumero + this.segundoNumero);
                break;
            case '-':
                this.primerNumero = Math.floor((Math.random() * 100) + 1);
                this.segundoNumero = Math.floor((Math.random() * 100) + 1);
                while (this.segundoNumero < this.primerNumero) {
                    this.segundoNumero = Math.floor((Math.random() * 100) + 1);
                }
                this.solucion = (this.primerNumero - this.segundoNumero);
                break;
            case '*':
                this.primerNumero = Math.floor((Math.random() * 10) + 1);
                this.segundoNumero = Math.floor((Math.random() * 10) + 1);
                this.solucion = (this.primerNumero * this.segundoNumero);
                break;
            case '/':
                while (this.solucion === 0 || !Number.isInteger(this.solucion)) {
                    this.primerNumero = Math.floor((Math.random() * 100) + 1);
                    this.segundoNumero = Math.floor((Math.random() * 100) + 1);
                    while (this.segundoNumero === 0) {
                        this.segundoNumero = Math.floor((Math.random() * 100) + 1);
                    }
                    this.solucion = (this.primerNumero / this.segundoNumero);
                }
                break;
            default:
                this.solucion = 0;
                break;
        }
        this.respuestaIngresada = 0;
        console.log(`>>> Solucion: ${this.solucion}`);
        this.gano = false;
    }

    public verificar(): boolean {
        this.gano = (this.solucion === this.respuestaIngresada);
        return this.gano;
    }

    public retornarAyuda() {
        if (this.respuestaIngresada < this.solucion) {
          return 'Falta';
        } else if (this.respuestaIngresada > this.solucion) {
          return 'Te pasate';
        }
    }
}
