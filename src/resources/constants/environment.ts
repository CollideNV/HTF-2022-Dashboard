const { REACT_APP_DASHBOARD_API_URL } = process.env

export default {
    dashboard_api: {
        url: REACT_APP_DASHBOARD_API_URL!
    }
}

console.log(REACT_APP_DASHBOARD_API_URL)
