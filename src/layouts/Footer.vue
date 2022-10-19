<template>
  <div style="height: auto;padding: 56px 10vw 114px 10vw">
    <el-row>
      <el-col :span="8">
        <img src='../assets/main_logo.png' alt="ml"/>
        <div style="padding: 24px 0">
          <div class="text-grey">一个用于构建 Web 用户界面符合 W3C 标准、</div>
          <div class="text-grey"> 高性能且通用的引擎。</div>
        </div>
        <el-space :size="32">
          <img src='../assets/logo/facebook_logo.png' alt="facebook"/>
          <img src='../assets/logo/twitter_logo.png' alt="twitter"/>
          <img src='../assets/logo/instagram_logo.png' alt="instagram"/>
          <el-link :underline="false" href="https://github.com/openwebf" target="_blank">
            <img src='../assets/logo/github_logo.png' alt="github"/>
          </el-link>
        </el-space>
      </el-col>
      <el-col :span="4">
        <div class="text-grey-padding">社区</div>
        <div class="text-black-padding">
          <el-link :underline="false" href="https://github.com/openwebf" target="_blank">GitHub</el-link>
        </div>
        <div class="text-black-padding">博客</div>
      </el-col>
      <el-col :span="4">
        <div class="text-grey-padding">帮助</div>
        <div class="text-black-padding">
          <el-link :underline="false" href="https://github.com/openwebf/webf/issues" target="_blank">反馈问题</el-link>
        </div>
        <div class="text-black-padding">教程</div>
        <div class="text-black-padding">插件</div>
        <div class="text-black-padding">API</div>
      </el-col>
      <el-col :span="4">
        <div class="text-grey-padding">项目协同</div>
        <div class="text-black-padding">贡献代码</div>
      </el-col>
      <el-col :span="4">
        <div class="text-grey-padding">更多</div>
        <div class="text-black-padding">
          <el-link :underline="false" href="https://rax.js.org/" target="_blank">Rax</el-link>
        </div>
        <div class="text-black-padding">
          <el-link :underline="false" href="https://ice.work/" target="_blank">飞冰(ICE)</el-link>
        </div>
        <div class="text-black-padding">
          <el-link :underline="false" href="https://www.midwayjs.org/" target="_blank">Midway</el-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style lang="scss" scoped>
* {
  font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.text-grey {
  color: rgba(18, 17, 39, 0.56);
  font-size: 14px;
}

.text-black {
  color: #111827;
  font-size: 14px;
}

.text-grey-padding {
  color: rgba(18, 17, 39, 0.56);
  font-size: 14px;
  padding-bottom: 20px;
  font-weight: bold;
}

.text-black-padding {
  color: #111827;
  font-size: 14px;
  padding-bottom: 8px;
}

//.a-tag-color:hover {color:#94469B;}  /* 鼠标移动到链接上 */
</style>
