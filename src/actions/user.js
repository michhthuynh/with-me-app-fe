export const verifyLogin = isAuthentication => {
    return {
        type: 'VERIFY_LOGIN',
        payload: isAuthentication
    }
}

export const addUsername = username => {
    return {
        type: 'ADD_USERNAME',
        payload: username
    }
}