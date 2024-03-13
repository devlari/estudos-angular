import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atributos',
  templateUrl: './atributos.component.html',
  styleUrls: ['./atributos.component.css']
})
export class AtributosComponent implements OnInit {

  estilo: string = "disable";
  corFundo: string = "red";
  item: string = ""
  lista: string[] = []

  constructor() { }

  ngOnInit(): void {
  }

  trocar() {
    this.estilo = this.estilo == "disable" ? "enable" : "disable";
  }

  adicionarLista() {
    this.lista.push(this.item)
    this.item = ""
  }

}
