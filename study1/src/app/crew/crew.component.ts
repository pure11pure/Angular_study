import { Component } from '@angular/core';
import { CrewDesginationsComponent } from '../crew-desginations/crew-desginations.component';

@Component({
  selector: 'app-crew',
  standalone: true,
  imports: [CrewDesginationsComponent],
  providers: [],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
  
  messageForComponent: string = 'Hello World';
  token: string = 'dfdfsdlkopj894565';

  //รับค่าตัวแปร และมาเก็บที่ 'receivedMessage'
  receivedMessage: string = "";
  receingMessage(message: string): void{
    this.receivedMessage = message;
  }
}
