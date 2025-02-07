import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appAnimationSaludo]'
})
export class AnimationSaludoDirective implements OnChanges {
  @Input() triggerAnimation: boolean = false;
  @Output() animacionTerminada: EventEmitter<void> = new EventEmitter<void>();

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['triggerAnimation']?.currentValue) {
      this.iniciarAnimacion();
    }
  }

  private iniciarAnimacion() {
    const elemento = this.el.nativeElement;
  
    // Iniciar animación
    this.renderer.setStyle(elemento, 'transition', 'transform 3s ease-in-out');
    this.renderer.setStyle(elemento, 'transform', 'translateX(-20%)');
  
    elemento.addEventListener('transitionend', () => {
      this.animacionTerminada.emit();
      // Mantener el mensaje visible sin ocultarlo
      this.renderer.setStyle(elemento, 'transition', 'none');
      this.renderer.setStyle(elemento, 'transform', 'translateX(0)');
    }, { once: true });
  }
}