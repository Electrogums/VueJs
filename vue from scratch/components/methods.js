Vue.component('methods',{
    data () {
        return {
            name: 'Erick',
            lastname: 'Llanos'
        }
    },
    computed: {
        fullname() {
            return `${this.name} ${this.lastname}`;
        }
    },
    methods:{
       hello(){
           alert(this.fullname);
        }
   },
    template: `<div>
        <h2>Ejecutar metodos con Vuejs</h2>
        <p @click="hello">pulsa a qui para ejecutar el metodo hello </p>
             </div>`
});