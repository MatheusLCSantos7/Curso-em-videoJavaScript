function clicou()
{
var tn1 = window.document.getElementById('num')
var res = window.document.getElementById('res')
var n1 = Number(tn1.value)

if (tn1.value.length == 0)
{
    res.innerHTML = 'Impossível contar'
    window.alert('[ERRO] Digite um número')
}else 
{
    for (let c = 0; c <= 9; c +=n1)
    {
    let n1 = n1 * c
    res.innerHTML = `${n1}`

    }
}
} 