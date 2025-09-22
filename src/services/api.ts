import type { ApiResponse } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	baseQuery: fetchBaseQuery({
		baseUrl: "/nyt/svc/archive/v1/",
	}),
	endpoints: (builder) => ({
		getArchive: builder.query<ApiResponse, { year: number; month: number }>({
			query: ({ year, month }) =>
				`${year}/${month}.json?api-key=${import.meta.env.VITE_API_KEY}`,
		}),
	}),
});

export const { useGetArchiveQuery } = api;
