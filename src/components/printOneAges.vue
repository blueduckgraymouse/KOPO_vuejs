<template>
  <div class="center">
    <table border=1>
      <div class="component" v-for="report in reports" :key="report.ages">
        <tr>
          <td class="name">
            {{ report.ages }} 대
          </td>
          <td class="voted">
            <hr color="red" :style="{width: `${report.percent * 5}px`}" />&nbsp;&nbsp;{{ report.count }} 표 ( {{ report.percent }}% )
          </td>
        </tr>
      </div>
    </table>
  </div>
</template>

<script>
export default {
  name: "printOneAges",
  props: {
    reports: Array,
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
