<template>
  <div>{{ name }}今年{{ age }}了</div>
  <div>双倍年龄是：{{ doubleAge }}</div>
  <el-button @click="editName">换个名字</el-button>
  <el-button @click="editAge">年龄+1</el-button>
  <div>{{ state.test }}</div>
  <div class="text-green-800 mt-10">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useBaseStore } from './store'
import { storeToRefs } from 'pinia'
import { getTest } from '@/api'
const state = reactive({ test: 'test' })
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

<style lang="scss" scoped></style>
