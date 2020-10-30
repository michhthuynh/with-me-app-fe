const { default: axiosClient } = require("./axiosClient")

const userApi = {
    postLogin: (params) => {
        const url = '/auth/login'
        return axiosClient.post(url, { params })
    }
}

export default userApi