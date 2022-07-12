<template>
    <div class='register-root'>
        <van-nav-bar title="注册页面" left-arrow @click-left="onClickLeft" />
        <!-- <van-field v-model="number" type="number" label="手机号" />
        <van-field v-model="tel" type="tel" label="身份证号" />
        <van-divider>啦啦啦下面的是有验证规则的</van-divider>
        <van-cell-group inset>
            <van-field v-model="username" error required label="用户名" placeholder="请输入用户名" />
            <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" error-message="手机号格式错误" />
        </van-cell-group>
        <van-divider>form自定义校验规则</van-divider> -->

        <!-- TODO 不好改样式 暂时这样吧 -->
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field v-model="name" name="姓名" label="姓名" placeholder="姓名"
                    :rules="[{ required: true, message: '请填写姓名' }]" />
                <van-field v-model="idnumber" type="phone" name="身份证号" label="身份证号" placeholder="身份证号"
                    :rules="[{ required: true, message: '请填写密码' }]" />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                    验证
                </van-button>
            </div>
        </van-form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({

});

// const number = ref('');
// const tel = ref('');
// const username = ref('刘德华');
// const phone = ref('');

const name = ref('刘德华');
const idnumber = ref('');

const onClickLeft = (() => {
    // console.log('history', history);
    history.back()
})

const onSubmit = (values) => {
    console.log('submit', values);
};
</script>

<style scoped lang="less">
::v-deep .van-nav-bar .van-icon {
    color: orange;
}
</style>

<!-- <style lang='less'>
.van-nav-bar .van-icon {
    color: red;
}
</style> -->