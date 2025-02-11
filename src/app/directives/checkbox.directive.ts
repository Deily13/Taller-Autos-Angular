import { Directive, ElementRef, Renderer2, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCheckbox]'
})
export class CheckboxDirective implements OnInit {
  @Input() appCheckbox: string = 'transparent'; // Color de fondo por defecto
  @Input() appCheckboxChecked: string = 'lightgreen';

  private isChecked: boolean = false;
  private originalBackgroundColor: string = ''; // Guarda el color original

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // Guarda el color de fondo original
    this.originalBackgroundColor = this.getBackgroundColor();
    this.setBackgroundColor(this.appCheckbox); // Establece el color inicial
  }

  @HostListener('click')
  onClick() {
    this.isChecked = !this.isChecked;
    this.setBackgroundColor(this.isChecked ? this.appCheckboxChecked : this.appCheckbox);
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    if (!this.isChecked) {
      const hoverColor = this.appCheckbox === 'transparent' ? 'lightblue' : this.appCheckbox;
      this.setBackgroundColor(hoverColor);
    }
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (!this.isChecked) {
      this.setBackgroundColor(this.appCheckbox);
    }
  }

  private setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  private getBackgroundColor(): string {
    return window.getComputedStyle(this.el.nativeElement).backgroundColor;
  }
}