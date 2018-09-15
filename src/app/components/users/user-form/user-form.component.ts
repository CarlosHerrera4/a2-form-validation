import { User } from './../../../shared/models/user.model';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {
  
  @Input() private user: User;
  @Output() private createUser:EventEmitter<User> = new EventEmitter<User>();

  onClickAddNewUser() {
    this.createUser.emit(this.user);
  }
}
