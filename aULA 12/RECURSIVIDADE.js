//RECURSIVIDADE????????????


//5! = 5 x 4! ou seja ,n = n-1 (menos o 1 )


function fatorial(n)
{
    if (n == 1)
    {
        return 1
    } else 
    {
        
        do 
        {  
        var c = 1
        return n * fatorial(n-1)
        c++
        }  
        
         while(c <= 6)
        
}
}
console.log(fatorial(5))