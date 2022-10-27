//exercício Natação em dupla
//feito por Gica e Lola (Giovanna Alves e Paola)

//variavel da idade da pessoa competidora
var idade = 4

//estrutura de condição sobre as categorias

if (idade >= 5 && idade <= 7){
    console.log("Infantil A")
} else if (idade >= 8 && idade <= 11){
    console.log("Infantil B")
} else if (idade >= 12 && idade <= 13){
    console.log("Juvenil A")
} else if (idade >= 14 && idade <= 17){
    console.log("Juvenil B")
} else if (idade >= 18){
    console.log("Adulto")
} else {
    console.log("Você ainda não pode competir!")   
}