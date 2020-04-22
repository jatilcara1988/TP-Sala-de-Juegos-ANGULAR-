import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.css']
})
export class MenuCardComponent {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
        this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'RockPaperScissors':
        this.router.navigate(['/Juegos/PiedraPapelTijeras']);
        break;
      case 'RPSMasListado':
        this.router.navigate(['/Juegos/PiedraPapelTijerasMasListado']);
        break;
      default:
        break;
    }
  }
}
