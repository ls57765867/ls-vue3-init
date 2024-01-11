import axios from '../utils/axios'

export const getTest = () => {
  return axios.get('/api/test', { params: { name: 'zs', age: 19 } })
}
