<template>
  <div class="result-View">
    <div class="component" v-for="hubo in hubos" :key="hubo.id">
      <resultOne :hubo="hubo" />
    </div>
  </div>
</template>

<script>
import resultOne from "@/components/ResultOne.vue";

  export default {
    name: 'result-View',
    components: {
      resultOne,
  },
  data() {
    return {
      hubos: [
        { id:1, name: "후보1", count:1, total:10, percent:10 },
        { id:2, name: "후보2", count:3, total:10, percent:30 },
        { id:3, name: "후보3", count:6, total:10, percent:60 },
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