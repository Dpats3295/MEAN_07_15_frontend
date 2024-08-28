import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appOverdueHighlight]'
})
export class OverdueHighlightDirective implements OnInit {
  
  @Input() appOverdueHighlight!: Date;

  constructor(private ele:ElementRef) {}

  ngOnInit(): void {
    const today = new Date();
    if ((this.appOverdueHighlight) < today) {
      this.ele.nativeElement.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
    }
  }
}
