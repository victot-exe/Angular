# Angular
* Framework baseado em JS
* TS como linguagem principal
* SPA é o foco -> single pages aplication(todas as telas em uma mas depende do que for escolhido não são todos os exibidos)
* Components são o foco da arquitetura
* Estutura organizada
* Sistema de tooling muito rico(CLI, HTTP, Router...), tem varias ferramentas nativas  

## Camadas de WebApp
* Componentes (reaproveitamento de código - html css)
* Gerenciamento de estado (on/off)
* Roteamento (qual componete exibir dependendo da rota)
* Renderização (exibido na tela)  
### Componentes
* Elemento visual, customizável e reutilizável (card feito)
* Permite separar e organizar melhor o código e é feito de maneira dinâmica  
* Peças de lego isoladas e depois junta para montar a página
### Gerenciamento de estados _States_
* Facilita a comunicação entre componentes
* Sincronização
* Ex.: (Site de compras carrinho)
* Lógica entre componentes
* Disponível x Indisponível (Botão verde para cinza)
* Ferramentas de gerenciamento de estado:
    _Flux_  
    _Redux_  
    _Context API_  
    _Recoil_  
    _Storeon_  
    _Vuex_  
    _NGRX(ângular)_  
    _NGXS(ângular)_

### Roteamento _routes_ ou _routing & navigation_
* Forma de mudar os componentes da página sem dar o refresh
* Uma página com varios componentes que são exibidos de acordo com a rota
* Gerenciamento de URL -> geralmente muda só o final
* Define quais componentes devem ser renderizados
* meuapp/login -> meuapp/home => Mudando os componentes e a url
* Exemplos de bibliotecas
    _Histoy API_
    _React-Router_
    _Vue-Router_
    _Angular RoutingModule_

### Renderização _Render_
* Decide a melhor de acessar e entregar o conteúdo para o browser
* Entrega tudo pronto para o browser
* 3 Estratégias de _render_
1. **100% server**
* Entrega o documento html pronto para o cliente  

2. **50/50**
* Meio a meio client/ server  
  
3. **100% client**
* Tudo é montado dinamicamente no client **(ângular e react)**
* Pobre em SO (aparecer no rank do google)

[Baixe o Angular](angular.io)  

## Entendendo os arquivos
* /src -> Pasta raiz do projeto
* index.html
* polyfills.ts -> aumenta a compatibilidade com os navegadores
* style.css
* /src/app -> É onde ficam os arquivos da app na web
* importar arquivos no app.module.ts e declarar a classe no declarations

## Styles
* scooped (escopo local do componente) sempre sobrepõe o escopo global.  
### Botões de chamada dinâmica
* _camada de gerenciamento de estado_
* componente pai = componente principal que tem outros componentes principais.
* o import `input` é um decorator para fazer pegar de outro local a classe. label ={{variável}} ou [label] = "variavel"
* para escolher o que vai ser escrito label = "o que quer"

## Binding Syntax (faz as informações entre os componentes
### Data binding - Associação de dados
* interpolaçãob -> ~{{valor}}~ -> TS => HTML 
* property binding -> ~[propriedade]="valor"~ TS => HTML 
* event binding -> ~(evento)="Handler"~ HTML => TS
* two way data binding -> [(ngModel)]="propriedade" HTML <=> TS

### Event binding - Associação de eventos
_associa uma função_.  
~~~
<Button (evento)="funtion">blabla</Button>
~~~
-> eventos são os padrões do HTML (Mozilla)[colocar link]  
* Parâmetro -> criar a função com o parâmetro e faz o tratamento na funtion

### Two way data binding - Comunicação dos dois lados
