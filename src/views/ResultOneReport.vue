<template>
  <div class="result-View">
    <div class="component" v-for="data in datas" :key="data.ages">
      <div v-if="data.id == huboid"> 
        <printOneAges :reports="data.reports" />
      </div>
    </div>
  </div>
</template>

<script>
import printOneAges from "@/components/printOneAges.vue";

  export default {
    name: 'ResultOneReport',
    components: {
      printOneAges,
    },
    data() {
      return {
        datas: [
          { id:1, reports:[{ages:10, count:1, percent: 10 },
                        {ages:20, count:1, percent: 10 },
                        {ages:30, count:1, percent: 10 },
                        {ages:40, count:0, percent: 0 },
                        {ages:50, count:1, percent: 10 },
                        {ages:60, count:1, percent: 10 },
                        {ages:70, count:2, percent: 20 },
                        {ages:80, count:2, percent: 20 },
                        {ages:90, count:1, percent: 10 }]},
          { id:2, reports:[{ages:10, count:0, percent: 0 },
                        {ages:20, count:0, percent: 0 },
                        {ages:30, count:0, percent: 0 },
                        {ages:40, count:0, percent: 0 },
                        {ages:50, count:0, percent: 0 },
                        {ages:60, count:0, percent: 0 },
                        {ages:70, count:0, percent: 0 },
                        {ages:80, count:1, percent: 20 },
                        {ages:90, count:4, percent: 80 }]},
          { id:3, reports:[{ages:10, count:1, percent: 20 },
                        {ages:20, count:1, percent: 20 },
                        {ages:30, count:0, percent: 0 },
                        {ages:40, count:0, percent: 0 },
                        {ages:50, count:2, percent: 40 },
                        {ages:60, count:0, percent: 0 },
                        {ages:70, count:1, percent: 20 },
                        {ages:80, count:0, percent: 0 },
                        {ages:90, count:0, percent: 0 }]},
        ],
        huboid: this.$route.params.id
      }
    },
    props: {
      id: String,
    },
  }
</script>
