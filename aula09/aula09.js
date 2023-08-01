/*
let n1 = [12,23,23,4]
let n2 = [23,23,34,56]
let n3 = [...n1,...n2]

console.log("n3:" + n3) 
console.log("tipo de n3:" + typeof(n3) )

const jogador1 = {nome:"Bruno",energia:50,vida:3,magia:150, ataque:2134 }
const  jogador2 = {nome:"Bruno",energia:50,vida:3,magia:150, velocidade:23}
const jogador3 = {...jogador1,...jogador2}    

 console.log(jogador3) 


const soma = (v1,v2,v3) =>{
    return v1+v2+v3
}
let valores = [1,89,4,10]
console.log(soma(...valores))
*/
const object1 = document.getElementsByTagName("div")

const object2 = [...document.getElementsByTagName("div")]


object2.forEach(element => {
   element.innerHTML = "cursossszzz"
});

console.log(object1)
console.log(object2)