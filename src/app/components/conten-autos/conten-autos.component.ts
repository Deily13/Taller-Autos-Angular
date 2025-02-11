import { Component, Input  } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CheckboxMarcasDirective } from '../../directives/checkbox-marcas.directive';
import { CommonModule } from '@angular/common';
import { MarkData } from '../../model/mark-data';


@Component({
  selector: 'app-conten-autos',
  imports: [
    MatCardModule,
        CheckboxMarcasDirective,
        CommonModule
  ],
  templateUrl: './conten-autos.component.html',
  styleUrl: './conten-autos.component.css'
})
export class ContenAutosComponent {

@Input() marks: MarkData[] = [];
  initialCardColor: string = 'transparent';
  checkedCardColor: string = '#6863ac77';

   markData: MarkData[] = [
  
      { mark: 'BMW', markPath: 'assets/img/Marcas/BMW.jpg' },
      { mark: 'Bugati', markPath: 'assets/img/Marcas/Bugati.jpg' },
      { mark: 'Rolls-Royce', markPath: 'assets/img/Marcas/Roll-Roice.jpg' },
      { mark: 'Lamborgini', markPath: 'assets/img/Marcas/Lamborgini.jpg' },
      { mark: 'Land Rover', markPath: 'assets/img/Marcas/land-rover.jpg' },
      { mark: 'Maserati', markPath: 'assets/img/Marcas/maserati .jpg' },
      { mark: 'Mercedes', markPath: 'assets/img/Marcas/Mercedes.jpg' },
      { mark: 'Porshe', markPath: 'assets/img/Marcas/Porshe.jpeg' },
      { mark: 'Ferrari', markPath: 'assets/img/Marcas/Ferrari.jpg' },
  
  
    ];
  

  selectedIndex: number | null = null; // Control de la marca seleccionada

  selectMark(index: number) {
    this.selectedIndex = this.selectedIndex === index ? null : index;
  }
}
