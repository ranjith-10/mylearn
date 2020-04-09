export function incrementby1() {
    return {
        type: "INCREMENTBY1"
    };
}
export function incrementby2() {
    return {
        type: "INCREMENTBY2"
    };
}
export function submit() {
    return { type: "SUBMIT" };
}

export function textinput(inputvalue) {
    return { type: "SET_TEXTVALUES", inputvalue: inputvalue };
}
