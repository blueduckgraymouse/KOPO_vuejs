<template>
  <div class="result-View">
    <div class="component" v-for="hubo in hubos" :key="hubo.id">
      <printOneHubo :hubo="hubo" />
    </div>
  </div>
</template>

<script>
import printOneHubo from "@/components/printOneHubo.vue";

export default {
  name: 'ResultAllReport',
  components: {
    printOneHubo,
  },
  data() {
    return {
      hubos: [
        { id:1, name: "후보1", count:10, percent:50},
        { id:2, name: "후보2", count:5, percent:25},
        { id:3, name: "후보3", count:5, percent:25},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
  .component {
    display: block;
  }
</style>