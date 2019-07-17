import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import AppState from "./AppState";

export function updateInput(newValue: string | null | undefined) : ThunkAction<void, AppState, any, Action>{
    return (dispatch: any) => {
        if (!newValue) {
            dispatch({
                type:"CLEAR"
            });
            return;
        }
        dispatch({
            type: "INPUT_UPDATED",
            value: newValue || ""
        })
        fetch("http://localhost:3001/grid?data="+encodeURIComponent(newValue || ""))
            .then(res => {
                if (res.status === 200) {
                    return res.text()
                } else {
                    throw "error fetching results";
                }
            })
            .then(body => dispatch({
                type: "OUTPUT_RECEIVED",
                value: body
            }))
            .catch(err => dispatch({
                type: "LOADING_ERROR",
                message: "Error fetching results"
            }));
    };
}