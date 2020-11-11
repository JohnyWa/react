const initialProps = {
    test: 5,
    data: {d: 6},
    currentCount: 0
}

export const countReducer = (state = initialProps, action) => {
    switch (action.type) {
        case 'ADD_COUNT':
            return {
                ...state,
                currentCount: state.currentCount + 1
            }
        default:
            return state
    }
}
