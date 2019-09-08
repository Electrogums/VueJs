Vue.component('watchers',{
data() {
    return {
        user:null,
        oldUser:null,
    }
},
mounted() {
    this.randomUser();
},
methods: {
 

    async randomUser(){
        try {
   
            const data = await fetch('https://randomuser.me/api/');
            const json = await data.json();
            console.log(json);
            const user = json.results[0];
            console.log(user);
            this.user = `${user.name.title} ${user.name.first} ${user.name.last}`;

        } catch (e) {
            console.log(e);
        }
     }
},
watch: {
     user(newVal,oldVal) {
      this.user= newVal;
      this.oldUser=oldVal;
    }
},
template:`<div>
        Watcher con Vue js   
        <button @click="randomUser">obtener un usuario aleatorio</button>
        <p>nuevo usuario {{user}}</p>      
        <p>Usuario  anterior {{oldUser}}</p>          
         </div>   `
});