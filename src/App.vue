<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App hhhh"/> -->
  <div id="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
  <router-view />
  <!-- <router-view />： 这个 / 是承接自路由的容器，所有一级路由都在 / 之后。比如前文我们写的两个页面，/Home 和 /About -->
  <!-- <router-link>：在 history 模式下会拦截点击，不让浏览器重新加载页面。 -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
