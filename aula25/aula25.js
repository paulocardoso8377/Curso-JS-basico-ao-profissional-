

const cursosTodos = [...document.getElementsByClassName("cursos")]

const cursosC1 =[...document.getElementsByClassName("c1")]

const cursosC2 = [...document.getElementsByClassName("c2")]

console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

cursosTodos.map((el)=>{
    el.classList.add("destaque")
})