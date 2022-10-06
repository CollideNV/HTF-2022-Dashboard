import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { REHYDRATE } from 'redux-persist'
import { API_ROUTES } from '../../resources/constants/api-constants'
import environment from '../../resources/constants/environment'
import { Team } from '../../types/Team'
import axiosBaseQuery from '../../utility/axiosBaseQuery'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: axiosBaseQuery({ baseUrl: environment.dashboard_api.url }),
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === REHYDRATE) return action.payload[reducerPath]
    },
    endpoints: (builder) => ({
        getDashboard: builder.query<Team[], void>({
            query: () => ({ url: API_ROUTES.DASHBOARD_ROUTE, method: 'GET' })
        })
    })
})

export const { useGetDashboardQuery } = dashboardApi
