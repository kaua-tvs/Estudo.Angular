var minhaVar = 'minha var';

/*js Puro*/
function minhaFuncao(x, y){
  return x + y;
}

/*ecmaScript, quando usado o ecmaSript precisamos de um transpailer : compilar o codigo do ecmaScript 2015 em js puro*/
/*ES 6 || ES 2015*/
let num = 2; /*let é ecmaScript*/
const PI = 3.14;/*const é ecmaScript*/

var numeros = [1,2,3];
numeros.map(function(valor){
  return valor*2;
});

numeros.map(valor => valor * 2); /*arrow functions*/

class Matematica {
  soma(x, y){
    return x + y;
  }
} /*Isso mudara quando for fazer um build, pois quando for no main.js ficara do jeito diferente por causa do javaScript puro*/

//Ficará assim :

// var Matematica =
// /*#__PURE__*/
// function () {
//   function Matematica() {
//     _classCallCheck(this, Matematica);
//   }

//   _createClass(Matematica, [{
//     key: "soma",
//     value: function soma(x, y) {
//       return x + y;
//     }
//   }]);

//   return Matematica;
// }();



//definição de tipo de classe 
//1° exemplo:
//var n1 = 'asd';
//n1 = 4; // no typeScript tem como tipar a variavel
 
//2° Exemplo:
//var n2: string = 'asd';
//n2 = 4;

//3° Exemplo:
//var n3: any = 'asd'; // para nao tipar ou pode deixar sem o ANY
//n3 = 4;