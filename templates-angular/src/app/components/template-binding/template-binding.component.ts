import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.css'
})
export class TemplateBindingComponent {
  public name: string = 'Larissa';
  public age: number = 21;

  public isDisabled: boolean = false;
  public imagePath: string = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

  public isTextDecoration = this.age < 25 ? 'underline' : 'none';

  public sum(a: number, b:number){
    return a + b
  }

  public birthday(){
    this.age++;
  }

  public onKeyDown(event: Event){
    return console.log(event)
  }

}
