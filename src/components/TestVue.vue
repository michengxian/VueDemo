<template>
    <div class="hello">
        <h1>{{message}}</h1>
        <h2>Vue.js</h2>
        <mycomponent></mycomponent>
    </div>
</template>

<script>
import mycomponent from './MyComponent.vue';

export default {
    name:'helloworld',
    data(){
        return{
            message:'hello vue',
        }
    },
    components:{mycomponent}
}
</script>

<style>
h1,h2{
    font-weight: normal;
    color: orange;
}
</style>
