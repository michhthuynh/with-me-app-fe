const initialState = {
    isAuthentication: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VERIFY_LOGIN': {
            return {
                ...state,
                isAuthentication: !state.isAuthentication
            }
        }

        default:
            return state
    }
}

export default userReducer