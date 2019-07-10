import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { produce } from 'immer'

/* Import our module files */
import * as actions from './actions'
import { Pet } from './types'

/**
 * Export the StoreState interface for this module. We always name this interface
 * `StoreState` so it is consistent across each of our modules.
 * All of the properties in the interface should be annotated `readonly`, as should
 * all of the properties down the tree.
 */
interface MutableStoreState {
	pets: Pet[]
	error?: Error
	saving: boolean
}

export type StoreState = DeepReadonly<MutableStoreState>

/**
 * The initial store state for this module.
 */
const INITIAL_STATE: StoreState = produce({
	pets: [],
	saving: false,
}, () => {})

/**
 * Reducer function for this module.
 */
export const reducer = reducerWithInitialState(INITIAL_STATE)

reducer.case(actions.requestPets.started, (state) => produce(state, draft => {
	draft.pets = []
}))

reducer.case(actions.requestPets.done, (state, { result: pets }) => produce(state, draft => {
	draft.pets = pets
}))

reducer.case(actions.requestPets.failed, (state, { error }) => produce(state, draft => {
	draft.error = error
}))

reducer.case(actions.addPet.started, (state, payload) => produce(state as MutableStoreState, draft => {
	/* Add the new pet to our state (at the start) so it appears optimistically. */
	draft.pets.unshift(payload)
	draft.saving = true
	draft.error = undefined
}))

reducer.case(actions.addPet.done, (state, { result }) => produce(state, draft => {
	draft.saving = false
}))

reducer.case(actions.addPet.failed, (state, { error }) => produce(state, draft => {
	draft.saving = false
	draft.error = error
}))
