import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  estilo: string = 'disable'
  corFundo: string = 'yellow'
  corDaFonte: string = 'blue'
  item:string = ''
  lista:string[] = []
  isEnableBlock:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  trocar():void{
    if(this.estilo === 'disable'){
      this.estilo = 'enable'
    }else{
      this.estilo = 'disable'
    }
  }
  adicionarLista(){
    this.lista.push(this.item)
    this.item = ''
  }

}
