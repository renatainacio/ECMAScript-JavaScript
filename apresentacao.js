/*
Brendan Eich fundou JavaScript em 1995, quando trabalhava na empresa Netscape,
que era a empresa criadora no navegador mais popular do do início dos anos 90.
Inicialmente a linguagem foi desenvolvida com o nome Mocha, depois lançcada como 
LiveScript, e alguns meses depois rebatizada JavaScript, aproveitando o sucesso do Java,
que era a linguagem do momento. 

A Microsoft, vendo tudo isso que estava acontecendo com o JavaScript, 
percebeu que era uma boa ideia e resolveu seguir um caminho paralelo 
ao JavaScript e criou o JScript para rodar somente no Internet Explorer.

No ano de 1996, com o objetivo de padronizar a linguagem recém criada,
a Netscape decidiu juntar o JavaScript à ECMA International (Associação 
Europeia dos Fabricantes de Computadores), que é uma associação que realiza
a especificação ou padronização de sistemas da informação.

Com essa junção, foi criado um novo padrão de linguagem, que foi batizado com
a união das palavras “ECMA” e “JavaScript”, resultando no nome “ECMAScript”.
ECMAScript é o nome oficial da tecnologia. Entretanto, o nome JavaScript acabou
se popularizando na comunidade dev, e até hoje a linguagem é mais conhecida por esse nome.
Hoje, ECMAScript é utilizado mais para falar das especificações e JavaScript para se referir
à linguagem.
*/


/*
ES6 - Versão lançada em 2015, trouxe diversas novidades para a linguagem, como Default Parameters,
Template Strings, Destructuring, entre outros
*/

/* Default Parameters */
/* a partir do ES6, é possível definir parâmetros padrão em funções para o caso de não ser passado o argumento*/

// console.log("Exemplo Default Parameters")

// function multiplyOrDouble(x, y = 2) {
//     return x * y;
//   }
// console.log("multiplyOrDouble(5, 5): " + multiplyOrDouble(5, 5));
// console.log("multiplyOrDouble(5, 2): " + multiplyOrDouble(5, 2));
// console.log("multiplyOrDouble(5): " + multiplyOrDouble(5));

// console.log("\n------------------------------------------------------------------------------------------\n\n")

/* Template Strings */
/* Permite strings com múltiplas linhas e interpolação de variáveis e expressões */

// console.log("Exemplo Template Strings")

// let nome = "Renata";
// let artigo = "a";
// let idade = 31;
// let profissao = "desenvolvedora";

// let texto = "Olá! Eu sou  " + artigo + " " + nome + " " + "e \ntenho " + idade + " anos\n. Sou " + profissao;
// let texto2 = `Olá! eu sou ${artigo} ${nome} e
// tenho ${idade} anos.
// Sou ${profissao}`;

// console.log(texto);
// console.log(texto2);

// console.log("\n------------------------------------------------------------------------------------------\n\n")

/* Destructuring */
/* Permite a decomposição de um array ou objeto em variáveis distintas */

// console.log("Exemplo Destructuring")

// const diasDaSemana = ["segunda" , "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];

// [seg, ter, qua, qui, sex, ...fds] = ["segunda" , "terça", "quarta", "quinta", "sexta", "sabado", "domingo"];

// console.log(fds);


// const produto = {
//     nomeProduto : "banana",
//     preco : "R$1,20",
//     valorEnergetico : "100kcal",
//     quantidadeDisponivel: 200
// }

// const {nomeProduto, ...outros} = produto;
// console.log(nomeProduto);
// console.log(outros);

// console.log("\n------------------------------------------------------------------------------------------\n\n")


/* Strict Mode */
/* Strict Mode é um modeo que deixa a semântica do JavaScript mais rigorosa, tornando o código mais fácil de debugar. */
/* Alguns erros silenciosos no modo normal são acusados no Strict Mode, podendo fazer com que programas rodem mais rápido no Strict Mode */
/* O strict mode pode ser aplicado no código todo ou em funções individualmente, dependendo de onde ele for declarado */

// console.log("Exemplo Strict Mode")

// console.log("\nSem Strict Mode")

// function semStrict()
// {
//     let idade;
//     idad = 18;
//     console.log(idad);
// }
// semStrict();


// console.log("\nCom Strict Mode")
// function comStrict()
// {
//     "use strict";
//     let tamanho;
//     tamano = 48;
//     console.log(tamano);
// }
// comStrict();

// console.log("\n------------------------------------------------------------------------------------------\n\n")

/* Hoisting */
/* Em tradução livre, "Elevação" */
/* O JavaScript vê declarações de variáveis como se elas estivessem no início do código! */
/* Hoisting não é uma prática recomendada pois se a pessoa não souber muito bem o que está fazendo, vai ter bugs */

// console.log("Exemplo Hoisting");
// console.log("caso var");

// function hoistingVar() {
//     var x = 5;
//     console.log(x);
//     console.log(y);
//     var y = 10;
// }
// hoistingVar();

// console.log("\ncaso let");

// function hoistingLet() {
//     let x = 5;
//     console.log(x);
//     console.log(y);
//     //let y = 10;
// }
// hoistingLet();

// console.log("\ncaso const");

// function hoistingConst() {
//     const x = 5;
//     console.log(x);
//     console.log(y);
//     //const y = 10;
// }
// hoistingConst();


/* var, let e const */
/* Variáveis tipo var: podem ser redeclaradas e atualizadas */
/* Variáveis tipo let: podem ser atualizadas mas não redeclaradas */
/* Variáveis tipo const: não podem ser redeclaradas nem atualizadas */

// console.log("\nExemplo var, let, const");

// var var1 = 1;
// let let1 = 1;
// const const1 = 1;

/* Redeclarando as variáveis */
// var var1 = 7;
// let let1 = 7;
// const const1 = 7;

/* Atualizando as variáveis */
// var1 = 7;
// let1 = 7;
// const1 = 7;

/* Usar var não é boa prática pois você pode acabar redeclarando uma variável sem querer e perder a informação que a antiga guardava"


/* for, forEach, for..of */

// const arr = [2002, 2006, 2010, 2014, 2018, 2022];

// console.log("\nExemplo for");

// for(let i = 0; i < arr.length; i++)
// {
//     console.log("posição: " + i + ", valor: " + arr[i]);
// }

/* O for permite acessar facilmente tanto a posição quanto o array. */

// console.log("\nExemplo forEach");

// arr.forEach((v, i) => console.log("posição: " + i + ", valor: " + v))

/* O forEach também permite acessar facilmente tanto a posição quanto o array e permite a utilização de arrow functions. É um método do próprio array. */

// console.log("\nExemplo for..of");
// for (const v of arr) {
//     console.log(v);
// }
/* Não é indicado para casos em que queremos acessar a posição do array */