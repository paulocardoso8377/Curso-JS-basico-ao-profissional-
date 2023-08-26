const cursostodos = [...document.getElementsByClassName("curso")]; // Correção aqui
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]

console.log(cursostodos);
console.log(cursosC1);
console.log(cursosC2);

cursostodos.map((el) => {
    el.classList.add("destaque")
});
