import { Component } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatCardContent } from '@angular/material/card';
import { MatCard } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-conten-form-auto',
  imports: [
    MatLabel,
    MatInputModule,
    MatCardContent,
    MatCard,
    MatFormField,
    CommonModule,

  ],
  templateUrl: './conten-form-auto.component.html',
  styleUrl: './conten-form-auto.component.css'
})
export class ContenFormAutoComponent {

  selectedColor: string = '#000000';

  updateColor(event: Event) {
    this.selectedColor = (event.target as HTMLInputElement).value;
  }

}
