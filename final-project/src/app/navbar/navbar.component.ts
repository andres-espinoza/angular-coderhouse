import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  openSideNav = false;

  handleOpenSideNav() {
    this.openSideNav = !this.openSideNav;
  }
}
