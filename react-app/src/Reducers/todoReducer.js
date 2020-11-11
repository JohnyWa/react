const initialProps = {
    myTodos: []
}

export const todoReducer = (state = initialProps, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                myTodos: [...state.myTodos, action.payload]
            }
        case 'REMOVE_TODO':
            const filteredTodos = state.myTodos.filter(todo => todo.id !== action.payload)
            return {
                myTodos: filteredTodos
            }
        default:
            return state
    }
}
