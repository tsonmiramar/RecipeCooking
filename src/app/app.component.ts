import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  destPage = 'recipe';
  gotoTab(dest: string){
    this.destPage = dest;
  }
}
