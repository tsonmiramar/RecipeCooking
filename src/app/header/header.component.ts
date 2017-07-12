import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() tabClickEvent = new EventEmitter<string>();

  onSelectClick(dest: string){
    this.tabClickEvent.emit(dest);
  }
}
