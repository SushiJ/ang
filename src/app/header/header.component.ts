import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() componentSelected = new EventEmitter<string>();
  loadedComp: string = "recipe";


  onSelect(component: string): void {
    this.componentSelected.emit(component);
    this.loadedComp = component;
  }
}
