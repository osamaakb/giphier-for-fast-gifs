const initialState = {
    isLoading: false
}

const isLoadingReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'loading':
            return { isLoading: true }
        case 'done':
            return { isLoading: false }
        default:
            return state;
    }
}

export default isLoadingReducer