Vue.component('emit',{
    data(){
        return{
            carBrand:'Vw'
        };
    },
    template: `
    <div>
    <h2>Emitir eventos con vue js 2 </h2>
    <p @click="$emit('carbrand',carBrand)" >pulsa a qui para emitir un evenot a la instancia vuejs</p>
    </div>
    `
});