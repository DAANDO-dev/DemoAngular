import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';


@Component({
  selector: 'app-confirm-box',
  imports: [],
  templateUrl: './confirm-box.component.html',
  styleUrl: './confirm-box.component.scss'
})
export class ConfirmBoxComponent {
  // @Input()
  // message!: string;
  // old writing
  message = input()   

  // @Output()
  // onResponse: EventEmitter<boolean> = new EventEmitter();
  // old writing
  onResponse = output<boolean>();

  cancel(){
    this.onResponse.emit(false);
  }

  confirm() {
    this.onResponse.emit(true);
  }

}
