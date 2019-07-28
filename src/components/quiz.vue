<template>
<div class="content">
    <slider :step="1" :max="5" :min="1" show-stops  :tip-format="emojiType"></slider>
</div>
</template>

<script>
export default {
    name: "quiz",
    methods: {
        emojiType(val) {
            switch (val) {
                case 1:
                    return `<div><i>fdfdfd</i></div>`;
                case 2:

                    return '';
                case 3:
                    return null;
                case 4:

                    return '';
                case 5:

                    return '';
            }
        }
    }
};
</script>

<style scoped>
>>>.ivu-slider-button {
    border: 2px solid darkred;
}
>>>.ivu-slider-wrap {
    background-color: blue;
}
.main {
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