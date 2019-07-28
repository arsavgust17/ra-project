<template>
    <div :class="isMobile ? 'main':'mainmob'">

    </div>
</template>

<script>
    export default {
        name: "quiz",
    };

</script>

<style scoped>
>>>.ivu-slider-button
{
border: 2px solid darkred;
}.main
 {
     background-color: #467DE4;
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: flex-end;
 }
.mainmob {
    background-color: #467DE4;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}
</style>