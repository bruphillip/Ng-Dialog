import { Component, OnInit } from '@angular/core';
import { DialogConfig } from '../dialog/dialog-config';
import { DialogRef } from '../dialog/dialog-ref';

@Component({
  selector: 'dc-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  constructor(public config: DialogConfig, public dialog: DialogRef) {}

  ngOnInit() {}

  onClose() {
    this.dialog.close('some value');
  }
}
