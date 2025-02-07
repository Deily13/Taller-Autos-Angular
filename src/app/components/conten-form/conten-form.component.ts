import { Component, ViewChild,  ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormularioComponent } from '../formulario/formulario.component';
import { MatCardModule } from '@angular/material/card';
import { RegistroComponent } from '../registro/registro.component';
import { MatCardTitle } from '@angular/material/card';
import { BotonesComponent } from "../botones/botones.component";
import { CommonModule } from '@angular/common';
import { AnimationSaludoDirective } from '../../directives/animation-saludo.directive';


@Component({
  selector: 'app-conten-form',

  imports: [
    FormularioComponent,
    MatCardModule,
    MatCardTitle,
    RegistroComponent,
    BotonesComponent,
    CommonModule,
    AnimationSaludoDirective
  ],

  templateUrl: './conten-form.component.html',
  styleUrl: './conten-form.component.css',
  animations: [
    trigger('slideIn', [
      state('start', style({
        transform: 'translateX(100%)' /* Fuera de la pantalla a la derecha */
      })),
      state('end', style({
        transform: 'translateX(0)' /* Posición final en su lugar */
      })),
      transition('start => end', [
        animate('0.5s ease-out') /* Animación suave */
      ])
    ])
  ]
})

export class ContenFormComponent {
  @ViewChild('tituloAnimado', { static: true }) tituloAnimado!: ElementRef;

  mostrarFormulario: boolean = true;
  mostrarRegistro: boolean = false;
  mensajeCambiado: boolean = false;
  mensaje = 'Si aún no has creado tu cuenta...\n ¡puedes iniciar creando una!';
  mostrarSoloBoton3 = true;
  animarTitulo: boolean = false;
  
  ngOnInit() {
    // Agregar clase inicial para evitar el salto antes de la animación
    this.tituloAnimado.nativeElement.classList.add('estado-inicial');
  }

  onBotonPresionado(botonId: number) {
    console.log('Botón presionado:', botonId);
    
    if (botonId === 3) {
      this.mostrarFormulario = false;
      this.mostrarRegistro = false;
      
      this.mostrarSoloBoton3 = false;
      this.tituloAnimado.nativeElement.classList.remove('estado-inicial');
      this.animarTitulo = true;
    }
  }
  

  onAnimacionTerminada() {
    this.mostrarRegistro = true;
    this.mensaje = '"Si tu auto está fatal,\n nosotros lo dejamos ¡espectacular!"';
  }

}