//Variáveis armazenando o nome do herói, o valor do xp e o nivel (atribuído dependendo do valor do xp)
let nome = "Sombra"
let xp = 3591
let nivel

//(SOLUÇÃO 1) - Usando estruturas condicionais if, else if, else
if (xp<=1000){
    nivel = "Ferro"
} else if (xp>=1001 && xp<=2000){
    nivel = "Bronze"
} else if (xp>=2001 && xp<=5000){
    nivel = "Prata"
} else if (xp>=5001 && xp<=7000){
    nivel = "Ouro"
} else if (xp>=7001 && xp<=8000){
    nivel = "Platina"
} else if (xp>=8001 && xp<=9000){
    nivel = "Ascendente"
} else if (xp>=9001 && xp<=10000){
    nivel = "Imortal"
} else if (xp>=10001){
    nivel = "Radiante"
} else {console.log("Valor de XP inválido ou não especificado")}

//(SOLUÇÃO 2) - Usando estruturas de decisão switch case
// switch (true) {
//     case xp<=1000:
//         nivel = "Ferro"
//         break;

//     case xp>=1001 && xp<=2000:
//         nivel = "Bronze"
//         break;

//     case xp>=2001 && xp<=5000:
//         nivel = "Prata"
//         break;

//     case xp>=5001 && xp<=7000:
//         nivel = "Ouro"
//         break;

//     case xp>=7001 && xp<=8000:
//         nivel = "Platina"
//         break;

//     case xp>=8001 && xp<=9000:
//         nivel = "Ascendente"
//         break;

//     case xp>=9001 && xp<=10000:
//         nivel = "Imortal"
//         break;

//     case xp>=10001:
//         nivel = "Radiante"
//         break;

//     default:
//         console.log("Valor de XP inválido ou não especificado")
//         break;
// }

// Mensagem de saída proposta + xp
console.log("O Herói de nome " + nome + " está no nível de " + nivel + " (" + xp + " XP) ")