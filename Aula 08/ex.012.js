 var agora = new Date()
 var hora = agora.getHours()
 var minutos = agora.getMinutes()
 var secunds = agora.getSeconds()
 var data =  agora.getDate()
 var ano = agora.getFullYear()
 console.log(`Agora são ${hora} horas , ${minutos} minutos e ${secunds} segundos do dia ${data} de Janeiro de  ${ano} .`)
if (hora <12) 
{
console.log('Bom dia')
} else if (hora<=18) 
{
console.log('boa tarde')
} else 
{
console.log('Boa noite')
}