function clicou()
{
var tn1 = window.document.getElementById('num')
var res = window.document.getElementById('res')
var n1 = Number(tn1.value)

if (tn1.value.length == 0)
{
    res.innerHTML = 'Impossível contar'
    window.alert('[ERRO] Digite um número')
}

for(var c = 0;c <=10;c++)
{
var padrao = document.createElement('li')
padrao.appendChild(document.createTextNode((n1.value) * i))
document.querySelector('ul').appendChild('li')

}

} 