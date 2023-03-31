<template>
  <div>{{ name }}今年{{ age }}了</div>
  <div>双倍年龄是：{{ doubleAge }}</div>
  <el-button @click="editName">换个名字</el-button>
  <el-button @click="editAge">年龄+1</el-button>
  <div class="text-green-800 mt-10">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useBaseStore } from './store'
import { storeToRefs } from 'pinia'

const { name, age, doubleAge } = storeToRefs(useBaseStore())
const store = useBaseStore()

const editName = () => {
  store.setName()
}
const editAge = () => {
  age.value++
}
</script>
