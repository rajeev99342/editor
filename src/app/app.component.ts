import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  @ViewChild('editor') editor;

  change : string;
  name = 'Angular';
  modules = {
   
  };

  logChange($event) {
    console.log(this.editor);
    console.log($event);
    this.change = $event;
  }

}
