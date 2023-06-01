import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[cardM]'
})
export class MiddleDirective {
  constructor(private elementRef: ElementRef<HTMLDivElement>) {
    this.elementRef.nativeElement.style.display = 'flex';
    this.elementRef.nativeElement.style.justifyContent = 'center';
    this.elementRef.nativeElement.style.alignItems = 'center';
    //use padding 25px
    this.elementRef.nativeElement.style.padding = '30px';
  }
}
