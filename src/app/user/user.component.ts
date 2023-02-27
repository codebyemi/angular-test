import { Component, Input } from '@angular/core';
import { User } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user!: User;

  constructor() {}
}