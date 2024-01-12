<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item name="home" icon="home-o" url="/hello">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search" url="/test">测试</van-tabbar-item>
    <van-tabbar-item name="friends" icon="friends-o">标签3</van-tabbar-item>
    <van-tabbar-item name="setting" icon="setting-o">标签4</van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts" setup>
const state = reactive({
  active: 'home'
})

const { active } = toRefs(state)
</script>
