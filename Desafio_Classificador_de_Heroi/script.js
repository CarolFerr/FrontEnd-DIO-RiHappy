let XP = 0;
let nomeDoHeroi = "Ana";

const niveis = [
    {min: -Infinity, max: 0, nome: "SEM PONTUAÇÃO"},
    { min: 1, max: 1000, nome: "FERRO" },
    { min: 1001, max: 2000, nome: "BRONZE" },
    { min: 2001, max: 5000, nome: "PRATA" },
    { min: 5001, max: 7000, nome: "OURO" },
    { min: 7001, max: 8000, nome: "PLATINA" },
    { min: 8001, max: 9000, nome: "ASCENDENTE" },
    { min: 9001, max: 10000, nome: "IMORTAL" },
    { min: 10001, max: Infinity, nome: "RADIANTE" }
];

for (let pontuacao = 0; pontuacao < niveis.length; pontuacao++){
    if(XP >= niveis[pontuacao].min && XP <= niveis[pontuacao].max) {
        nivelHeroi = niveis[pontuacao].nome;
        break;
    }
}
console.log(`O Heroi ${nomeDoHeroi} está no nível ${nivelHeroi}`);


