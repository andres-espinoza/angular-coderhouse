import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppUser } from 'src/types/appUser';

interface Response {
  success: boolean;
  error?: ProcessError;
}

type ProcessError =
  | 'UNEXPECTED'
  | 'USERNAME_ALREADY_EXIST'
  | 'USER_NOT_FOUND'
  | 'USER_WRONG_PASSWORD';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private appUser$: BehaviorSubject<AppUser | null> =
    new BehaviorSubject<AppUser | null>(null);

  allUsersKey = 'coderhouse-users';
  currentSessionKey = 'coderhouse-current-user';

  retrieveUsers(): AppUser[] | null {
    let users: AppUser[] | null = null;
    try {
      const storagedValue: string | null = localStorage.getItem(
        this.allUsersKey
      );
      if (storagedValue) {
        users = JSON.parse(storagedValue);
      }
      return users;
    } catch (error) {
      console.error('An error ocurred recovering session: ', error);
      return users;
    }
  }

  createNewUser(user: AppUser): Response {
    try {
      const users = this.retrieveUsers();
      if (!users) {
        localStorage.setItem(this.allUsersKey, JSON.stringify([user]));
        return { success: true };
      }
      const findUser = users.find(({ userName }) => userName === user.userName);
      if (findUser) return { success: false, error: 'USERNAME_ALREADY_EXIST' };
      localStorage.setItem(this.allUsersKey, JSON.stringify([...users, user]));
      return { success: true };
    } catch (error) {
      console.error('An Error ocurred creating user', error);
      return { success: false, error: 'UNEXPECTED' };
    }
  }

  setSession(user: AppUser | null): Response {
    try {
      localStorage.setItem(this.currentSessionKey, JSON.stringify(user));
      return { success: true };
    } catch (error) {
      console.error('An Error ocurred setting session', error);
      return { success: false, error: 'UNEXPECTED' };
    }
  }

  recoverSession(): AppUser | null {
    let lastUser: AppUser | null = null;
    try {
      const storagedValue: string | null = localStorage.getItem(
        this.currentSessionKey
      );
      if (storagedValue) {
        lastUser = JSON.parse(storagedValue);
      }
      this.appUser$.next(lastUser);
      return lastUser;
    } catch (error) {
      console.error('An error ocurred recovering session: ', error);
      return lastUser;
    }
  }

  signUp(user: AppUser): Response {
    const { success, error } = this.createNewUser(user);
    if (success) {
      this.setSession(user).success && this.appUser$.next(user);
      return { success: true };
    }
    return { success, error };
  }

  signIn(user: Pick<AppUser, 'userName' | 'password'>): Response {
    const users = this.retrieveUsers();
    if (!users) return { success: false, error: 'USER_NOT_FOUND' };
    const findUser = users.find(({ userName }) => userName === user.userName);
    if (!findUser) return { success: false, error: 'USER_NOT_FOUND' };
    if (findUser?.password === user.password) {
      this.setSession(findUser).success && this.appUser$.next(findUser);
      return { success: true };
    }
    return { success: false, error: 'USER_WRONG_PASSWORD' };
  }

  logout(): void {
    this.setSession(null);
    this.appUser$.next(null);
  }

  appUserObservable(): Observable<AppUser | null> {
    return this.appUser$.asObservable();
  }
}
