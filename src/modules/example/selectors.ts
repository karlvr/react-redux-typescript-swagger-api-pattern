import { RootStoreState } from 'modules/root'

export const selectName = (state: RootStoreState) => state.example.name
