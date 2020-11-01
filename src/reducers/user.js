const initialState = {
    isAuthentication: false,
    msgError: '',
    username: ""
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'VERIFY_LOGIN': {
            return {
                ...state,
                isAuthentication: action.payload
            }
        }

        case 'ADD_USERNAME': {
            return {
                ...state,
                username: action.payload
            }
        }

        default:
            return state
    }
}

export default userReducer