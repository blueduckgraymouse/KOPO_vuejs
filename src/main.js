import { createApp } from "vue";
//import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// axios 추가
//import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:8002';
// axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
//Vue.prototype.$http = axios;

// new Vue({
//   el: '#app',
//   router,
//   components: {App},
//   template: <App/>
// })

// const app = createApp(App);
// app.config.globalProperties.$axios = axios; 
// app.use(router).mount('#app');

// const cors = require('cors');
// let corsOption = {
//     origin: 'http://localhost:8002',    // 허용 주소
//     credentials: true                   // true시 설정 내용을 응답헤더에 추가해 줌
// }
// app.use(cors(corsOption));              // CORS 미들웨어 추가

createApp(App).use(router).mount("#app");
// ape.vue의 내용을 index.html 안의 id가 app인 요소에 라우터를 이용해서 앱으로 만들어 매핑
