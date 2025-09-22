import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ApiResponse } from "./types";

interface ArchiveState {
	data: ApiResponse | null;
}

const initialState: ArchiveState = { data: null };

const archiveSlice = createSlice({
	name: "archive",
	initialState,
	reducers: {
		setData: (state, action: PayloadAction<ApiResponse>) => {
			state.data = action.payload;
		},
	},
});

export const { setData } = archiveSlice.actions;
export default archiveSlice.reducer;
