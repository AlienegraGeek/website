<template>
  <div style="width: 100%;">
      <el-row class="hidden-sm-and-down is-justify-center" style="align-items: center;padding-top: 24px;">
        <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 2, push: 0}"
                :xl="{span: 2, push: 0}">
          <router-link to="/">
            <el-image :src='logoUrl'/>
          </router-link>
        </el-col>
        <el-col :span="8" :push="0">
          <el-row type="flex" justify="space-evenly">
            <router-link to="/">
              <div class="headFont">教程</div>
            </router-link>
            <router-link to="/publicChain">
              <div class="headFont">API</div>
            </router-link>
            <router-link to="/token">
              <div class="headFont">插件</div>
            </router-link>
            <router-link to="/coinMining">
              <div class="headFont">博客</div>
            </router-link>
            <router-link to="/arCoin">
              <div class="headFont">贡献</div>
            </router-link>
          </el-row>
        </el-col>
        <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 2, push: 0}"
                :xl="{span: 2, push: 0}">
          <el-input v-model="searchText" placeholder="搜索">
            <template #prefix>
              <el-icon class="el-input__icon">
                <search/>
              </el-icon>
            </template>
          </el-input>
        </el-col>
        <el-col :span="4" :push="1">
          <el-button color="#0057fe">
            <el-link href="https://github.com/openwebf" target="_blank" style="color: #FFFFFF">GitHub</el-link>
          </el-button>
          <el-button>快速开始</el-button>
        </el-col>
        <el-col :span="2" :push="1">
          <el-row type="flex" style="align-items: center">
            <el-image style="cursor: pointer" :src='langIconUrl'/>
          </el-row>
        </el-col>
      </el-row>
    </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import logoUrl from '../assets/main_logo.png';
import langIconUrl from '../assets/lang_icon.png';
import {Search} from '@element-plus/icons-vue'

const searchText = ref('')
onMounted(() => {
  window.scroll(0, 0) // 页面加载置顶
  document.body.scrollTop = document.documentElement.scrollTop = 0
})

function handleClose(done: () => void) {
  done()
}
</script>


<script lang="ts">
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.headFont {
  white-space: nowrap;
  font-size: 16px;
}

a {
  text-decoration: none;
  color: #000000;
}

.router-link-exact-active {
  text-decoration: none;
  color: #00EAC4;
}

.router-link-active {
  text-decoration: none;
}

.drawer-left-text {
  font-size: 24px;
  font-weight: 500;
  color: #000000;
}
</style>