const initialState = {
    isAuthentication: false,
    username: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VERIFY_LOGIN': {
            return {
                ...state,
                isAuthentication: !state.isAuthentication
            }
        }

        case 'GET_USERNAME': {
            const username = action.payload
            return {
                ...state,
                username: username
            }
        }

        default:
            return state
    }
}

export default userReducer