<template>
    <div :class="isMobile ? 'main':'mainmob'">

        <div>
            <p class="error">{{ error }}</p>

            <p class="decode-result">Last result: <b>{{ result }}</b></p>

            <qrcode-stream @decode="onDecode" @init="onInit" />
        </div>
    </div>
</template>

<script>
    import { QrcodeStream } from 'vue-qrcode-reader'
    import axios from 'axios';
    export default
    {
        name: "scaning",
        components: {
            QrcodeStream,
        },
        data () {
            return {
                result: '',
                error: ''
            }
        },

        methods: {
            onDecode (result) {
                this.result = result;
            },


            async onInit (promise) {
                try {
                    await promise
                } catch (error) {
                    if (error.name === 'NotAllowedError') {
                        this.error = "ERROR: you need to grant camera access permisson"
                    } else if (error.name === 'NotFoundError') {
                        this.error = "ERROR: no camera on this device"
                    } else if (error.name === 'NotSupportedError') {
                        this.error = "ERROR: secure context required (HTTPS, localhost)"
                    } else if (error.name === 'NotReadableError') {
                        this.error = "ERROR: is the camera already in use?"
                    } else if (error.name === 'OverconstrainedError') {
                        this.error = "ERROR: installed cameras are not suitable"
                    } else if (error.name === 'StreamApiNotSupportedError') {
                        this.error = "ERROR: Stream API is not supported in this browser"
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .main
    {
        background-image: url("../../public/images/auth.png");
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .main p
    {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;

        color: #FFFFFF;
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
    .upload
    {
        padding: 20px 0;
        background-color: #467DE4;
        color: #3399ff;
    }
    .upload-container
    {
        border: 1px dashed #FFFFFF;
        margin-right: 314px;
    }
</style>