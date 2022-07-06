<template>
    <Header />
    <div class='home-root'>
        <van-swipe class="my-swipe" :autoplay="3000" lazy-render>
            <van-swipe-item v-for="image in images" :key="image">
                <img class="item-img" :src="image" />
            </van-swipe-item>
        </van-swipe>
    </div>
    <Footer />
</template>

<script setup>
import Header from '../layout/header.vue'
import Footer from '../layout/footer.vue'
const props = defineProps({

});
const images = [
    'https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg',
    'https://imgslim.geekpark.net/uploads/image/file/36/4b/364b85bd3f8c70693010a50086545cdf.png?imageView2/1/w/450/h/214/format/webp/ignore-error/1',
    'https://imgslim.geekpark.net/uploads/image/file/36/4b/364b85bd3f8c70693010a50086545cdf.png?imageView2/1/w/450/h/214/format/webp/ignore-error/1'
];
</script>

<style scoped lang='less'>
.home-root {
    margin-bottom: 60px;

    .my-swipe {
        outline: 1px solid rgba(128, 128, 128, 0.316);
        height: 26vh;
        width: 100%;

        // TODO  图片如果离谱 截取中间那个部位
        .item-img {
            // width: 100%;
            // height: auto;
            max-width: 100%;
            // width: 100%;
            max-height: 100%;
            display: block;
            margin: auto;
        }
    }
}
</style>