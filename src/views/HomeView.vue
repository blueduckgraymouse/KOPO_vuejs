<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> <!-- 데이터는 자식 컴포넌트로 단반향으로 전달 가능 -->
    <button @click="btnClick">click me!</button>  <!-- 이벤트, 함수 실습 -->
    <div v-for="item in items" :key="item.name">  <!-- v-for반복문 실습 -->
      <p>{{item.name}} : {{item.age}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
  data() {                    /* 반복문 실습용 데이터, 데이터는 함수형태로 반환해 주어 야한다. */
    return {
      items: [
        {name : "a", age:1},
        {name : "b", age:2},
        {name : "c", age:3},
        {name : "d", age:4},
        {name : "e", age:5},
        {name : "f", age:6},
      ]
    }
  },
  methods: {                  /* 함수 실습 */
    btnClick() {
      alert("button clicked");
    }
  },
  created() {                 /* 해당 인스턴스가 DOM에 훅(업데이트, 로드) 된 후 실행될 코드 */
    console.log("in created.");
  },
  mounted() {                 /* 해당 인스턴스가 마운트 된 후 실행될 코드 */
    console.log("in mounted.");
  },
  beforeUpdate() {             /* 해당 인스턴스가 수정 된 후 실행될 코드 */
    console.log("beforeUpdate."); 
  },
};
</script>
