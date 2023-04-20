import { Directive } from '@angular/core';

@Directive({
selector: '[cardM]',
host: {
'style': display: flex; justify-content: center; align-items: center; }
})
export class MiddleDirective {}
