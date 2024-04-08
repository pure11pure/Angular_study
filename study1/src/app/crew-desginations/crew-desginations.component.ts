import { Component, EventEmitter, Input, Output, input } from '@angular/core';

@Component({
  selector: 'app-crew-desginations',
  standalone: true,
  templateUrl: './crew-desginations.component.html',
  styleUrl: './crew-desginations.component.scss'
})
export class CrewDesginationsComponent {

  @Input() message: string = "";
  @Input() token: string = "";

  @Output() messageEvent = new EventEmitter<string>;

  sendMessage(){
    this.messageEvent.emit("Hello from child to parent")
  }

}
