import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() drawer!: MatDrawer;
  menuOpen = false;
  toggleDrawer() {
    this.menuOpen = !this.menuOpen;
    this.drawer.toggle();
  }
}
