import { Component, OnChanges, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

  @Input() nome:string = '';

  constructor() { }

  // constructor() {
  //   console.log(`constructor ${this.nome}`);
  // }

  // ngOnInit(): void {
  //   console.log(`ngOnInit ${this.nome}`);
  // }

  // ngOnChanges(): void {
  //   console.log(`ngOnChanges ${this.nome}`);
  // }


}
