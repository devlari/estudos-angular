import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateBindingComponent } from './components/template-binding/template-binding.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TemplateBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'templates-angular';
}
