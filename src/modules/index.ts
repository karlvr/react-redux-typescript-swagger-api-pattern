import { createStore, combineReducers, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension/logOnlyInProduction';

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
    // readonly another: another.StoreState;
}

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
const reducer = combineReducers<RootStoreState>({
    template: template.reducer,
    // another: another.reducer,
});

/**
 * Enhancers for the store.
 */
const enhancers = compose(
    /* Include the devtools. Comment this out if you don't want to use the dev tools. */
    devToolsEnhancer({}),
);

/**
 * Create the store. We do not include an initial state, as each of the module / duck
 * reducers includes its own initial state.
 */
export const store = createStore<RootStoreState>(reducer, enhancers);
