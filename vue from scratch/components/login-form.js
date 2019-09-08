Vue.component('login-form',{
data() {
    return {
        logged:false,
        user:{
            email:'',
            password:''
        }
    }
},
methods: {
    login(){
        this.logged=this.user.email==='test@gmail.com' && this.user.password==='123';

    }
},
template:`<div>
        
         <h2>Formulario de login</h2>
          <p v-show="logged" style="background: green; color: #fff;"> 
          Has iniciado sesión con los datos {{user}}
          </p>   
          <form @submit.prevent="login">
            <input autocomplete="off"  type="email" v-model="user.email" name="email"></input>
            <input type="password" v-model="user.password" name="password"></input>
            <input type="submit" value="iniciar sesion"></input>
          </form>
         </div>`
});