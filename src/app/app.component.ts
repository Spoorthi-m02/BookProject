import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReviewformcomponentComponent } from './reviewformcomponent/reviewformcomponent.component';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReviewformcomponentComponent,NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stars';
  
}
