import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import archiveReducer from "./slice";

export const store = configureStore({
	reducer: { [api.reducerPath]: api.reducer, archive: archiveReducer },
	middleware: (gDM) => gDM().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
