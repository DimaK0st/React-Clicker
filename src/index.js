import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./storeRedux/store";
import {Provider} from "react-redux";

ReactDOM.render(

    <div className={"root"}>
    <Provider store={store}>
        <App/>
    </Provider>
    </div>,
    document.getElementById('root')

);

