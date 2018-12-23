import {
  Component,
  AfterViewInit,
  OnDestroy,
  Type,
  ViewChild,
  ComponentFactoryResolver,
  ChangeDetectorRef
} from '@angular/core';
import { InsertionDirective } from './insertion.directive';
import { Subject } from 'rxjs';

@Component({
  selector: 'dc-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements AfterViewInit, OnDestroy {
  @ViewChild(InsertionDirective)
  insertionPoint: InsertionDirective;

  private readonly _onClose = new Subject<any>();
  public onClose = this._onClose.asObservable();

  // and this:
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {}

  childComponentType: Type<any>;
  componentRef;

  ngAfterViewInit() {
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  onOverlayClicked(evt: MouseEvent) {
    // close the dialog
  }

  onDialogClicked(evt: MouseEvent) {
    evt.stopPropagation();
  }

  close() {
    this._onClose.next();
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );

    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
