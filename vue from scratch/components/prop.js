Vue.component('props',
{
    // props: ['name','surname'],
   props:{
        name:{
            type:String,
            required:true

        },
        surname:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            required:true,
            validator:value=>{
                if(value<18){
                        console.log('No eres mayor de edad');
                        return false;
                } else return true;

            }
        }
   },
    template:`<div>
             <h2>Props con Vuejs 2 </h2>  
             <p>{{name}} {{surname}} Edad {{age}}</p> 
             </div>`

})