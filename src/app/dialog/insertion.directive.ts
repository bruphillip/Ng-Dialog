import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dcInsertion]'
})
export class InsertionDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
