//var n = 2
//function parim(n) 
//{
 //   if (n%2 == 0)
 //   {
 //       console.log('o Seu número é par')
//    } else {console.log('Seu número é impar')}
//}
function clicou()
{
    var res = document.querySelector('div#res')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    img.setAttribute('src', 'barrudinha.png')
    res.appendChild(img)
    
}
