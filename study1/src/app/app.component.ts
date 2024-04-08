import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import { CrewComponent } from './crew/crew.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, CrewComponent],
  // template: '<h1>urangotan</h1>',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'study1';
}
