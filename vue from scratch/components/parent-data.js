Vue.component('parten-data',{
data() {
    return {
        
    };
},
template:`<div>
         <h2> Acceso a datos del cmp padre desde el cmp hijo </h2>
         <p>{{$parent.appName}}</p> 
         </div>`
});