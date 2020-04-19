import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import {Subscription} from 'rxjs';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private subscription: Subscription;
  usuario = '';
  clave = '';
  progreso: number;
  progresoMensaje = 'esperando...';
  logeando = true;
  ProgresoDeAncho: string;
  errorLogin = false;
  errorLoginMessage = '';

  clase = 'progress-bar progress-bar-info progress-bar-striped';

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
      this.progreso = 0;
      this.ProgresoDeAncho = '0%';
  }

  Entrar() {
    // Agregar una validacion de usuario con una base de datos en memoria
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/Principal']);
    } else {
      this.showError('Usuario o contraseña erroneos, vuelva a intentarlo...');
    }
  }

  MoverBarraDeProgreso() {
    if (!this.usuario || this.usuario === '' || !this.clave || this.clave === '') {
      this.showError('Debe ingresar usuario y contraseña');
    } else {
      this.logeando = false;
      this.clase = 'progress-bar progress-bar-danger progress-bar-striped active';
      this.progresoMensaje = 'NSA spy...';
      let timer = TimerObservable.create(200, 50);
      this.subscription = timer.subscribe(t => {
        console.log('inicio');
        this.progreso = this.progreso + 1;
        this.ProgresoDeAncho = this.progreso + 20 + '%';
        switch (this.progreso) {
          case 15:
            this.clase = 'progress-bar progress-bar-warning progress-bar-striped active';
            this.progresoMensaje = 'Verificando ADN...';
            break;
          case 30:
            this.clase = 'progress-bar progress-bar-Info progress-bar-striped active';
            this.progresoMensaje = 'Adjustando encriptación..';
            break;
          case 60:
            this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
            this.progresoMensaje = 'Recompilando Info del dispositivo..';
            break;
          case 75:
            this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
            this.progresoMensaje = 'Recompilando claves facebook, gmail, chats..';
            break;
          case 85:
            this.clase = 'progress-bar progress-bar-success progress-bar-striped active';
            this.progresoMensaje = 'Instalando KeyLogger..';
            break;
          case 100:
            console.log('final');
            this.subscription.unsubscribe();
            this.Entrar();
            break;
        }
      });
    }
    // this.logeando = true;
  }

  private showError(message: string) {
    this.progreso = 0;
    this.ProgresoDeAncho = '0%';
    this.errorLoginMessage = message;
    this.errorLogin = true;
    this.logeando = true;
    setTimeout(() => {
      this.errorLogin = false;
      this.errorLoginMessage = '';
    }, 5000);
  }
}
