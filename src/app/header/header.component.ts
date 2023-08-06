import { Component } from '@angular/core';
import { DataStorageService } from '../shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(private dataStorageService: DataStorageService) {}

  onSave() {
    this.dataStorageService.postRecipes();
  }

  onFetch() {
    this.dataStorageService.fetchRecipes();
  }
}
