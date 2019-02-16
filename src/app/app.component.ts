import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bmw-cli';

  componentTitle = "I am a component from Component.ts";
  clickHandler() {
    alert("I AM CLICKED!");
  }
}
