import { createStore, combineReducers, compose, applyMiddleware, StoreEnhancer } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './sagas';
import * as auth from './auth/reducer';
import { setConfig as setAuthConfig } from './auth/functions';

/* Import reducers from our modules */
import * as template from '../modules/template/reducer';
// import * as another from '../modules/another/reducers';

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
export interface RootStoreState {
    readonly template: template.StoreState;
    readonly auth: auth.StoreState;
}

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
const reducer = combineReducers<RootStoreState>({
    template: template.reducer,
    auth: auth.reducer,
});

/**
 * Create the redux-saga middleware.
 */
const sagaMiddleware = createSagaMiddleware();

/**
 * Enhancers for the store.
 */
const enhancers = compose(
    /* Add the redux-saga middleware */
    applyMiddleware(sagaMiddleware),
    /* Include the devtools. Comment this out if you don't want to use the dev tools. */
    devToolsEnhancer({}),
) as StoreEnhancer<RootStoreState>;

/**
 * Create the store. We do not include an initial state, as each of the module / duck
 * reducers includes its own initial state.
 */
export const store = createStore<RootStoreState>(reducer, enhancers);

/* Run the root saga */
sagaMiddleware.run(rootSaga);

/* Create the authentication config */
setAuthConfig({
    apiBase: '/api',
    clientId: 'test',
    clientSecret: 'secret',
});
