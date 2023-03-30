import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    ADD_INPUT_VALUE,
    ADD_LIST,
    CLEAR_ALL_DATA,
    IS_COMPLETE
} from './redux/actions/action'

const Home = () => {
    const dispatch = useDispatch();
    const [printInputData, setPrintInputData] = useState(false);
    const dataState = useSelector((state) => state.input_data);
    const getallData = useSelector((state) => state.inputFieldData)

    return (
        <div className="homeWrap">
            <input
                type="text"
                value={dataState}
                onChange={(e) => dispatch({ type: ADD_INPUT_VALUE, payload: e.target.value })}
            />
            <button onClick={() => {
                setPrintInputData(true)
                dispatch({ type: ADD_LIST, payload: dataState })
            }}>
                Submit
            </button>
            {printInputData && (
                <>
                    {getallData?.map((item) => {
                        return (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <li className={`bg-dark ${item.isActive === true && 'bg-primary'}`}>{item.title}</li>
                                <button style={{ display: "inline", margin: 5 }}
                                    onClick={() => dispatch({ type: CLEAR_ALL_DATA, payload: item.id })}
                                >
                                    Delete
                                </button>
                                <button style={{ display: "inline", margin: 5 }}
                                    onClick={() => dispatch({ type: IS_COMPLETE, payload: item.id })}
                                >
                                    isComplete
                                </button>
                            </div>
                        )
                    })}

                </>
            )}
        </div>
    )
}

export default Home;