<template>
    <div class="main">
        <div class="text">
            <h1>Войдите
                через портал
                государственных
                услуг прямо сейчас</h1>
        </div>
        <div class="goauth">
            <a href="../../auth">Войти сейчас</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "start"
    }
</script>

<style scoped>
    .main
    {
        background:url("../../public/images/auth.png") 100% 100% no-repeat;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
.text
{
    margin-right: 284px;
    margin-left: 1109px;
    margin-top: 237px;
    margin-bottom: 457px;
    height: 330px;
    width: 589px;
}
h1
{
    text-align: left;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 64px;
    line-height: 75px;

    color: #F1E5E5;
}
.goauth
{
    position: absolute;
    background: #2A27B0;
    color: #F1E5E5;
    border-radius: 3px;
    display: block;
    width: 240px;
    padding: 20px 0;
    margin: 0 auto;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    margin-top: 250px;
    margin-left: -515px;
}
</style>