import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import './index.css';
import * as serviceWorker from './serviceWorker';
import { store, persistor } from "./store";
import Login from './components/login/Login';
import Ranking from './components/ranking/Ranking';
import numeral from 'numeral';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <div>
                    <Route exact path="/" component={Ranking} />
                </div>
            </Router>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// load a locale
numeral.register('locale', 'es', {
    delimiters: {
        thousands: '.',
        decimal: ','
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    currency: {
        symbol: '€'
    }
});

numeral.locale('es');
