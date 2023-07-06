import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CardapioProps, RestaurantProps } from '../pages/Home'

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
    })
  })
})

export const { useGetFeatureRestaurantQuery, useGetFeatureRevenueQuery } = api
export default api
