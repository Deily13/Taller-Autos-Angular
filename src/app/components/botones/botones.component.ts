import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

interface Boton {
  id: number;
  texto: string;
  mostrar: boolean;
}

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrl: './botones.component.css',
  imports: [
    CommonModule,
    MatButtonModule,
  ]
})
export class BotonesComponent {

  @Input() alineacion: 'horizontal' | 'vertical' = 'horizontal';
  @Input() mostrarSoloBoton3 = false;
  @Output() botonPresionado: EventEmitter<number> = new EventEmitter<number>();

  botones: Boton[] = [
    { id: 1, texto: 'Botón 1', mostrar: true },
    { id: 2, texto: 'Botón 2', mostrar: true },
    { id: 3, texto: 'Boton 3', mostrar: false }
  ];

  ngOnInit() {
    if (this.mostrarSoloBoton3) {
      this.botones = this.botones.map((boton) =>
        boton.id === 3 ? { ...boton, mostrar: true } : { ...boton, mostrar: false }
      );
    }
  }

  toggleBoton(index: number) {
    const boton = this.botones[index];
    if (boton) {
      console.log(`Botón presionado: ${boton.id}`);
      this.botonPresionado.emit(boton.id);
    }
  }
}