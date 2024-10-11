import { INCREMENT, DECREMENT } from "./counterTypes";

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const decrement = () => {
    return {
        type: DECREMENT,
    };
}