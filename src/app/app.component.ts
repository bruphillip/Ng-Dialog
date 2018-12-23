import { Component } from '@angular/core';
import { ExampleComponent } from './example/example.component';
import { DialogService } from './dialog/dialog.service';

@Component({
  selector: 'dc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamic-comp';

  constructor(public dialog: DialogService) {
    const ref = this.dialog.open(ExampleComponent, {
      data: { message: 'I am a dynamic component inside of a dialog!' }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result);
    });
  }
}
