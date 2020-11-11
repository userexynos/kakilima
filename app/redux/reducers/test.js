const initState = {
    data: []
}

const test = (state = initState, action) => {
    switch(action.type) {
        case 'TEST_TYPE_ADD': {
            return {
                ...state,
                data: [...state.data, action.test]
            };
        }
        case 'TEST_TYPE_DELETE': {
            return {
                data: []
            }
        }
        default: {
            return state;
        }
    }
}

export default test;