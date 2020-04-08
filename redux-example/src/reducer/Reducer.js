// const initialState = {
//     count: 0
// };

const reducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENTBY1":
            return state + 1;
        case "INCREMENTBY2":
            return state + 2;
        case "SUBMIT":
            return state;
        default:
            return state;
    }
};
export default reducer;
