Vue.component('computed-properties',{
    data (){
        return {
            name:'Erick',
            lastname:'Llanos'
        }
    },
    computed:{
        fullname(){
            return `${this.name} ${this.lastname}`;
        }
    },
    template: `
    <div>
        <h2> Computed Properties</h2>
        <p>{{fullname}}</p>
    </div>
    `    
});