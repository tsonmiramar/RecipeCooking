<<<<<<< HEAD
import { Component, EventEmitter, Output } from '@angular/core';
=======
import { Component } from '@angular/core';
>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
<<<<<<< HEAD
  @Output() tabClickEvent = new EventEmitter<string>();

  onSelectClick(dest: string){
    this.tabClickEvent.emit(dest);
  }
=======

>>>>>>> 194db1497b4457532b08c9737912a7ec39d07a70
}
