import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    this.authService.recoverSession();
    return this.authService.appUserObservable().pipe(
      map((user) => {
        if (!user) return this.router.createUrlTree(['inicio-de-sesion']);
        if (route.data['roles'].includes(user.userType)) return true;
        return this.router.createUrlTree(['']);
      })
    );
  }
}
