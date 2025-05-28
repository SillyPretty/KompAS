import { $axios } from '../api'

export const ProductService = {
  async getAll(category?: string, search?: string) {
    const params: { category?: string; search?: string } = {}
    if (category) params.category = category
    if (search) params.search = search

    const { data } = await $axios.get('/products', { params })
    return data
  },

  async getPopular() {
    const { data } = await $axios.get('/products')
    return data
  }
}
