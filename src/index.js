import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { Route, HashRouter as Router } from 'react-router-dom';
import configureStore from './store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import DepartamentRanking from './components/ranking/departament/Ranking';
import DepartamentUserRanking from './components/ranking/departament/user/Ranking';
import numeral from 'numeral';

ReactDOM.render(
    <Provider store={configureStore()}>
        <Router>
            <div>
                <Route exact path="/" component={DepartamentRanking} />
                <Route path="/departaments" component={DepartamentRanking} />
                <Route path="/users/departament/:name" component={DepartamentUserRanking} />
            </div>
        </Router>
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
