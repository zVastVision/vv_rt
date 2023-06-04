<template>
  <div>
    <h1 class="font-bold text-white">
      Live View
    </h1>
  </div>
  <canvas class="canvas"></canvas>
  <li
      v-for="(p, index) in itemDetails"
      :key="index"
    >
    <div class="overlay" v-bind:style='style="--x:" + (parseInt(p.location.split(",")[0]) * 0.25 + parseInt(870)).toString() + "px; --y:" + (parseInt(p.location.split(",")[1]) * 0.125 + parseInt(420)).toString() + "px;"'>
      <img src="/images/svg/blue_dot.svg" alt="down">
    </div>
  </li>
</template>

<script setup lang="ts">

import { Inventory } from "~/types"
import useDebouncedRef from '~/composables/debounce'
//import { defineComponent, onMounted, ref } from 'vue'
import {onMounted, Ref, ref} from "vue"

const store = useInventoryStore()

const itemDetails = computed(() => {
  //return store.itemsData
  return store.activeitemsData
})

//await useAsyncData('', () => store.getItems({}))
await useAsyncData('', () => store.getActiveItems({}))
await useAsyncData('', () => store.subItemFunc())
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  left: 450px;
  width: 300px;
  height: 300px;
}

.canvas {
  position: relative;
  left: 20px;
  top: 20px;
  width: 1180px;
  height: 630px;
  background-color: white;
  opacity: 0.05;
}

.overlay {
  position: absolute;
  left: var(--x, 10px);
  top: var(--y, 10px);
}
</style>
