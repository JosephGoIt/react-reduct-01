export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

//**defining actions */
export function incrementAction () {
    return {
        type: INCREMENT
    };
}

export function decrementAction () {
    return {
        type: DECREMENT
    };
}