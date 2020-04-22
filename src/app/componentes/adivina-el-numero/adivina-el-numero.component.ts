import { Component, Output, EventEmitter } from '@angular/core';
import { JuegoAdivina } from '../../clases/juego-adivina';

@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css']
})
export class AdivinaElNumeroComponent {
  @Output() enviarJuego: EventEmitter<any> = new EventEmitter<any>();

  nuevoJuego: JuegoAdivina;
  Mensajes: string;
  contador: number;
  ocultarVerificar: boolean;

  constructor() {
    this.nuevoJuego = new JuegoAdivina();
    console.log('numero Secreto:', this.nuevoJuego.numeroSecreto);
    this.ocultarVerificar = false;
  }
  generarnumero() {
    this.nuevoJuego.iniciarJuego();
    this.contador = 0;
  }
  verificar() {
    this.contador++;
    this.ocultarVerificar = true;
    console.log('numero Secreto:', this.nuevoJuego.gano);
    if (this.nuevoJuego.verificar()) {
      this.enviarJuego.emit(this.nuevoJuego);
      this.MostarMensaje('Sos un Genio!!!', true);
      this.nuevoJuego.numeroSecreto = 0;
    } else {
      let mensaje: string;
      switch (this.contador) {
        case 1:
          mensaje = 'No, intento fallido, animo';
          break;
        case 2:
          mensaje = 'No, te estaras acercando???';
          break;
        case 3:
          mensaje = 'No es, Yo crei que la tercera era la vencida.';
          break;
        case 4:
          mensaje = `No era el ${this.nuevoJuego.numeroIngresado}`;
          break;
        case 5:
          mensaje = `${this.contador} intentos y nada.`;
          break;
        case 6:
          mensaje = 'Afortunado en el amor';
          break;
        default:
          mensaje = `Ya le erraste ${this.contador} veces`;
          break;
      }
      this.MostarMensaje(`#${this.contador} ${mensaje} ayuda : ${this.nuevoJuego.retornarAyuda()}`);
    }
    console.log('numero Secreto:', this.nuevoJuego.gano);
  }

  MostarMensaje(mensaje: string = 'este es el mensaje ', ganador: boolean = false) {
    this.Mensajes = mensaje;
    let x = document.getElementById('snackbar');
    if (ganador) {
      x.className = 'show Ganador';
    } else {
      x.className = 'show Perdedor';
    }
    let modelo = this;
    setTimeout(function() {
      x.className = x.className.replace('show', '');
      modelo.ocultarVerificar = false;
      /*Se agrega el setteo en null para evitar el warning*/
      modelo = null;
      x = null;
    }, 3000);
    console.log('objeto', x);
  }

}
