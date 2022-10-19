<template>
  <div style="height: auto">
    <div style="text-align: center; margin: 0 auto;padding: 0 10vw">
      <div class="title">
        <div>高性能 Web 渲染引擎，</div>
        <div>基于 Flutter 构建</div>
      </div>
      <div class="title-grey">
        一个用于构建 Web 用户界面符合 W3C 标准、高性能且通用的引擎。
      </div>
      <el-image style="cursor: pointer" :src='titleBgUrl'/>
    </div>
    <div style="padding: 0 10vw">
      <el-row class="hidden-sm-and-down title-blue">
        <el-col>Why Openwebf</el-col>
      </el-row>
      <el-row class="hidden-sm-and-down title-black is-justify-end">
        <el-col>Openwebf 核心能力</el-col>
      </el-row>
      <el-row class="is-justify-center">
        <div style="width: 264px;padding-right: 24px">
          <div class="shadow-block"></div>
          <div style="padding: 56px 24px">
            <img src='../../assets/ability_icon1.png' alt="ab1"/>
            <div class="text-black">W3C 标准</div>
            <div class="text-grey">拥抱前端生态</div>
          </div>
        </div>
        <div style="width: 264px;padding-right: 24px">
          <div class="shadow-block"></div>
          <div style="padding: 56px 24px">
            <img src='../../assets/ability_icon2.png' alt="ab2"/>
            <div class="text-black">高性能</div>
            <div class="text-grey">轻量且快速</div>
          </div>
        </div>
        <div style="width: 264px;padding-right: 24px">
          <div class="shadow-block"></div>
          <div style="padding: 56px 24px">
            <img src='../../assets/ability_icon3.png' alt="ab3"/>
            <div class="text-black">跨平台</div>
            <div class="text-grey">自绘保证多端一致性</div>
          </div>
        </div>
        <div style="width: 264px;padding-right: 24px">
          <div class="shadow-block"></div>
          <div style="padding: 56px 24px">
            <img src='../../assets/ability_icon4.png' alt="ab4"/>
            <div class="text-black">调试工具</div>
            <div class="text-grey">支持 Chrome 调试协议</div>
          </div>
        </div>
      </el-row>
      <el-row style="padding-top: 24px" class="is-justify-center">
        <div style="width: 264px;padding-right: 24px">
          <div class="shadow-block"></div>
          <div style="padding: 56px 24px">
            <img src='../../assets/ability_icon1.png' alt="ab1"/>
            <div class="text-black">富文本</div>
            <div class="text-grey">原生支持图文混排</div>
          </div>
        </div>
        <div style="width: 264px;padding-right: 24px">
          <div class="shadow-block"></div>
          <div style="padding: 56px 24px">
            <img src='../../assets/ability_icon4.png' alt="ab4"/>
            <div class="text-black">插件化</div>
            <div class="text-grey">灵活的扩展能力</div>
          </div>
        </div>
      </el-row>
    </div>
    <div style="height: 80px"></div>
    <div style="background-color: #F9FAFB;width: 100%">
      <div style="padding: 96px 10% 129px 10%;width: 80%">
        <el-row class="hidden-sm-and-down title-blue">
          <el-col>From the Openwebf</el-col>
        </el-row>
        <el-row class="hidden-sm-and-down title-black">
          <el-col>Openwebf 能做什么</el-col>
        </el-row>
        <el-row class="hidden-sm-and-down text-grey is-justify-center">
          <div style="width: 30vw;text-align: center;padding-bottom: 30px">
            Openwebf 改变了应用程序的开发过程。从单个代码库构建、测试和部署精美的移动、Web、桌面和嵌入式应用程序。
          </div>
        </el-row>
        <el-row style="padding: 30px 0" class="is-justify-center">
          <div style="width:360px;padding-right:36px">
            <div style="position:absolute;">
              <img src='../../assets/shadow_img1.png' alt="si3"/>
            </div>
            <div class="img-shadow-block">
              <div class="text-black">Web 标准开发</div>
              <div class="text-grey">Openwebf 依据 W3C 标准提供渲染能力，提供浏览器中常见的标签、CSS
                能力、API，让你使用前端生态构建原生应用。
              </div>
            </div>
          </div>
          <div style="width:360px;padding-right:36px">
            <div style="position:absolute;">
              <img src='../../assets/shadow_img2.png' alt="si2"/>
            </div>
            <div class="img-shadow-block">
              <div class="text-black">跨平台一致</div>
              <div class="text-grey">基于 Flutter 的自绘渲染技术，不再受到平台能力制约，提供跨平台完全一致的 UI，同时支持桌面端
                (macOS、Linux、Windows) 和移动端 (iOS、Android)等。
              </div>
            </div>
          </div>
          <div style="width:360px;">
            <div style="position:absolute;">
              <img src='../../assets/shadow_img3.png' alt="si3"/>
            </div>
            <div class="img-shadow-block">
              <div class="text-black">原生性能</div>
              <div class="text-grey">使用 AOT 构建技术将 Openwebf 编译成机器码，提供更接近原生的性能；同步光栅化，支持无限列表流畅滚动且没有白屏。
              </div>
            </div>
          </div>
        </el-row>
      </div>
    </div>
    <el-row class="is-justify-center" style="padding: 81px 0">
      <div class="text-black" style="font-size: 24px">
        谁在使用Openwebf
      </div>
    </el-row>
    <el-row style="text-align: center;padding: 0 10vw">
      <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 4}"
              :xl="{span: 4}">
        <img src='../../assets/partner/partner_logo1.png' alt="pl1"/>
      </el-col>
      <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 4}"
              :xl="{span: 4}">
        <img src='../../assets/partner/partner_logo2.png' alt="pl2"/>
      </el-col>
      <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 4}"
              :xl="{span: 4}">
        <img src='../../assets/partner/partner_logo3.png' alt="pl3"/>
      </el-col>
      <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 4}"
              :xl="{span: 4}">
        <img src='../../assets/partner/partner_logo4.png' alt="pl4"/>
      </el-col>
      <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 4}"
              :xl="{span: 4}">
        <img src='../../assets/partner/partner_logo5.png' alt="pl5"/>
      </el-col>
      <el-col :xs="{span: 2, push: 0}" :sm="{span: 2, push: 0}" :md="{span: 2, push: 0}" :lg="{span: 4}"
              :xl="{span: 4}">
        <img src='../../assets/partner/partner_logo6.png' alt="pl6"/>
      </el-col>
    </el-row>
    <div style="height: 78px"></div>
    <div style="background-color: #0057FE;padding: 120px 10vw">
      <el-row class="is-justify-center title-white">提高您的生产力。</el-row>
      <el-row class="is-justify-center title-white"> 立即开始使用Web渲染引擎。</el-row>
      <el-row class="is-justify-center text-grey2"> 在开源框架上进行协作，为 Openwebf
        上的生态系统做出贡献，并在需要时寻求帮助。
      </el-row>
      <el-row class="is-justify-center">
        <el-button size="large" style="color: #0057FE">快速开始&nbsp;
          <el-icon class="el-icon--right">
            <ArrowRightBold/>
          </el-icon>
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<script setup lang="ts">
import titleBgUrl from '../../assets/title_bg.png';
import {ArrowRightBold} from '@element-plus/icons-vue'

</script>


<style lang="scss" scoped>
.title {
  font-size: 56px;
  font-weight: bold;
  line-height: 64px;
  padding-bottom: 24px;
  padding-top: 64px;
  color: black;
}

.title-grey {
  font-size: 20px;
  color: #111827;
}

.title-blue {
  font-size: 14px;
  font-weight: bold;
  color: #0057FE;
  padding-bottom: 24px;
}

.title-white {
  font-size: 44px;
  font-weight: bold;
  color: white;
  padding-bottom: 36px;
}

.text-grey2 {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.56);
  padding-bottom: 36px;
}

.title-black {
  font-size: 40px;
  font-weight: bold;
  padding-bottom: 40px;
  color: black;
}

.text-black {
  font-size: 16px;
  font-weight: bold;
  padding-top: 24px;
  padding-bottom: 16px;
  color: black;
}

.text-grey {
  font-size: 14px;
  color: rgba(18, 17, 39, 0.56);
}

.shadow-block {
  width: 264px;
  height: 247px;
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(18, 17, 39, 0.08);
  position: absolute;
}

.img-shadow-block {
  height: 150px;
  padding: 238px 24px 56px 24px;
  background-color: #FFFFFF;
  box-shadow: 0px 20px 50px rgba(18, 17, 39, 0.08);
  border-radius: 12px;
}

</style>