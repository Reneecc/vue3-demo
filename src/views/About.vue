<template>
    <div class='register-root'>
        <van-nav-bar title="about页面" left-arrow @click-left="onClickLeft" />
    </div>
</template>

<script setup>
const props = defineProps({

});

//返回上一级页面
const onClickLeft = (() => {
    // console.log('history', history);
    history.back()
})
</script>


<style scoped lang='less'>
//ok 
/deep/ .van-nav-bar .van-icon {
    color: black;
}

//ok 
// ::v-deep .van-nav-bar .van-icon {
//     color: red;
// }
</style>

<!-- <style lang='less'>
.van-nav-bar .van-icon {
    color: red;
}
</style> -->
