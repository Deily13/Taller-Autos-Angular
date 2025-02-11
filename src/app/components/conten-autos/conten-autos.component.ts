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
  checkedCardColor: string = '#afabab';

}
