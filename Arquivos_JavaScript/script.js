// VARIAVEIS
console.log("Digite o nome do seu Jogador:")
let nickname = "Maria mestre do Pikachu";
console.log("Bem Vindo " + nickname);
console.log(nickname + " entrou no servidor");

// CONSTANTES
const noticacao = "Pokemon Go diz: ";
console.log(noticacao + " tem um novo pokemon na região");
console.log(noticacao + " você foi derrotado por um líder");

// VETORES E MATRIZES
let pokemon = ["Pikachu", "Charmander", "Bulbassaur"];
pokemon.pop() // remove o ultimo elemento
pokemon.shift()
console.log(pokemon)
console.log(pokemon.length); // mostra a quantidade de itens dentro do vetor
console.log(pokemon[1]); // imprime o elemento na posição 1
console.log(pokemon[2]); // imprime o elemento na posição 2

let timePokemon = [
    ["Picachu", "M", 1],
    ["Charmander", "F", 2],
    ["Bulbassaur", "M", 3]
];

console.log(timePokemon[0][0] + timePokemon[0][2]);

// ESTRUTURAS CONDICIONAIS
//IF
let ehLigado = true;
if (ehLigado){
    console.log("Executou o comando");
}

//IF/ELSE
let possuiOvos = true;
let comprar = "";
if(possuiOvos){
    comprar = ["Leite", "fermento para bolo", "chantilly", "chocolate em pó", "cereja"];
}
else{
    console.log("Passou na sessão de congelados");
    comprar = "Torta de Chocolate";
}
console.log(`itens comprados: ${comprar}`);

// IF/ELSE UTILIZANDO FILTER
let temOvos = false;
let itensComprados = [];
let comprarei = ["Leite", "fermento para bolo", "chantilly", "chocolate em pó", "cereja"];
if (temOvos) {
    itensComprados = comprarei.filter(item => item);
}
else {
    console.log("Passou na sessão de congelados");
    itensComprados = "Torta de Chocolate";
}

console.log(`itens comprados: ${itensComprados}`);

// IF, ELSE/IF, ELSE
let nivelDeFome = '1';
if(nivelDeFome === 1 ){
    console.log("Pouca Fome, tomar uma Vitamina!");
}else if(nivelDeFome === 2){
    console.log("Muita Fome, comer uma Lasanha");
}else{
    console.log("Morrendo de Fome, vamos logo comer alguma coisa!");
}

// SWITCH CASE
let fruta = "Banana";

switch(fruta){
    case "Laranja": 
        console.log("Suco de Laranja");
        break;
    case  "Banana":
    case "Morango":
        console.log("Vitamina com chocolate e amendoas");
        break;
    case "Maça":
        console.log("Tarte Tatin");
        break;
    default:
        console.log("Comer Alguma fruta!");
}

// FOR
for(let contador = 0; contador <= 10; contador++) {
    console.log(contador);
}

let pontosDeVida = 0;

for(let i = 0; i < 11; i++){
    pontosDeVida += 1;
    console.log("Tomou poção mágica " + i);
}
console.log(pontosDeVida + " Totais ");

// WHILE
let contador = 0;
while(contador < 3){
    console.log("Olá, Mundo!");
    contador = contador + 1;
}

// DO WHILE
let i = 0; // se for igual a 3 será executado 1 vez
do {
    console.log("Bora, estudar.");
    i ++
}while(i < 3);
