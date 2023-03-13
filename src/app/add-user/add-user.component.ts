import { LoggingService } from '../services/logging.service';
import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [LoggingService],
})
export class AddUserComponent {
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userInput') userInput: ElementRef<any> | undefined;
  userName: string = '';
  userList: string[] = [];
  constructor(private loggingService: LoggingService) {}
  // onUserAdd(input: HTMLInputElement) {
  //   console.log(input);
  //   this.userAdded.emit(this.userName);
  //   // this.userList.push(this.userName);
  // }
  // onUserAdd() {
  //   // this.userInput?.nativeElement.value = 'Welcome to abc';
  //   console.log(this.userInput?.nativeElement?.value);
  //   this.userAdded.emit(this.userInput?.nativeElement?.value);
  // }

  onUserAdd() {
    this.userAdded.emit(this.userName);
    // let loggingService = new LoggingService();
    // loggingService.logToConsole('User is added ' + this.userName);
    // console.log('user is added ' + this.userName);
    this.loggingService.logToConsole('User is added ' + this.userName);
  }
}
