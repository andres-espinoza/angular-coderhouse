import { UserType } from './userType';

export interface AppUser {
  userName: string;
  password: string;
  userType: UserType;
}
