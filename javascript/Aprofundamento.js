//faz a transformação em int automatica 
console.log("10"/ 2);

//faz 102, concatenação
console.log("10"+ 2);

//não funciona
console.log("10,2"/ 2);

//não preciso
console.log(0.1 + 0.7);


Number(null) //0
null == 0 //false
null < 1 //true
typeof(NaN) //number


var nome = 'Leticia';
var idade = 17;
var semdefinicao;
var nula = null;


const nota = 0;
const sobrenome = 'zaneti';
const naodefinida;


let x = 3;
let jogo = 'habbo';
let icia

//retorna certo pois é var global
if (true) {
    var sair = 'roupa de sair';
}
console.log(sair);

//erro pois é let limitado ao escopo
if (true) {
    let dormir = 'pijamas';
}

console.log(dormir);


//errado
console.log(banana);
var banana = 'nanica';

//certo
var banana = 'nanica';
console.log(banana);


pessoa.nome

var meuCarro = new Object();
meuCarro.fabricacao = 'ford';
meuCarro.modelo = 'Mustang';
meuCarro.ano = 1969;

console.log(this.document === document);
console.log(this === window);


this.a = 27;
console.log(window.a);


//Navegador
function f1(){
    return this;
}
  f1() === window; // true

function f2(){
   "use strict"; 
   return this;
}
 f2() === undefined; // true


 // função normal
let dobro = function (a) {
    return 2 * a
}
// função arrow (=>) com return explicito
dobro = (a) => {
   return 2 * a
}
// função arrow (=>) com return implicito
dobro = a => 2 * a // return implicito

// função arrow sem parametro
ola = () => 'Olá'

// função arrow com apenas um parametro mas que pode ser ignorado
ola = _ => 'Olá'
// _ não é ausencia de parametro, é um parametro ignoravel.


var frutas = ['Maçã', 'Banana'];
console.log(frutas.length);
// 2

var primeiro = frutas[0];
console.log(primeiro);
// Maçã

var ultimo = frutas[frutas.length - 1];
console.log(ultimo);
// Banana
 
console.log([1,2,3]+[4,5,6])
// 1, 2, 34, 5, 6


class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }
}

class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    falar() {
      console.log(this.nome + ' emite um barulho.');
    }
}
  
class Cachorro extends Animal {
    falar() {
      console.log(this.nome + ' latidos.');
    }
}
  
let cachorro = new Cachorro('Mat');
cachorro.falar();


function isBigEnough(value) {
    return value >= 10;
  }
  
  var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtrado é [12, 130, 44]
  
  console.log(filtered);
  
  var novaArray = arrayOriginal.filter(function(valorAtual, indice, varArray), thisArgumento)
  
  //exemplo filtra numeros pares
  var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function buscarNumerosPares (value) {
      if (value % 2 == 0) 
      return value;
  }
  var numerosPares = numeros.filter(buscarNumerosPares);
  console.log(numerosPares);
  
  //exemplo mapeia e dobra
  var numbers = [1, 4, 9];
  var doubles = numbers.map(function(num) {
    return num * 2;
  });
  console.log(numbers); //[1, 4, 9]
  console.log(doubles); //[2, 8, 18]
  
  //traduz fahrenheit para celsius
  var fahrenheit = [0, 32, 45, 46, 47, 91, 93, 121];
  var celcius = fahrenheit.map(function(item) {
  return Math.round((item - 32)*5/9);
  });
  console.log(celcius);
  
  //somatoria
  var valores = [1.5, 2, 4, 10];
  var somatoria = valores.reduce(function(total, item) {
  return total + item;
  }, 0);
  console.log(somatoria);
  // → 17.5
  
  //média
  var valores = [1.5, 2, 4, 10];
  var media = valores.reduce((total, item, indice, array) => {
  total += item;
  if (indice === array.length - 1) {
  return total / array.length;
  }
  return total;
  }, 0);
  console.log(media);
  // → 4.375