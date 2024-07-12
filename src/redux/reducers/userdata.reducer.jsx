

function userDataReducer(state = {}, action) {
    if (action.type === "GET_USER_DATA") {
        return { ...action.payload }
    } else if (action.type === "REMOVE_USER_DATA") {
        return {}
    }
    return state
}

export default userDataReducer