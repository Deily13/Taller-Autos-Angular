import { Directive, Input, ElementRef, Renderer2, HostListener  } from '@angular/core';

@Directive({
  selector: '[appCheckboxMarcas]'
})
export class CheckboxMarcasDirective {

  @Input() appCheckboxMarcas: string = 'transparent'; // Color de fondo por defecto
    @Input() appCheckboxChecked: string = 'lightgreen';
  
    private isChecked: boolean = false; // Variable para trackear el estado
  
    constructor(private el: ElementRef, private renderer: Renderer2) { }
  
    ngOnInit() {
      // Establecer el color inicial (transparente)
      this.changeBackgroundColor(this.appCheckboxMarcas);
    }
  
  
    @HostListener('click') onClick() {
      this.isChecked = !this.isChecked; // Invierte el estado
  
      if (this.isChecked) {
        this.changeBackgroundColor(this.appCheckboxChecked); // Color "checked"
      } else {
        this.changeBackgroundColor(this.appCheckboxMarcas); // Color "unchecked" (original)
      }
    }
  
    @HostListener('mouseenter') onMouseEnter() {
      if (!this.isChecked) { // Solo cambia el color al pasar el mouse si no está "checked"
        this.changeBackgroundColor(this.appCheckboxMarcas === 'transparent' ? 'lightblue' : this.appCheckboxMarcas); // Color hover, si es transparente usa lightblue
      }
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      if (!this.isChecked) { // Solo cambia el color al salir el mouse si no está "checked"
        this.changeBackgroundColor(this.appCheckboxMarcas); // Color original
      }
    }
  
    private changeBackgroundColor(color: string) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}
