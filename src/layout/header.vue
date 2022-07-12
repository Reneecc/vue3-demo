<template>
    <div class='layout-header'>
        <div class="avatar-box">
            <img src="../assets/older.jpeg" alt="">
        </div>
        <div @click="goHome">啦啦啦啦啦</div>
        <div>
            <PriButton btnVal="实名注册" @click="goRegister" />
        </div>
    </div>
</template>

<script setup>
import PriButton from '../components/PrimaryButton.vue';
import router from "../router";


const props = defineProps({

});

const goHome = () => {
    router.push('/')
}

const goRegister = () => {
    router.push('/register')
}
</script>

<style scoped lang='less'>
.layout-header {
    border-bottom: 1px solid #666;
    width: 100%;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .avatar-box {
        width: 40px;
        height: 40px;

        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>