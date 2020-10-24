export const verifyLogin = isAuthentication => {
    return {
        type: 'VERIFY_LOGIN',
        payload: isAuthentication
    }
}

export const getUsername = username => {
    return {
        type: 'GET_USERNAME',
        payload: username
    }
}