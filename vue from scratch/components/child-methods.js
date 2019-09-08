Vue.component('child-methods',{
    data() {
        return {
            cmpName:'Child methods CMP'
        }
    },
    methods: {
        showCmpName(){
            console.log(this.cmpName);
        }
    },

    template:`<div>
              <h2> Accedo a métodos del cmp hijo desde el cmp padre</h2>  
              </div>`
});