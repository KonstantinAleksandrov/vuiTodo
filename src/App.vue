<script setup lang='ts'>
  import VHeader from "./components/UI/VHeader.vue";
  import { onMounted } from 'vue';
  import { useTodoStore } from '@/stores/TodoStore'
  const store = useTodoStore()
    onMounted(()=>{
        store.loadAllData()
    })
</script>

<template>
  <div class="wrapper">
    <VHeader/>
    <router-view></router-view>
  </div>
</template>

<style>
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  li{
    list-style: none;
  }
  :root {
        --el-menu-base-level-padding: '0px';
  }
</style>
