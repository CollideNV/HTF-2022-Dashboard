const {
    REACT_APP_DASHBOARD_API_URL,
    REACT_APP_DEADLINE,
    REACT_APP_DASHBOARD_WEBSOCKET_URL
} = process.env

export default {
    dashboard_api: {
        http: REACT_APP_DASHBOARD_API_URL!,
        websocket: REACT_APP_DASHBOARD_WEBSOCKET_URL!
    },
    deadline: REACT_APP_DEADLINE ?? '2023-11-09T16:00:00'
}
