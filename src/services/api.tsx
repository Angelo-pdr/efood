import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioProps, RestaurantProps } from '../pages/Home'
import { url } from 'inspector'
import { METHODS } from 'http'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  product: Product[]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getFeatureRestaurant: builder.query<RestaurantProps[], void>({
      query: () => 'restaurantes'
    }),
    getFeatureRevenue: builder.query<RestaurantProps, string>({
      query: (id) => `restaurantes/${id}`
    }),
    purchase: builder.mutation<any, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const { useGetFeatureRestaurantQuery, useGetFeatureRevenueQuery } = api
export default api
