import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CardData } from '../../model/card-data';
import { CommonModule } from '@angular/common';
import { CheckboxDirective } from '../../directives/checkbox.directive';

@Component({
  selector: 'app-solution-card',
  imports: [
    MatCardModule,
    CheckboxDirective,
    CommonModule
  ],
  templateUrl: './solution-card.component.html',
  styleUrl: './solution-card.component.css'
})
export class SolutionCardComponent {
  @Input() cards: CardData[] = [];
  initialCardColor: string = 'transparent';
  checkedCardColor: string = '#afabab';
}
