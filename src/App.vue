<template>
  <Header />
  <div class="page-content">
    <router-view />
  </div>
  <Footer />
</template>

<script>
// <router-view />： 这个 / 是承接自路由的容器，所有一级路由都在 / 之后。比如前文我们写的两个页面，/Home 和 /About
// <router-link>：在 history 模式下会拦截点击，不让浏览器重新加载页面。
import Header from './layout/header.vue'
import Footer from './layout/footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 650px;
  /* border: 1px solid black; */
  margin: 0 auto;
  /* background: url('https://imgslim.geekpark.net/uploads/image/file/36/4b/364b85bd3f8c70693010a50086545cdf.png?imageView2/1/w/450/h/214/format/webp/ignore-error/1'); */
}

.page-content {
  margin-bottom: 60px;
  min-height: calc(100vh - 120px);
}
</style>
