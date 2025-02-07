import { Directive, ElementRef, Renderer2, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appCheckbox]'
})
export class CheckboxDirective {
  @Input() appCheckbox: string = 'transparent'; // Color de fondo por defecto
  @Input() appCheckboxChecked: string = 'lightgreen';

  private isChecked: boolean = false; // Variable para trackear el estado

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Establecer el color inicial (transparente)
    this.changeBackgroundColor(this.appCheckbox);
  }


  @HostListener('click') onClick() {
    this.isChecked = !this.isChecked; // Invierte el estado

    if (this.isChecked) {
      this.changeBackgroundColor(this.appCheckboxChecked); // Color "checked"
    } else {
      this.changeBackgroundColor(this.appCheckbox); // Color "unchecked" (original)
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    if (!this.isChecked) { // Solo cambia el color al pasar el mouse si no está "checked"
      this.changeBackgroundColor(this.appCheckbox === 'transparent' ? 'lightblue' : this.appCheckbox); // Color hover, si es transparente usa lightblue
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (!this.isChecked) { // Solo cambia el color al salir el mouse si no está "checked"
      this.changeBackgroundColor(this.appCheckbox); // Color original
    }
  }

  private changeBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}