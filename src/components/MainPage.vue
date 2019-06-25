
<template>
    <div class="mainContainer clearfix">
        <div class="fLft leftOuterDV"> <LeftConatiner></LeftConatiner></div>
        <div class="fLft rightOuterDV"><RightConatiner></RightConatiner></div>
    </div>
</template>

<script>
import Utils from './../common/Utils';
import * as Constant from '../common/Constants';
import { publishEvent } from '../common/Observer';
import RightConatiner from './RightConatiner';
import LeftConatiner from './LeftConatiner';



export default {
 
    data() {
        return {

        }
    },
    components: {
        RightConatiner,
        LeftConatiner,
    },
    created() {

    },
    mounted(){
              
    },
    methods: { 

    
    },
    computed:{
        
    }
}
</script>

<style lang="scss">
.mainContainer {width:100%;background-color: #f1f1f1;height:100vh;}
.rightOuterDV{width:65%;}
.leftOuterDV{width:35%;}

</style>
