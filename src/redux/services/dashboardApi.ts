import { createApi } from '@reduxjs/toolkit/dist/query/react'
import { REHYDRATE } from 'redux-persist'
import { API_ROUTES } from '../../resources/constants/api-constants'
import environment from '../../resources/constants/environment'
import { Team } from '../../types/Team'
import axiosBaseQuery from '../../utility/axiosBaseQuery'

export const dashboardApi = createApi({
    reducerPath: 'dashboardApi',
    baseQuery: axiosBaseQuery({ baseUrl: environment.dashboard_api.http }),
    tagTypes: ['Dashboard'],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === REHYDRATE) return action.payload?.[reducerPath]
    },
    endpoints: (builder) => ({
        getDashboard: builder.query<Team[], void>({
            query: () => ({ url: API_ROUTES.DASHBOARD_ROUTE, method: 'GET' }),
            async onCacheEntryAdded(
                _arg,
                {
                    cacheDataLoaded,
                    cacheEntryRemoved,
                    updateCachedData,
                    dispatch
                }
            ) {
                // create a websocket connection
                const socket = new WebSocket(
                    `${environment.dashboard_api.websocket}${API_ROUTES.MESSAGES_ROUTE}`
                )

                try {
                    // Wait for the initial query to resolve
                    await cacheDataLoaded

                    const listener = () => {
                        updateCachedData(() => {
                            dispatch(
                                dashboardApi.util.invalidateTags(['Dashboard'])
                            )
                        })
                    }

                    socket.addEventListener('message', listener)
                } catch (err) {
                    // no-op in case `cacheEntryRemoved` resolves before `cacheDataLoaded`,
                    // in which case `cacheDataLoaded` will throw
                }

                // Will resolve when cache subscription is no longer active
                await cacheEntryRemoved
                socket.close()
            },
            providesTags: ['Dashboard']
        })
    })
})

export const { useGetDashboardQuery } = dashboardApi
