import { Component, OnInit, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SolutionCardComponent } from './components/solution-card/solution-card.component';
import { ContenFormComponent } from './components/conten-form/conten-form.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ContenBotonComponent } from './components/conten-boton/conten-boton.component';
import { CommonModule } from '@angular/common';
import { CardData } from './model/card-data';
import { AnimationSaludoDirective } from './directives/animation-saludo.directive';


@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTabsModule,
    CommonModule,
    SolutionCardComponent,
    ContenBotonComponent,
    ContenFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'taller-autos';

  mostrarSolutionCard: boolean = true;
  mostrarMenu: boolean = false;
  mostrarIcono: boolean = false;
  screenWidth: number = 0;
  mostrarContenForm: boolean = false;
  mostrarContenBoton: boolean = true;
  mostrarBoton3: boolean = false;


  cardData: CardData[] = [

    { title: 'Mantenimiento Preventivo', imagePath: 'assets/img/Servicios_de_taller/istockphoto-1364951753-612x612.jpg' },
    { title: 'Mantenimiento Correctivo', imagePath: 'assets/img/Servicios_de_taller/bugatti-centodieci-9-1613034287.jpg' },
    { title: 'Revision Del Sistema De Suspención', imagePath: 'assets/img/Servicios_de_taller/sistemas-de-suspension-automoviles.jpg' },
    { title: 'Alineación Y Rotación De Ruedas', imagePath: 'assets/img/Servicios_de_taller/EQ-2910356.jpg' },
    { title: 'Revición Tecnica', imagePath: 'assets/img/Servicios_de_taller/Motor-de-auto-sacando-humo.webp' },
    { title: 'Reparación De Partes', imagePath: 'assets/img/Servicios_de_taller/istockphoto-1212230930-612x612.jpg' },
    { title: 'Cambio De Partes', imagePath: 'assets/img/Servicios_de_taller/istockphoto-1139697726-170667a.jpg' },
    { title: 'Cambio De Aceite', imagePath: 'assets/img/Servicios_de_taller/istockphoto-1332818521-170667a.jpg' },
    { title: 'Cambio De Ruedas', imagePath: 'assets/img/Servicios_de_taller/450_1000.jpg' },
    { title: 'Revición De Frenos', imagePath: 'assets/img/Servicios_de_taller/Sistema-de-frenos.webp' },
    { title: 'Lavado', imagePath: 'assets/img/Servicios_de_taller/desktop-wallpaper-self-service-car-wash-fleet-services-car-wash.jpg' },
    { title: 'Pulido Y Encerado', imagePath: 'assets/img/Servicios_de_taller/2018-02-14-teroson-mejora-su-gama-de-masillas-para-la-reparación-jpg-1-.jpg' },

  ];

  // Método para manejar el evento del botón
  onBotonPresionado() {
    console.log("AppComponent: Evento botonPresionado recibido");
    this.mostrarSolutionCard = false;
    this.mostrarContenForm = true;
    this.mostrarContenBoton = false;
    this.mostrarBoton3 = true

  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.screenWidth = window.innerWidth;
    this.checkMenuVisibility();
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.checkMenuVisibility();
    console.log("AppComponent inicializado");
  }

  cambiarVista() {
    this.mostrarSolutionCard = false;
    this.mostrarIcono = true;
    this.mostrarBoton3 = true;
  }

  checkMenuVisibility() {
    const breakpoint = 660;
    this.mostrarMenu = this.screenWidth < breakpoint;
  }



}
