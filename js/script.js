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
                arrayListEmail.push(axios.get("https://flynn.boolean.careers/exercises/api/random/mail"));
                console.log(arrayListEmail);
            }
            for(let i = 0 ; i < 10 ; i++){
                Promise.all(arrayListEmail).then((risultati)=>{
                    this.listEmail.push(risultati[i].data.response);
            })
            }
            
        },
    },
    created(){
        this.getEmail()
    }
}).mount("#app");


