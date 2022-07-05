<template>
    <div class='button-box'>
        <button class="btn">{{ btnVal }}</button>
    </div>
</template>

<script setup>
const props = defineProps({
    btnVal: String,
});
</script>

<style scoped lang='less'>
.button-box {
    .btn {
        background: black;
        border: none;
        border-radius: 4px;
        box-sizing: border-box;
        color: #fff;
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: 4px 6px;
        position: relative;
        text-align: center;
        width: auto;
        font-size: 12px;
    }

    // hover特效
    .btn:after,
    .btn:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 100%;
        background: rgba(0, 0, 0, 0.405);
        z-index: -2;
        border-radius: 4px;
    }

    .btn:hover {
        z-index: 1;
        background: transparent;
    }

    .btn:before {
        transition: .3s;
        background: rgba(0, 0, 0, 0.882);
        z-index: -1;
    }

    .btn:hover:after,
    .btn:hover:before {
        width: 100%;
    }
}
</style>