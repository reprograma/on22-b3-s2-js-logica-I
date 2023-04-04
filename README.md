<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Lógica I

Turma Online 22 - B3  | Back-end | Semana 2 | 2023 | Professora Manuelly Suzik

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### **Resumo**
O que veremos na aula de hoje?

* [O que é Javascript](#o-que-é-javascript)
* [Variáveis](#variáveis)
* [Tipos de dados](#tipos-de-dados)
* [Operadores](#operadores)
  
<br>

# **Conteúdo**
* [O que é Javascript](#o-que-é-javascript)
  * [Javascript não é Java](#introdução-javascript-não-é-java)
  * [Por que Javascript](#por-que-javascript)
  * [NodeJS](#nodejs)
* [Variáveis](#variáveis)
  *  [Declaração](#declaração)
  *  [Inicialização](#inicialização)
  *  [Let e Var](#let-e-var)
  *  [Const](#const)
  *  [Palavras Reservadas](#palavras-reservadas)
  *  [Case Sensitive](#%EF%B8%8F%EF%B8%8F%EF%B8%8Fcase-sensitive-%EF%B8%8F%EF%B8%8F%EF%B8%8F)
  *  [Clean Code: Variáveis](#clean-code-variáveis)
* [Tipos de dados](#tipos-de-dados)
  * [String](#string)
  * [Number](#number)
  * [Boolean](#boolean)
  * [Null](#null)
  * [Undefined](#undefined)
  * [Tipo Object](#tipo-object)
* [Operadores](#operadores)
  * [Aritméticos](#operadores-aritméticos)
  * [Atribuição](#operadores-de-atribuição)
  * [Comparação](#operadores-de-comparação)
  * [Lógico](#operadores-lógicos)

## O que é Javascript
 <br>
 
### Introdução: Javascript não é Java
  ( Penso eu que ) Muitas de vocês provavelmente já ouviram falar da linguagem de programação JAVA pois essa linguagem é muito famosa no mundo da programação , a boa notícia é que: é completamente normal - até entre pessoas que já conhecem um pouco de programação - que algumas pessoas não saibam a diferença entre essas duas linguagens, vou adiantar pra vocês que JAVA e JAVASCRIPT são linguagens muito diferentes, tanto na sua syntaxe ( a forma como são escritas ) quanto em suas finalidades.
  
  Ao longo de sua caminhada você saberá ver a diferença entre elas, mas se ficou curiosa e não quer esperar pode [acessar aqui](https://www.java.com/pt-BR/download/help/java_javascript_pt-br.html#:~:text=Diferenças-chave%20entre%20o%20Java,executado%20apenas%20em%20um%20browser.) e ver as principais diferenças entre as duas.
  <br>

### Por que Javascript?

O Javascript é uma linguagem dinâmica e fracamente tipada. Isso significa que a linguagem não **impõe** regras muito fortes quando você está utilizando ela, além de que ela tem diversas funções nativas para manipular estruturas de dados, permitindo assim que você tenha pouco esforço para começar a codar coisas simples com ela. A linguagem fará boa parte do trabalho pesado pra você.

  É bom lembrar nasceu da necessidade de tornar as páginas web mais dinâmicas, e desde então cresceu tanto que superou enormemente as expectativas até se tornar a maioral para as aplicações client-side ( famoso front-end ).

  Não apenas no front-end mas javascript também mostrou ser uma ótima alternativa também em aplicações server-side ( back-end ), e por isso é considerada a **Número 1** na lista das linguagens de programação mais indicadas para a web - [segundo a geeksforgeeks](https://www.geeksforgeeks.org/10-backend-programming-languages-for-web-developers-in-2022/).

  Javascript tem uma comunidade muito ativa e numerosa, isso faz com que seja muito fácil encontrar diversos conteúdos para melhorar seu nível de código, além de várias bibliotecas pra colocar em seus projetos. O javascript tem uma linha de aprendizado muito boa para quem está começando pois conta com documentações muito claras e detalhadas das funcionalidades nativas da linguagem.

  Para quem estiver interessado em começar a aprender essa linguagem as notícias não poderiam ser melhores afinal hoje é muito comum ver diversas empresas - nacionais e internacionais - que estão em busca de bons desenvolvedores Javascript para criar e dar manutenção a sistemas criados para a web. Algumas empresas que talvez vocês conheçam utilizam Javascript: Netflix, Uber e LinkedIn.
  <br>

### NodeJS
  Vamos ser simples: O NodeJS executa códigos javascript fora de um navegador.
  
  Como o Javascript foi escrito - em sua natureza - para a WEB os navegadores tem um mecanismo que é capaz de ler javascript e executar. Se você tirar essa peça do navegador você terá uma **JS engine** que é a peça principal para o NodeJS funcionar. Essa ilustração talvez possa te ajudar ~~ou não~~:

  ![nodejs](/assets/standalone-js.png)
  
Baixe o NODEJS para seu computador [aqui](https://nodejs.org/en/download/)

### **Console**

  Como normalmente o navegador é responsável por "exibir" a execução de códigos Javascript contidos nas páginas web. Se o NODEJS está fora do navegador, como conseguimos observar as saídas de execução de nossos códigos Javascript? A resposta é: Pelo console.

### Console.log
~~É a principal ferramenta de debug de todo desenvolvidor javascript~~

A função nativa do Javascript `console.log()` é bastante útil para exibir a saída de dados ou para apresentar mensagens de erro no console do seu navegador ou no seu terminal( no caso do NodeJS ).

```Javascript
console.log("Essa mensagem aparecerá no console do navegador, ou no console do computador onde seu arquivo JS estará sendo executado")
```

## Variáveis
 
### Declaração
 Declarar uma variável faz com que o NodeJS diga ao nosso computador separar um espaço na memória. Para isso usamos a palavra reservada do Javascript: `var` assim, o computador estará pronto para separar um espaço na memória e dar um nome a ela.

 Veja o exemplo abaixo:

 ```Javascript
 let nomeDaMinhaVariavel
 ```

 Isso é o suficiente para declararmos um espaço na memória que se chamará `nomeDaMinhaVariavel`. Podemos usar a analogia de que se a memória do computador fosse uma gaveta, o nome da variável seria a etiqueta. Dessa forma sempre que quiséssemos **recuperar** esse valor só precisaríamos ir até a gaveta com aquela etiqueta.

### Inicialização
O valor daquele espaço só será preenchido quando inicializarmos aquela variável.

Veja o exemplo de uma variável inicializada:

 ```Javascript
 let nomeDaMinhaVariavel = "Aprender com reprograma é bom demais"
 ```

 Agora sim, eu acabei de pegar uma frase - vamos chamar de string de agora em diante, ta? - e jogar dentro da minha gaveta com a etiqueta `nomeDaMinhaVariável`
 

 ### let e var
Existe duas formas de declarar variáveis no Javascript, uma é utilizando a palavra reservada `let` como apresentei lá em cima, porém, existe também a outra forma de declarar uma variável utilizando a palavra reservada `var`.

Mesmo podendo declarar das duas formas, usar `var` pode provocar alguns comportamentos inesperados então até que fique claro a diferença entre elas , por enquanto, vamos priorizar usar `let`.

O termo `variável` significa que o valor ou tipo que será armazenado na memória pode sofrer alterações de tipo e valor longo da execução do código.

Exemplo de variável:

  **Sabemos que desde o começo de 2023 o preço da picanha vem diminuindo nos supermercados do nosso país. Como esse valor será variável e precisará ser ajustado poderíamos facilmente usa-lo como uma variável**

Usaríamos essa declaração para referir ao preço da picanha:
```Javascript
let valorDaPicanha = 29.00
```
É importante saber que: Ao declarar variáveis você pode escolher o nome que quiser pra elas, mas o Javascript não vai permitir que você:

- Crie variáveis que começam com números
- Variáveis com espaço.

Ex: `var Esse nome` não é uma variável válida

### Const
Como na matemática, na programação também temos valores que podem mudar ( variáveis ) e valores constantes, mas no Javascript para declarar um valor que não sofrerá alteração temos a palavra reservada `const`.

Aqui o exemplo de **declaração e inicialização** de uma constante:
```Javascript
const issoEUmaConstante = true
```

Como exemplo de uma constante:

  **O valor de π (pi) é uma constante. Para utilizar esse valor em nosso código poderíamos armazena-lo como uma constante.**

Então para registrar esse valor usaríamos uma constante, dessa forma:
```Javascript
const valorDePi = 3.14
```

Ao longo de seu aprendizado você saberá quando usar uma constante ou uma variáviável.

### Palavras reservadas
O Javascript tem um dicionário de palavras especiais que tem comportamentos específicos quando o interpretador as lê. Já vimos que o `var`,`let` e `const` são palavras do Javascript para declarar variáveis e constantes. O mesmo acontece para outras palavras , como por exemplo a palavra `function` e etc...

Existem pelo menos uma centena de palavras reservadas que o javascript utiliza, essas palavras recebem o nome de **palavras reservadas** pois elas são utilizadas pela linguagem para declarar comportamentos que serão lidos pelo interpretador e por esse motivo elas não podem ser usadas como nomes de variáveis.

A IDE irá sempre indicar quando você usar uma palavra reservada então não precisa se precoupar em decorar todas.


### ⚠️⚠️⚠️Case Sensitive ⚠️⚠️⚠️
 É muito importante entender que o interpretador Javascript leva muito a sério a declaração de variável, por isso , se você decide declarar uma variável com um nome, fique certo de que sempre usará **O MESMO NOME** spara recuperar o valor daquela variável

 Na maioria das vezes, ignorar essa regra te deixará um pouco frustrada em frente a tela do seu computador durante horas tentando entender o que você errou até perceber que colocou uma maiúscula no lugar de uma minúscula e etc...

 **POR ISSO PRESTE ATENÇÃO:**
```Javascript
var EsseNome != esseNome != essenome != ESSENOME ...
```

Javascript ser uma linguagem Case sensitive significa que o Javascript vai registrar a etique respeitando religiosamente a forma como você declarou.

### Clean Code: Variáveis
Programar é sobre empatia com as pessoas e até o seu EU do futuro. Escrever código nem sempre é sobre fazer um código que funciona mas ter consciência que esse seu código deve ser capaz de evoluir e ser corrigido facilmente pelas pessoas que passarem por ele.

O conceito de "Código Limpo" tenta indicar algumas **boas práticas** na hora que você estiver escrevendo seu código visando a compreensão, manutenção e organização dele.

Vamos ver o que o clean code nos ensina a respeito de variáveis:

- Sempre use nomes que declaram o que sua variável armazena
- Evite usar caracteres especiais (^,ç,~,´...) nos nomes de suas variáveis.
- Variáveis normalmente são escritas em cammel case e snake case.
  - cammelCase: Inicia com letra minúscula e substituí o espaço por uma letra em caixa alta. Usada como nome de variável ou métodos no javascript.
  - snake_case: todas as letras minusculas, o espaço é substituído por underline. Pode ser usada como nome de variável e de métodos também, comum no Python.
  - PascalCase: O mesmo que cammelCase mas inicia com letra maiúscula. Usada como nome de classes.
  - MACRO_CASE: Parecido com o snake case mas todas são maiúsculas. Normalmente usada como variáveis/constantes globais.
- Tente evitar nomes que podem ser mal interpretados ou potencialmente confusos. Usar abreviações é um no-no. Evite sempre.
- Evite usar variáveis muito parecidas umas com as outras, isso pode confundir você na hora de recuperar o valor delas ao longo do código.
- Crie variáveis que sejam fáceis de buscar.
- O javascript não permite que você escreva variáveis que comecem com números.


## Tipos de dados

### **String**

O tipo de dados String é usado para representar sequências de caracteres. Strings são declaradas usando aspas simples ou duplas. Por exemplo:


```javascript
let nome = "Maria";
let sobrenome = 'Silva';
```
### **Number**

O tipo de dados Number é usado para representar números, tanto inteiros quanto decimais. Por exemplo:


```javascript
let idade = 20;
let altura = 1.75;
```
### **Boolean**

O tipo de dados Boolean é usado para representar valores verdadeiros ou falsos. Por exemplo:


```javascript
let ativado = true;
let desativado = false;
```
### **Null**

O tipo de dados Null é usado para representar um valor vazio ou nulo. Por exemplo:

```Javascript
let variavel = null;
```
### **Undefined**

O tipo de dados Undefined é usado para representar uma variável que ainda não foi atribuída a um valor. Por exemplo:
```Javascript
let variavel;
console.log(variavel); // undefined
```

### tipo Object
O tipo de dados Object é usado para representar objetos, que podem conter propriedades com diferentes tipos diferentes. Por exemplo:

```Javascript
let pessoa = {
  nome: "Maria",
  idade: 20,
  altura: 1.75,
};
```
**typeof**

O typeof é um operador em JavaScript que permite que você verifique o tipo de um valor. Ele retorna o tipo da variável em forma de string.

Por exemplo, se você tiver uma variável x e quiser verificar o tipo dela, você pode usar o typeof da seguinte forma:

```javascript
let x = 10;
console.log(typeof x); // saída: "number"
```
Neste caso, o typeof retorna a string "number", indicando que o valor da variável x é do tipo número.

### Operadores
JavaScript tem muitos operadores diferentes que você pode usar para manipular e comparar valores. Aqui estão alguns dos operadores mais comuns em JavaScript:

### Operadores Aritméticos
   
Os operadores aritméticos são usados para realizar operações matemáticas em valores numéricos, incluindo adição (+), subtração (-), multiplicação (*), divisão (/), resto da divisão (%), incremento (++) e decremento (--).

  
```Javascript
let a = 10;
let b = 5;

console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0

```
### Operadores de Atribuição

Os operadores de atribuição são usados para atribuir valores a variáveis. Eles incluem o sinal de igual (=), bem como operadores compostos, como adição e atribuição (+=), subtração e atribuição (-=), multiplicação e atribuição (*=), divisão e atribuição (/=) e resto da divisão e atribuição (%=).

Exemplo:

```javascript
let a = 10;

a += 5; // Equivalente a: a = a + 5;
console.log(a); // 15

a -= 5; // Equivalente a: a = a - 5;
console.log(a); // 10

a *= 2; // Equivalente a: a = a * 2;
console.log(a); // 20

a /= 4; // Equivalente a: a = a / 4;
console.log(a); // 5

a %= 3; // Equivalente a: a = a % 3;
console.log(a); // 2
```


### Operadores de Comparação

Os operadores de comparação são usados para comparar valores e retornar verdadeiro ou falso. 

Eles incluem:
  - igual (==)
  - estritamente igual (===),
  - diferente (!= ou !==) estritamente diferente
  - maior que (>)
  - menor que (<)
  - maior ou igual (>=)
  - menor ou igual (<=).

```Javascript
let x = 5;
let y = "5";

console.log(x == y); // true
console.log(x === y); // false
console.log(x != y); // false
console.log(x !== y); // true
console.log(x > y); // false
console.log(x < y); // false
console.log(x >= y); // true
console.log(x <= y); // true

```
### Operadores Lógicos

Os operadores lógicos são usados para avaliar expressões lógicas e retornar verdadeiro ou falso. Eles incluem e lógico (&&), ou lógico (||) e negação lógica (!).


```Javascript
let x = 5;
let y = 2;
let z = 8;

console.log(x > y && x < z); // true
console.log(x > y || x > z); // true
console.log(!(x > y)); // false

```
  ***
### Exercícios 
* [Exercicio para sala](https://github.com/mflilian/repo-example/tree/main/exercicios/para-sala)
* [Exercicio para casa](https://github.com/mflilian/repo-example/tree/main/exercicios/para-casa)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

