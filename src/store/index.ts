import { Names } from './store-name'
import { defineStore } from 'pinia'

interface StateInterface {
  name: string
  age: number
}
export const useBaseStore = defineStore(Names.TEST, {
  state: (): StateInterface => ({
    name: '小三',
    age: 18
  }),
  // getters中函数接受state参数，而actions中使用this
  getters: {
    doubleAge: ({ age }) => age * 2
  },
  actions: {
    setName() {
      this.name = this.name === '老四' ? '小三' : '老四'
    }
  }
})
