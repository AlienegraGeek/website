import {createApp} from 'vue'
import './style.css'
import ElementPlus from "element-plus";
import App from './App.vue'
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/display.css";
import {router} from "./router";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.mount("#app");
