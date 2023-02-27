import { Component } from '@angular/core';
import { User, UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  users: User[] = this.userService.getUsers();
  constructor(private userService: UserService) {}
}
