import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://kapusta-backend.goit.global/user',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.accessToken;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery,
  endpoints: builder => ({
    getUser: builder.query({
      query: () => '',
    }),
    updateBalance: builder.mutation({
      query: body => ({
        url: `balance`,
        method: 'PATCH',
        body,
      }),
    }),
  }),
});

export const { useGetUserQuery, useUpdateBalanceMutation } = userApi;
