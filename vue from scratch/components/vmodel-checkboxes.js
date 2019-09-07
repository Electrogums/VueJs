Vue.component('vmodel-checkboxes',{
data(){
return {
        frameworks:[]
         };
},
template:`<div> 
          <h2>VModel con Arrays</h2>
  
        <input type="checkbox" id="vuejs2" value="vuejs 2" v-model="frameworks">
        <label for="vuejs2">vue js 2</label>
       
        <input type="checkbox" id="reactjs" value="react js" v-model="frameworks">
        <label for="reactjs">react js</label>

        <input type="checkbox" id="angular" value="angular " v-model="frameworks">
        <label for="angular">angular</label>

        <p>framworks seleccionados {{frameworks}}</p>
               </div>
        `

});