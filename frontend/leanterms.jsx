import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {CurrentUser} from './utils/session_utils'


document.addEventListener('DOMContentLoaded', () => {

    CurrentUser().then(user => {
        if (Object.keys(user).length > 0) {
            window.current_user = user;
        }
        let preloadstate = undefined;
        if (window.current_user) {
            preloadstate = {
                session: {
                    currentUser: window.current_user
                }
            };
        }


        let store = configureStore(preloadstate);
        window.store = store;
        window.getState = store.getState;
        window.dispatch = store.dispatch;

        ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
    });
});
