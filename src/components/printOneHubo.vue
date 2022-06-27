<template>
  <div class="center">
    <table border=1>
      <tr>
        <td class="name">
          <router-link :to="{name: 'resultOneReport', params: {id: hubo.id}}"> {{ hubo.id }}. {{ hubo.name }} </router-link>   <!-- outer-link 로 파라미터 전달 -->
        </td>
        <td class="voted">
          <hr color="red" :style="{width: `${hubo.percent * 5}px`}" />&nbsp;&nbsp;{{ hubo.count }} 표 ( {{ hubo.percent }}% )
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "printOneHubo",
  props: {
    hubo: Object,
  },
};
</script>

<style scoped>
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
  .name {
    width : 100px;
    height : 15px;
  }
  .voted {
    text-align: left;
    width : 600px;
    height : 15px;
  }
  hr {
			float : left;
			height : 15px;
	}
</style>
