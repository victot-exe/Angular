import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = []
  menuType:string = 'user '

  constructor() {
    this.produtos = [
      'mouse',
      'teclado',
      'cabo',
      'font'
    ]
  }

  ngOnInit(): void {
  }

  adicionar():void{
    this.produtos.push('coisa')
  }

  remover(index:number){
    this.produtos.splice(index, 1)
  }

}
