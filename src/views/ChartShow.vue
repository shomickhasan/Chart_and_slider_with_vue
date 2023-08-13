<script setup>
import PieChart from "@/components/PieChart.vue";
const pieChartData = {
  labels:['Category A', 'Category B', 'Category C', 'Category D', 'Category E'],
  backgroundColor: ['red', 'blue', 'green', 'yellow', 'purple'],
  data:[25, 20, 15, 10, 30],
  title:'Pie Chart With Dataset Mounted  and data cleanup BeforeUnmounted hook'
}
</script>
<template>
  <PieChart
    :data="pieChartData"
  />
</template>
<style scoped>

</style>