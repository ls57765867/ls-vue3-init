<template>
  <div>{{ name }}今年{{ age }}了</div>
  <div>双倍年龄是：{{ doubleAge }}</div>
  <el-button @click="editName">换个名字</el-button>
  <el-button @click="editAge">年龄+1</el-button>
  <div>{{ state.test }}</div>
  <div class="w-[375px] h-10 bg-red-600 text-red-600">22</div>
  <esse-tabbar> </esse-tabbar>
</template>

<script setup lang="ts">
import { useBaseStore } from '../store'
import { storeToRefs } from 'pinia'
import { getTest } from '@/api'
const state = reactive({ test: '测试' })
const store = useBaseStore()
const { name, age, doubleAge } = storeToRefs(store)

const editName = () => {
  store.setName()
}
getTest().then(res => {
  console.log(res, 222)
})
const editAge = () => {
  age.value++
}
</script>

<style lang="scss" scoped>
.ans {
  width: 375px;
  background-color: red;
  height: 20px;
}
</style>
