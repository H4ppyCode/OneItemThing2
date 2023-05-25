import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[card-left]'
})
export class LeftDirective {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.justifyContent = 'flex-start';
  }
}