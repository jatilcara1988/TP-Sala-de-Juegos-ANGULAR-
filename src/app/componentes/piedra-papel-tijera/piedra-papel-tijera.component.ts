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




  showCOM: boolean;
  showPlayer: boolean;
  comResult: string;
  playerResult: string;

  constructor() {
    this.newGame = new JuegoPiedraPapelTijera();
    this.player = new Jugador();
    this.showCOM = true;
    this.showPlayer = true;
    this.showResults = false;
    this.comResult = '';
    this.playerResult = '';
  }

  iniciarJuego() {
    this.newGame.iniciarJuego();
    console.log(`Seleccion COM: ${this.newGame.comSelection}`);
    this.showCOM = false;
    this.showPlayer = true;
    this.showResults = false;
    this.comResult = '';
    this.playerResult = '';
  }

  jugar(selection: string) {
    this.newGame.playerSelection = selection;
    this.verificar();
  }

  verificar() {
    if (this.newGame.verificar()) {
      console.log('Gano el juego.');
      this.comResult = 'lose-bg-result';
      this.playerResult = 'win-bg-result';
    } else if (this.newGame.verificarEmpate()) {
      console.log('Empato el juego.');
      this.comResult = 'draw-bg-result';
      this.playerResult = 'draw-bg-result';
    } else {
      console.log('Ha perdido.');
      this.comResult = 'win-bg-result';
      this.playerResult = 'lose-bg-result';
    }
    this.showCOM = false;
    this.showResults = true;
  }

}
