import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverEffect]'
})
export class HoverEffectDirective {
  
  constructor(private ele:ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.ele.nativeElement.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.ele.nativeElement.style.boxShadow = 'none';
  }
}
