import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const regionApi = createApi({
  reducerPath: "regionApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://testpsyedu.limsa.uz/",
  }),
  endpoints:(builder) => ({
    getRegion:builder.query({
      query:() => "region",
    })
  })
});

export const {useGetRegionQuery} = regionApi;