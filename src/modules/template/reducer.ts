import { reducerWithInitialState } from 'typescript-fsa-reducers'

/* Import our module's actions */
import * as actions from './actions'

/**
 * Export the StoreState interface for this module. We always name this interface
 * `StoreState` so it is consistent across each of our modules.
 * All of the properties in the interface should be annotated `readonly`, as should
 * all of the properties down the tree.
 */
export interface StoreState {
	readonly name: string
}

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = {
	/* Note that we end each property with a comma, so we can add new properties without modifying this line
    (improve your git diffs!).
     */
	name: 'React + Redux + Typescript pattern',
}

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)

/* Reducer function for the exampleAction that returns a new state using an implicit return. */
reducer.case(actions.exampleAction, (state, payload) => ({
	...state, name: payload.value,
}))

/* Reducer function for examplePrimitiveAction that returns a new state using an explicit return. */
reducer.case(actions.examplePrimitiveAction, (state, name) => {
	return { ...state, name }
})
