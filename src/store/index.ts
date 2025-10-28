import { configureStore } from '@reduxjs/toolkit';
import { boardgamesApi } from './apis/boardgamesApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: { [boardgamesApi.reducerPath]: boardgamesApi.reducer },
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().concat(boardgamesApi.middleware);
	},
});

setupListeners(store.dispatch);

export {
	useFetchBoardgamesQuery,
	useAddBoardgameMutation,
	useRemoveBoardgameMutation,
} from './apis/boardgamesApi';
