<template>
    <div :class="!isMobile ? 'main':'mainmob'">
        <Upload class="upload-container"
                :on-success="(response, file, fileList)=>this.$router.push('auth') "
                action="//jsonplaceholder.typicode.com/posts/">
            <div class="upload">
                <Icon type="ios-cloud-upload" size="52"></Icon>
                <p>Загрузите фото прямо сейчас</p>
            </div>
        </Upload>
    </div>
</template>

<script>
    function isMobile() {
        try{ document.createEvent("TouchEvent"); return true; }
        catch(e){ return false; }
    }
    export default {
        name: "photoload"
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