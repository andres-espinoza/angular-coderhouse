import {
  Directive,
  ElementRef,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appPulseAnimation]',
})
export class PulseAnimationDirective {
  constructor(private elementRef: ElementRef<any>) {}

  @HostListener('mouseover') changeBg() {
    this.elementRef.nativeElement.animate(
      [{ transform: 'scale(1.2)' }, { transform: 'scale(1)' }],
      { duration: 300, iterations: 1 }
    );
  }
}
