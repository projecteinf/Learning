import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LightswitchComponent } from './Demos/Components/demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LightswitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Unit Testing Angular App';
}
