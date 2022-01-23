let amigo ={nome:'jose',sexo:'M',peso: 95.5,
engordar(p)
{
    console.log('engordou')
    this.peso += p    //this auto refere ao objeto
}
}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}KG`) //variavel amigo agora tem funconalidades dentro dela 

