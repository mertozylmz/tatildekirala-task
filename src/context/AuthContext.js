import { Alert } from 'react-native'

// Setup
import createDataContext from './option/createDataContext'

// API
import { signinAPI } from "../api/tatildekirala"

// Utils
import { userNotFound } from '../utils/messages'

// Initial
const initialState = {
    user: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "USER":
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

const signin = dispatch => async (data) => {
    try {
        const response = await signinAPI(data)
        dispatch({ type: "USER", payload: response.user })
    } catch (error) {
        console.log(error)
        Alert.alert(userNotFound.title, userNotFound.message)
    }
}

export const { Provider, Context } = createDataContext(
    reducer,
    { signin },
    { ...initialState }
)