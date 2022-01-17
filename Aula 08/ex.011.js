var idade = 67
var resultado = 1

if (idade < 16) 
{
    var resultado = ('esperar para que possa ter a oportunidade de votar')
} else 
{ 
    if (idade >=16 && idade <=18 || idade >=65)
    {
    var resultado = ('VOTAR caso seja de sua vontade')
    }
    else 
    {
    var resultado = ('votar pois sua idade indica que o voto sera obrigatório')
    }
}
console.log(`Bom dia,hoje você fara um teste para ter conhecimento de suas obrigações quanto ao seu país `)
console.log(`Voce tem ${idade} anos por isso devera ${resultado}`)