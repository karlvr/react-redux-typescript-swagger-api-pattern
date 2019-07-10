import { reducerWithInitialState } from 'typescript-fsa-reducers'

/* Import our module files */
import * as actions from './actions'
import { Pet } from './types'

/**
 * Export the StoreState interface for this module. We always name this interface
 * `StoreState` so it is consistent across each of our modules.
 * All of the properties in the interface should be annotated `readonly`, as should
 * all of the properties down the tree.
 */
export interface StoreState {
	readonly pets: ReadonlyArray<Pet>
	readonly error?: Error
	readonly saving: boolean
}

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = {
	pets: [],
	saving: false,
}

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)
reducer.case(actions.requestPets.started, (state) => ({
	...state, pets: [],
}))

reducer.case(actions.requestPets.done, (state, { result: pets }) => ({
	...state, pets,
}))

reducer.case(actions.requestPets.failed, (state, { error }) => ({
	...state, error,
}))

reducer.case(actions.addPet.started, (state, payload) => {
	/* Add the new pet to our state (at the start) so it appears optimistically. */
	return {
		...state, pets: [ payload, ...state.pets ], saving: true, error: undefined,
	}
})

reducer.case(actions.addPet.done, (state, { result }) => ({
	...state, saving: false,
}))

reducer.case(actions.addPet.failed, (state, { error }) => ({
	...state, saving: false, error,
}))
