import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "../../interfaces/interfaces";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.github.com/users/" }),
  tagTypes: ["Users"],
  endpoints: (builder) => ({
    users: builder.query<User, string>({
      query: (user) => `${user}`,
      providesTags: ["Users"],
    }),
  }),
});

export const { useUsersQuery } = usersApi;
