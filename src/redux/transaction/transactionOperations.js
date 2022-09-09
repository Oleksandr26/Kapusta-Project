import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://kapusta-backend.goit.global/transaction/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

export const transactionApi = createApi({
    reducerPath: 'transactionApi',
    baseQuery,
    endpoints: (builder) => ({
      getIncomeCategories: builder.query({
      query: () => `income-categories`,
    }),
      getExpenseCategories: builder.query({
        query: () => `expense-categories`,
      }),
      getPeriodData: builder.query({
        query: (data) => `period-data?date=${data}`,
      }),
      getIncome: builder.query({
        query: () => `income`,
      }),
      getExpense: builder.query({
        query: () => `expense`,
      }),
  }),
  })


export const { useGetIncomeCategoriesQuery, useGetExpenseCategoriesQuery, useGetPeriodDataQuery, useGetIncomeQuery, useGetExpenseQuery } = transactionApi;
