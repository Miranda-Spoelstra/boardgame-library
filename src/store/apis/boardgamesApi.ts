import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Boardgame } from '../../types/boardgame';
type BoardgameResponse = Boardgame[];

const boardgamesApi = createApi({
	reducerPath: 'boardgames',
	baseQuery: fetchBaseQuery({
		baseUrl: 'http://localhost:3005/',
	}),
	tagTypes: ['Boardgames'],
	endpoints(builder) {
		return {
			fetchBoardgames: builder.query<BoardgameResponse, void>({
				providesTags: (result: Boardgame[] | undefined) =>
					result
						? [
								...result.map(({ id }) => ({
									type: 'Boardgames' as const,
									id,
								})),
								{ type: 'Boardgames', id: 'LIST' },
						  ]
						: [{ type: 'Boardgames', id: 'LIST' }],
				query: () => {
					return {
						url: '/boardgames',
						method: 'GET',
					};
				},
			}),
			addBoardgame: builder.mutation({
				invalidatesTags: () => [{ type: 'Boardgames', id: 'LIST' }],
				query: (name: string) => {
					return {
						url: '/boardgames',
						method: 'POST',
						body: {
							name
						},
					};
				},
			}),
			removeBoardgame: builder.mutation({
				invalidatesTags: () => [{ type: 'Boardgames', id: 'LIST' }],
				query: (boardgame) => {
					return {
						url: `/boardgames/${boardgame.id}`,
						method: 'DELETE',
					};
				},
			}),
		};
	},
});

export const {
	useFetchBoardgamesQuery,
	useAddBoardgameMutation,
	useRemoveBoardgameMutation,
} = boardgamesApi;
export { boardgamesApi };
