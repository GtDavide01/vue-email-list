// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail


const {createApp} = Vue ; 

createApp({
    data(){
        return{
            listEmail: []
        }
    },
    created(){
        // generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
        for(let i = 0 ; i < 10 ; i++ ){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then( (risposta) => {
            console.log(risposta.data.response);
            this.listEmail.push(risposta.data.response);
            }
        )
        }
    }
}).mount("#app");


