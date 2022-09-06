const baseUrl = process.env.REAC_APP_API_URL

export const getData = (userId: number): string => {
    return baseUrl + '/data/' + userId
}
