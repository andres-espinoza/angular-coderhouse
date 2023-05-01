import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthenticated$ = this.authService
    .appUserObservable()
    .pipe(map((user) => Boolean(user)));
  constructor(private authService: AuthService) {}
}
