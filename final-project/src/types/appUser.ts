enum UserType {
  User = 1,
  Admin,
}

export interface AppUser {
  userName: string;
  password: string;
  userType: UserType;
}
