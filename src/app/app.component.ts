import { Component } from '@angular/core';
import form from './initial-form.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-formio-editor-demo';
  form: any;

  constructor() {
    this.form = form;
  }

}
