import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() componentSelected = new EventEmitter<string>();

  onSelect(component: string): void {
    this.componentSelected.emit(component);
  }
}
