export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserCreation = Pick<User, 'name' | 'email'>;
