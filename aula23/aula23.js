function aluno(nome,nota){
    this.nome=nome
   
     this.nota= nota

     this.dados_anonimos = function(){
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },2000)
    }

     this.dados_arrow=function(){
        setTimeout(()=>{

            console.log(this.nome)
            console.log(this.nota)

        } ,2000)
     }
}
const all = new aluno("Bruno",100)
all.dados_anonimos()
all.dados_arrow()
