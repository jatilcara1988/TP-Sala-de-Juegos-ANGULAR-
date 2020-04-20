import { Juego } from '../clases/juego';

export class JuegoAdivina extends Juego {
    numeroSecreto = 0;
    numeroIngresado = 0;
    constructor(nombre?: string, gano?: boolean, jugador?: string) {
      super('Adivina el número', gano, jugador);
    }
    public verificar(): boolean {
      this.gano = (this.numeroIngresado === this.numeroSecreto);
      return this.gano;
    }

    public iniciarJuego() {
      this.numeroSecreto = Math.floor((Math.random() * 100) + 1);
      console.log('>>> Numero Secreto generado:' + this.numeroSecreto);
      this.gano = false;
    }

    public retornarAyuda() {
      if (this.numeroIngresado < this.numeroSecreto) {
        return 'Falta';
      } else if (this.numeroIngresado > this.numeroSecreto) {
        return 'Te pasate';
      }
    }
}
