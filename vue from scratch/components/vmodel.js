Vue.component('vmodel',{
data(){

    return {
        framework: 'Vue js 2 '
        };
},
    template: `
    <div>
    <h2>Trabajando con Vmodel</h2>
    <input v-model="framework">
    <p>El framework elegido es: {{framework}} </p>
    </div>
    ` ,
});