<script setup>
import {onBeforeUnmount, onMounted} from "vue";
  const props = defineProps({
    data:Object,
  })
  let carousel =null
  onMounted(()=>{
    carousel = new Flickity( '.carousel', {
      // options
      draggable: true
    });
    console.log('Slider Mounted when dom tree is ready')
    console.log(carousel)
  })

  onBeforeUnmount(()=>{
    //carousel.destroy()
    carousel =null
    console.log('Slider Before Unmounted data clear')
    console.log(carousel)
  })
</script>

<template>
  <div class="carousel items">
    <div class="carousel-cell item"  :style="`background-image: url(${item.imageUrl})`" v-for="(item,index) in data" :key="index">...</div>
  </div>

</template>

<style scoped>
.items{
  height: 650px;
  width: 600px;
  margin: 0 auto;
}
.item{
  height: 650px;
  width: 600px;
  background-repeat: no-repeat;
  background-position: center;
  -o-background-size: cover;
}
</style>