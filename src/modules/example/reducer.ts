import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { produce } from 'immer'

/* Import our module's actions */
import * as actions from './actions'

/**
 * Export the StoreState interface for this module. We always name this interface
 * `StoreState` so it is consistent across each of our modules.
 * All of the properties in the interface should be annotated `readonly`, as should
 * all of the properties down the tree.
 */
interface MutableStoreState {
	name: string
}

export type StoreState = DeepReadonly<MutableStoreState>

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = produce({
	/* Note that we end each property with a comma, so we can add new properties without modifying this line
	(improve your git diffs!).
	 */
	name: 'React + Redux + Typescript pattern',
}, draft => draft)

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)

/** Reducer function for the exampleAction that returns a new state using an implicit return. */
reducer.case(actions.exampleAction, (state, payload) => produce(state, draft => {
	draft.name = payload.value
}))

/** Reducer function for examplePrimitiveAction that returns a new state using an explicit return. */
reducer.case(actions.examplePrimitiveAction, (state, name) => produce(state, draft => {
	draft.name = name
}))
