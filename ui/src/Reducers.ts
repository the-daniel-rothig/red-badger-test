import AppState from './AppState';
import { Action } from 'redux';

export default function rootReducer(state: AppState | undefined = {isLoading: false, isError:false}, action: Action) : AppState {
    switch(action.type) {
        case "INPUT_UPDATED": return Object.assign({}, state, {input: (action as any).value, isLoading: true, isError:false, output: null});
        case "OUTPUT_RECEIVED": return Object.assign({}, state, {isLoading: false, isError: false, output: (action as any).value});
        case "LOADING_ERROR": return Object.assign({}, state, {isLoading: false, isError:true, errorMessage: (action as any).message});
        case "CLEAR": return {isLoading: false, isError:false};
        default: return state;
    }
}