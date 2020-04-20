import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JuegoAgilidad } from '../../clases/juego-agilidad';

import {Subscription} from 'rxjs';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  Tiempo: number;
  repetidor: any;

  private subscription: Subscription;

  constructor() {
    this.ocultarVerificar = true;
    this.Tiempo = 10;
    this.nuevoJuego = new JuegoAgilidad();
    console.log('Inicio agilidad');
  }

  iniciarNuevoJuego() {
    this.ocultarVerificar = false;
    this.nuevoJuego.iniciarJuego();
    this.Tiempo = 10;
    this.repetidor = setInterval(() => {
      this.Tiempo--;
      console.log('llego', this.Tiempo);
      if (this.Tiempo === 0) {
        clearInterval(this.repetidor);
        this.verificar();
        this.ocultarVerificar = true;
        this.Tiempo = 10;
      }
    }, 900);

  }
  verificar() {
    if (this.nuevoJuego.verificar()) {
      this.ocultarVerificar = true;
      clearInterval(this.repetidor);
    } else {
      this.ocultarVerificar = false;
    }
  }
}
