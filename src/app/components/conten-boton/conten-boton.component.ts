import { Component, Output, EventEmitter } from '@angular/core';
import { BotonesComponent } from '../botones/botones.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-conten-boton', 
  templateUrl: './conten-boton.component.html',
  styleUrl: './conten-boton.component.css',
  imports: [
    BotonesComponent, 
    CommonModule,
    MatButtonModule
  ]
})
export class ContenBotonComponent {
  alineacionHijo: 'horizontal' | 'vertical' = 'horizontal';

  @Output() botonPresionado = new EventEmitter<void>(); 

  onBotonPresionado() {
    console.log("ContenBotonComponent: Evento botonPresionado propagado");
    this.botonPresionado.emit(); // Propagar el evento al componente raíz
  }
}  