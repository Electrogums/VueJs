Vue.component('load-dynamic-component',{
    data() {
        return {
            components: ['cmp1', 'cmp2', 'cmp3'],
            currentComponent:'cmp1'
        }
    },
    methods: {
        changeComponent(cmp){
            this.currentComponent=cmp;
        }
    },
 template:`<div>
        <h2>Componentes dinámicos</h2>
        <button v-for="cmp in components" :key="cmp" @click="changeComponent(cmp)">
        Seleccionar {{cmp}}
        </button>
    <component v-bind:is=currentComponent ></component>
 </div>`   
});