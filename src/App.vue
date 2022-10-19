<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from "./layouts/Header.vue";
import Footer from "./layouts/Footer.vue";
</script>

<template>
  <el-container>
    <el-header>
      <Header/>
    </el-header>
    <router-view/>
    <el-footer>
      <Footer/>
    </el-footer>
  </el-container>
</template>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style scoped lang="scss">
#app {
  background-color: #FFFFFF;
}

</style>
