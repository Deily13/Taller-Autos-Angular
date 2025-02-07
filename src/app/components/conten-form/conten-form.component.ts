import { Component, Output, EventEmitter } from '@angular/core';
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
    trigger('slideAndFade', [
      state('visible', style({ transform: 'translateX(0)', opacity: 1 })),
      state('hidden', style({ transform: 'translateX(-100%)', opacity: 0 })),
      
      transition('visible => hidden', [
         animate('4s ease-in-out')
      ]),

      transition('hidden => visible', [
        animate('4s ease-in-out')
      ])
    ])
  ]
})

export class ContenFormComponent {
  mostrarFormulario: boolean = true;
  mostrarRegistro: boolean = false;
  mensajeCambiado: boolean = false;
  mensaje = 'Si aún no has creado tu cuenta...\n ¡puedes iniciar creando una!';
  mostrarSoloBoton3 = true;

  animarTitulo: boolean = false;
  
  onBotonPresionado(botonId: number) {
    console.log('Botón presionado:', botonId);
    
    if (botonId === 3) {
      this.mostrarFormulario = false;
      this.mostrarRegistro = true;
      this.mensaje = '"Si tu auto está fatal,\n nosotros lo dejamos ¡espectacular!"';
      this.mostrarSoloBoton3 = false;
      this.animarTitulo = true;
    }
  }

}