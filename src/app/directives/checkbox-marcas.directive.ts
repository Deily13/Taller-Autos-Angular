import { Directive, Input, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckboxMarcas]'
})
export class CheckboxMarcasDirective implements OnInit {

  @Input() appCheckboxMarcas: string = 'transparent';
  @Input() appCheckboxChecked: string = '#6863ac77';
  @Input() isSelected: boolean = false;  // Nueva propiedad para controlar selección externa

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.updateBackgroundColor();
  }

  ngOnChanges() {
    this.updateBackgroundColor(); // Actualiza el color si cambia `isSelected`
  }

  @HostListener('click')
  onClick() {
    this.isSelected = !this.isSelected;
    this.updateBackgroundColor();
  }

  private updateBackgroundColor() {
    const color = this.isSelected ? this.appCheckboxChecked : this.appCheckboxMarcas;
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
