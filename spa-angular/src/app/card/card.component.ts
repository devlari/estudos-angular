import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = "superuser";


  constructor() {
    this.produtos = ['Produto 1', 'Produto 2', 'Produto 3'];
  }

  ngOnInit(): void {
  }

  adicionar(){
    this.produtos.push('Produto ' + (this.produtos.length + 1));
  }

  remover(i: number){
    this.produtos.splice(i, 1);
  }

}
