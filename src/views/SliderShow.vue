<script setup>
import {reactive} from "vue";
import SliderComponent from "@/components/SliderComponent.vue";
const sliderData = reactive(
    [
      {
        imageUrl: "https://images.pexels.com/photos/4676400/pexels-photo-4676400.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        imageUrl: "https://images.pexels.com/photos/9992330/pexels-photo-9992330.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        imageUrl: "https://images.pexels.com/photos/4339810/pexels-photo-4339810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },

    ]
);
</script>

<template>
    <h1 class="text-danger">Slider With Dataset Mounted  and data cleanup BeforeUnmounted hook</h1>
   <SliderComponent
     :data="sliderData"
     />
</template>

<style scoped>

</style>