import { combineReducers } from "redux"

/* Import reducers from our modules */
import * as template from 'modules/template/reducer'
import * as auth from 'modules/auth/reducer'
import * as petstore from 'modules/petstore/reducer'

/**
 * The root store state. Include sub-states for all of the modules / ducks.
 * All of these should be annotated `readonly`, as should everything down
 * the tree of StoreState interfaces, and their contents.
 */
interface MutableStoreState {
	template: template.StoreState
	auth: auth.StoreState
	petstore: petstore.StoreState
}

export type StoreState = DeepReadonly<MutableStoreState>

/**
 * The root reducer, combines reducers for all of the modules / ducks.
 */
export const reducer = combineReducers({
	template: template.reducer,
	auth: auth.reducer,
	petstore: petstore.reducer,
})
