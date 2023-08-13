<script setup>
import {onBeforeUnmount, onMounted, ref,defineProps} from "vue";
const props = defineProps({
  data:Object
})

let Paichart = ref(null)
 onMounted(()=>{

  let data = {
    labels:props.data.labels,
    datasets: [{
      label: props.data.title,
      data:props.data.data,
      backgroundColor: props.data.backgroundColor,
      hoverOffset: 4
    }]

  }

   let ctx = document.getElementById('myChart');
   Paichart.value = new Chart(ctx, {
     type: 'pie',
     data: data
   });
   console.log('pie chart Mounted data mount when dom ready')
   console.log(Paichart)

})

onBeforeUnmount(()=>{
  //Paichart.value.destroy()
  Paichart.value=null
  console.log('pie chart beforeUnmount and data cleanup')
  console.log(Paichart)

})

</script>

<template>
  <h1>{{props.data.title}}</h1>
  <div class="row mt-5">
    <div class="col-md-8 offset-3" >
      <div style="height: 400px; width:400px">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>