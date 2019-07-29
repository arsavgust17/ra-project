<template>
<div class="question">
    <div>
        <div class="number" :style="colorClass">
            <span class="number-val">{{number}}</span>
        </div>
    </div>
    <span class="span-text"><nobr>{{text}}</nobr></span>
    <div class="question-block">
        <span style="margin-right: 10px;">{{questionText}}</span>
        <slider width="50%" :step="1" :max="5" :min="1" show-tip="never" @on-change="emojiType"></slider>
    </div>
</div>
</template>

<script>
    export default {
        name: "question",
        props: {
            questionText: {
                type: String,
                required: true,
            },
            number: {
                type: Number,
                required: true,
            }
        },
        data () {
            return {
                text: '',
                color: '',
            };
        },
        computed: {
            colorClass() {
                return `color:${this.color};`;
            },
        },
        methods: {
            emojiType(val) {
                switch (val) {
                    case 1:
                        this.color = "#F70A0A";
                        this.text = "всё плохо";
                        return 'всё плохо';
                    case 2:
                        this.color = "#FFB841";
                        this.text = 'хотелось бы лучше';
                        return 'хотелось бы лучше';
                    case 3:
                        this.color = "black";
                        this.text = 'Оцените работу';
                        return 'Оцените работу';
                    case 4:
                        this.color = "#C5E384";
                        this.text = 'вроде неплохо';
                        return 'вроде неплохо';
                    case 5:
                        this.color = '#008000';
                        this.text = 'всё супер';
                        return 'всё супер';
                }
            },
        }
    }
</script>

<style scoped>
.number-val {
}
.number {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    font-size: 36px !important;
    font-weight: bold;
    padding: 10px 35px;
    border-radius: 50%;
    margin-right: 25px;
}
.span-text
{
    position: absolute;
    margin-top: 80px;
    margin-right: 150px;
}
>>>.ivu-slider-button-wrap {
    top: -9px;
}
>>>.ivu-slider-button {
    width: 24px;
    height: 24px;
    border: 2px solid #888CB8;
    background-color: #888CB8;
}
>>>.ivu-slider-wrap {
    position: relative;
    background-color: #467DE4;
}
.question-block {
    width: 400px;
}
.question {
    display: flex;
}
</style>