import {Injectable, NgZone} from '@angular/core';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  constructor(public snackBar: MatSnackBar) {

  }

  showToaster(msg: string) {
    this.snackBar.open(msg, null, {
      duration: 700,
    });
  }


  add(message: string) {
    this.showToaster(message);
    // TODO push if needs a log
    // this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
