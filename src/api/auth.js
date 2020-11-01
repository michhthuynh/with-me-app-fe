const { default: axiosClient } = require("./axiosClient")

const auth = {
    getCheckLogin: () => {
        const url = '/auth/check-logged'
        return axiosClient.get(url)
    }
}

export default auth