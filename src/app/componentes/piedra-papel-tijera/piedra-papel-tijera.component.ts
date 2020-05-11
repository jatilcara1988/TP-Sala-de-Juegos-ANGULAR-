import { Component, Output, EventEmitter } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { Jugador } from '../../clases/jugador';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  newGame: JuegoPiedraPapelTijera;
  player: Jugador;
  showResults: boolean;
  messageResult: string;

  constructor() {
    this.newGame = new JuegoPiedraPapelTijera();
    this.player = new Jugador();
    this.showResults = false;
    this.iniciarJuego();
  }

  iniciarJuego() {
    this.newGame.iniciarJuego();
    console.log(`Seleccion COM: ${this.newGame.comSelection}`);
    this.showResults = false;
  }

  jugar(selection: string) {
    this.newGame.playerSelection = selection;
    this.newGame.verificar();
    this.showResults = true;
  }

}
