import { Component, ViewEncapsulation } from '@angular/core';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [LoggingService],
})
export class UsersComponent {
  // userName: string = '';
  userList: string[] = ['manju'];
  name: string = 'abc';
  isAvailable: boolean = true;
  value: number = 25;
  constructor(private loggingService: LoggingService) {}
  onUserAdd(event: string) {
    // console.log(event);
    this.userList.push(event);
  }
  onChangeName() {
    this.name = 'welcome to manju world!';
    // let loggingService = new LoggingService();
    // console.log('Name is changed ' + this.name);
    // loggingService.logToConsole('User is changed ' + this.name);
    this.loggingService.logToConsole('User is changed ' + this.name);
  }

  onDeleteComponent() {
    this.userList = [];
  }
}
