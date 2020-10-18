export const verifyLogin = isAuthentication => {
    return {
        type: 'VERIFY_LOGIN',
        payload: isAuthentication
    }
}