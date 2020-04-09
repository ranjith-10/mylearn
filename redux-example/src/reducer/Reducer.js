const initialState = {
    count: 0,
    inputvalue: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENTBY1":
            return { ...state, count: state.count + 1 };
        case "INCREMENTBY2":
            return { ...state, count: state.count + 2 };
        case "SUBMIT":
            return { ...state, count: state.inputvalue };
        case "SET_TEXTVALUES":
            return { ...state, inputvalue: action.inputvalue.inputvalue };
        default:
            return state;
    }
};
export default reducer;
