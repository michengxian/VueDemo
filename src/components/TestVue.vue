<template>
    <div class="hello">
        <h1>{{message}}</h1>
        <h2>Vue.js</h2>
        <div>
            <router-link to="/second" slot="second" class="second">
            跳转
            </router-link>
        </div>

        <mycomponent>
            
        </mycomponent>
        <br/>
        <secondcomponent></secondcomponent>

        
    </div>
</template>

<script>
import mycomponent from './MyComponent.vue';
import secondcomponent from './SecondComponent.vue';

export default {
    name:'helloworld',
    data(){
        return{
            message:'hello vue',
        }
    },
    components:{mycomponent,secondcomponent}
}
</script>

<style>
h1,h2{
    font-weight: normal;
    color: orange;
}
</style>
