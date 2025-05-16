import { INCREASE_MARKS
, DECREASE_MARKS
 } from "../action/action";
 import studentData from "../../data/students.json"

 const initialState = {
    students: studentData
 }

export const studentReducer = (state=initialState, action) => {
    switch (action.type){
        case INCREASE_MARKS:
            return {
                ...state,
                students: state.students.map((student) => {
                    if (student.id === action.payload) {
                        if (student.marks + 5 > 100) {
                            throw new Error("Marks cannot be greater than 100");
                        }
                        return { ...student, marks: student.marks + 5 };
                    }
                    return student;
                })
            }
        case DECREASE_MARKS:
            return {
                ...state,
                students: state.students.map((student) => {
                    if (student.id === action.payload) {
                        if (student.marks - 5 < 0) {
                            throw new Error("Marks cannot be less than 0");
                        }
                        return { ...student, marks: student.marks - 5 };
                    }
                    return student;
                })
            }
        default:
            return state;
    }
}