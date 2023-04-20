import { Directive } from '@angular/core';

@Directive({
selector: '[cardM]',
host: {
'style': display: flex; justify-content: center; align-items: center; }
})
export class MiddleDirective {}

//il y a des cas où vous devrez utiliser JavaScript pour configurer les styles, 
// par exemple si vous devez configurer les styles dynamiquement en fonction de l'état de votre application. 
// Dans ce cas, ce  code peut être plus approprié.
// import { Directive, ElementRef, OnInit } from '@angular/core';

// Directive({
// selector: '[cardM]',
// })
// export class MiddleDirective implements OnInit {
// constructor(private elementRef: ElementRef<HTMLDivElement>) {}

// ngOnInit() {
// this.elementRef.nativeElement.style.display = 'flex';
// this.elementRef.nativeElement.style.justifyContent = 'center';
// this.elementRef.nativeElement.style.alignItems = 'center';
// }
// }
