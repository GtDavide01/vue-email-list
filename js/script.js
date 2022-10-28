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
            myPromise: axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        }
    },
    methods:{
        getEmail: function(){
            for(let i = 0 ; i < 10 ; i++ ){
                this.listEmail.push(this.myPromise);
                console.log(this.listEmail);
            }
        },
        getResult: function(){
            Promise.all(this.listEmail).then(function(risultati){
                console.log(risultati);
            })
        }
    },
    created(){
        this.getEmail(),
        this.getResult()
    }
}).mount("#app");


