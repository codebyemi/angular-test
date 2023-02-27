import { Injectable } from '@angular/core';

export interface User {
  name: string;
  age: number;
  address: { street: string; city: string };
  hobbies: string[];
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    {
      name: 'John',
      age: 10,
      address: { street: '123 Main St', city: 'Boston' },
      hobbies: ['skateboarding'],
    },
    {
      name: 'Jill',
      age: 17,
      address: { street: '666 NY Ave.', city: 'New York' },
      hobbies: ['gaming', 'anime', 'cycling', 'programming'],
    },
    {
      name: 'Jack',
      age: 18,
      address: { street: '4064 Corrientes', city: 'Buenos Aires' },
      hobbies: ['anime', 'music'],
    },
    {
      name: 'Jenny',
      age: 35,
      address: { street: '457 Baker Street', city: 'London' },
      hobbies: ['music', 'reading'],
    },
    {
      name: 'Julian',
      age: 58,
      address: { street: '456 Main St', city: 'Boston' },
      hobbies: [],
    },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
