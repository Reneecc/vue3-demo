<template>
    <div class='layout-footer'>
        <router-link class="footer-menu-item" to="/">首页</router-link>
        页脚巴啦巴拉巴拉
        <router-link class="footer-menu-item" to="/about">关于</router-link>
    </div>
</template>

<script setup>
const props = defineProps({

});
</script>

<style scoped lang="less">
.layout-footer {
    width: 100%;
    max-width: 650px;
    height: 60px;
    padding: 0 20px;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-top: 1px solid #666;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background: white;
    z-index: 9999;

    .footer-menu-item {
        padding: 0 6px;
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>