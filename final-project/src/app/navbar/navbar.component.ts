import { Component } from '@angular/core';
import { AuthService } from '../core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  openSideNav = false;

  constructor(private authService: AuthService, private router: Router) {}

  handleOpenSideNav() {
    this.openSideNav = !this.openSideNav;
  }

  handleLogout() {
    this.authService.logout();
    this.router.navigate(['inicio-de-sesion']);
  }
}
