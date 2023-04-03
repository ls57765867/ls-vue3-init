<template>
  <div>{{ name }}今年{{ age }}了</div>
  <div>双倍年龄是：{{ doubleAge }}</div>
  <el-button @click="editName">换个名字</el-button>
  <el-button @click="editAge">年龄+1</el-button>
  <div>
    <router-view style="margin-top: 120px"></router-view>
  </div>
</template>

<script setup lang="ts">
import { useBaseStore } from './store'
import { storeToRefs } from 'pinia'

const state = reactive({})
const { name, age, doubleAge } = storeToRefs(useBaseStore())
const store = useBaseStore()

const editName = () => {
  store.setName()
}
const editAge = () => {
  age.value++
}
</script>
