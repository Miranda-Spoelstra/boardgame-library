import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const boardgamesApi = createApi({
	reducerPath: 'boardgames',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005/',
	}),
	endpoints(builder) {
		return {
			fetchBoardgames: builder.query({
				query: () => {
					return {
						url: '/boardgames',
						method: 'GET',
					};
				},
			}),
		};
	},
});

export const { useFetchBoardgamesQuery } = boardgamesApi;
export { boardgamesApi };
