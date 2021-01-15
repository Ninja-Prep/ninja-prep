const initialState = {
    theme: 'eclipse',
    mode: 'text/x-java',
}

const editorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_THEME':
            return {
                ...state,
                theme: action.theme,
            }
        case 'CHANGE_MODE':
            return {
                ...state,
                mode: action.mode,
            }

        default:
            return state
    }
}

export default editorReducer
