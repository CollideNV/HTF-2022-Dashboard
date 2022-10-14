const { REACT_APP_DASHBOARD_API_URL, REACT_APP_DEADLINE } = process.env

export default {
    dashboard_api: {
        url: REACT_APP_DASHBOARD_API_URL!
    },
    deadline: REACT_APP_DEADLINE ? REACT_APP_DEADLINE : '2022-11-15T16:00:00'
}
