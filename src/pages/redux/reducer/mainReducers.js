import {
    ADD_LIST,
    ADD_INPUT_VALUE,
    CLEAR_ALL_DATA,
    IS_COMPLETE
} from "../actions/action"

let initialState = {
    input_data: "",
    inputFieldData: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_INPUT_VALUE:
            return { ...state, input_data: action?.payload };

        case ADD_LIST:
            let getInputData = [...state.inputFieldData];
            if (getInputData.length <= 4 ) {
                let alldata = {
                    id: Math.floor(Math.random() * 100),
                    title: action.payload,
                    isActive: false
                }
                getInputData.push(alldata)
            }
            else {
                alert("Does not exceed limit");
            }
            return { ...state, inputFieldData: getInputData, input_data: "" }

        case CLEAR_ALL_DATA:
            let getfilterData = [...state.inputFieldData];
            const reomoveMatchValue = getfilterData.filter((obj) => obj.id === action.payload)
            getfilterData.splice(reomoveMatchValue, 1)
            return { ...state, inputFieldData: getfilterData };

        case IS_COMPLETE:
            let getComplete = [...state.inputFieldData];
            getComplete.filter((item) => item.id === action.payload).map((active) => active.isActive = true)
            return { ...state, inputFieldData: getComplete }

        default:
            return state;
    }
}