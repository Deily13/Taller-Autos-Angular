import { Directive, ElementRef, Renderer2, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAnimationSaludo]',
  standalone: true
})
export class AnimationSaludoDirective implements OnChanges {
  @Input() triggerAnimation: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['triggerAnimation']?.currentValue) {
      this.iniciarAnimacion();
    }
  }

  private iniciarAnimacion() {
    this.renderer.setStyle(this.el.nativeElement, 'transition', 'transform 1s ease-in-out');
    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');

    setTimeout(() => {
      this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0)');
    }, 1000); // Tiempo de la animación
  }
}
