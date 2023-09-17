# Diretivas
Maneira do angular manipular a DOM dinamicamente

## Diretivas de atributo
Alteram comportamente de um elemento, comnponente ou diretiva  
* NgClass - Adiciona ou remove um conjunto de classes CSS
* NgStyle - Adiciona ou remove um conjunto de estilos ao HTML
* NgModel - Adiciona vinculação de dados bidirecional a um elemento de um formulário `[()]` precisa importar no import do module

## Diretivas estruturais
Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela
* NgIf - condicional que verifica se o modelo deve ou não ser exibido (pode ter uma estrutura com else)
* NgFor - repete um elemento para cara item em uma lista
~~~
<ul>
  <li *ngFor="let p of lista"> {{p}} </li>
</ul>
~~~
* NgSwitch - utilizado para alternar entre comportamentos alternativos
* NgTemplate - uma tag no html que por padrão vem com `ngIf = "false"`
* NgContent - uma tag html que pega conteudo de fora `<ng-content select="p"></ng-content>`