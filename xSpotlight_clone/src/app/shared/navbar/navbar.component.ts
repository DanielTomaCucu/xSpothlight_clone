import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  showSearchBar = false;
  menuOpen = false;
  toggleSearchBar(): void {
    this.showSearchBar = !this.showSearchBar;
  }
  @Input() drawer!: MatDrawer;

  toggleDrawer() {
    this.menuOpen = !this.menuOpen;
    this.drawer.toggle();
  }
}
