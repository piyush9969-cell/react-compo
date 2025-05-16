export const INCREASE_MARKS = 'INCREASE_MARKS';
export const DECREASE_MARKS = 'DECREASE_MARKS';

export const increaseMarks = (studentId) => {
    return {
        type: INCREASE_MARKS,
        payload: studentId,
    };
}

export const decreaseMarks = (studentId) => {
    return {
        type: DECREASE_MARKS,
        payload: studentId,
    };
}