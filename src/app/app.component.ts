import { Component } from '@angular/core';
import { User } from './shared/models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Array<User> = [];
  title = 'a2-form-validation';

  createUser(user: User) :void {
    this.users.push(user)
  }
}
