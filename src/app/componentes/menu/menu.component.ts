import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
        this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
        this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'PiedraPapelTijera':
        this.router.navigate(['/Juegos/PiedraPapelTijera']);
        break;
      case 'TaTeTi':
        this.router.navigate(['/Juegos/TaTeTi']);
        break;
      case 'Anagrama':
        this.router.navigate(['/Juegos/Anagrama']);
        break;
      case 'AdivinaMasListado':
        this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
        this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'PiedraPapelTijeraMasListado':
        this.router.navigate(['/Juegos/PiedraPapelTijeraMasListado']);
        break;
      case 'TaTeTiMasListado':
        this.router.navigate(['/Juegos/TaTeTiMasListado']);
        break;
      case 'AnagramaMasListado':
        this.router.navigate(['/Juegos/AnagrmaMasListado']);
        break;
    }
  }

}
