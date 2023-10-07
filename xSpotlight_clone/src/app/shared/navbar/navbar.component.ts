import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showSearchBar = false;

  toggleSearchBar(): void {
    this.showSearchBar = !this.showSearchBar;
  }
}
