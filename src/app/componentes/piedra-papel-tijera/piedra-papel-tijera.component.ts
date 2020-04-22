import { Component, Output, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  newGame: JuegoPiedraPapelTijera;
  hideVerifyBtn: boolean;
  repeater: any;
  timer: number;

  constructor() {
    this.newGame = new JuegoPiedraPapelTijera();
    console.log(`Seleccion COM: ${this.newGame.comSelection}`);
    this.timer = 5;
  }

  iniciarJuego() {
    this.newGame.iniciarJuego();
    this.hideVerifyBtn = false;
    this.repeater = setInterval(() => {
      this.timer--;
      if (this.timer === 0) {
        clearInterval(this.repeater);
        this.verificar();
        this.hideVerifyBtn = true;
        this.timer = 5;
      }
    }, 900);
  }

  verificar() {
    if (this.newGame.verificar()) {
      console.log('Gano el juego.');
    } else if (this.newGame.verificarEmpate()) {
      console.log('Empato el juego.');
    } else {
      console.log('Ha perdido.');
    }
  }

}
