import React, { Dispatch } from 'react';

import { connect } from 'react-redux';
import './App.css';

import AppState from './AppState';
import { updateInput } from './Actions';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';


type AppProps = {
    output?: string 
    input?: string
    onInputChange?: (e: any) => void
};

const AppView: React.FC<AppProps> = (props: AppProps) => {
  return (
    <div className="App container">
        <div className="row"> 
            <div className="col-8">
                <h3>Input:</h3>
                <textarea onChange={props.onInputChange} value={props.input} rows={20} style={{width: "100%"}}>
                </textarea>
            </div>
            <div className="col-4">
                <h3>Output:</h3>
                <pre>
                    {props.output}
                </pre>
            </div>
        </div>
    </div>
  );
}

type DispatchType = Dispatch<Action> & ThunkDispatch<AppState, any, Action>;

const App = connect<AppProps, {}, {}, AppState>(
    state => ({
        output: state.isLoading ? "Loading..." : state.isError ? state.errorMessage : !state.input ? "Enter data on the left" : state.output,
        input: state.input,
    }),
    (dispatch : DispatchType) => ({
        onInputChange: (e: any) => dispatch(updateInput(e.target.value))
    })
)(AppView);

export default App;
