import { RootStoreState } from 'modules/root'

export const selectSaving = (state: RootStoreState) => state.petstore.saving
export const selectError = (state: RootStoreState) => state.petstore.error
export const selectPets = (state: RootStoreState) => state.petstore.pets
