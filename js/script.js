// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue ; 

createApp({
    data(){
        return{
            listEmail: [],
        }
    },
    methods:{
        getEmail: function(){
            const arrayListEmail = []
            for(let i = 0 ; i < 10 ; i++ ){
                this.listEmail.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));
                console.log(this.listEmail);
                Promise.all(this.listEmail).then(function(risultati){
                    arrayListEmail.push(risultati[i].data.response);
                })
            }
        },
    },
    created(){
        this.getEmail()
    }
}).mount("#app");


