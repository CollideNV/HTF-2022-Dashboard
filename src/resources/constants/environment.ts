const {
    REACT_APP_DASHBOARD_API_URL,
    REACT_APP_DEADLINE,
    REACT_APP_DASHBOARD_WEBSOCKET_URL
} = process.env

export default {
    dashboard_api: {
        http: REACT_APP_DASHBOARD_API_URL ?? "http://htf.collide.be",
        websocket: REACT_APP_DASHBOARD_WEBSOCKET_URL ?? "ws://htf.collide.be"
    },
    deadline: REACT_APP_DEADLINE ?? '2023-11-09T16:00:00'
}
