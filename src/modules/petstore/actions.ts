import actionCreatorFactory, { Action } from 'typescript-fsa';

import { Pet } from './types';

/**
 * The action creator for this module. Note that it contains the module name.
 */
const actionCreator = actionCreatorFactory('Petstore');

export type RequestPetsSuccessPayload = Array<Pet>;
export type RequestPetsAction = Action<undefined>;
export const requestPets = actionCreator.async<undefined, RequestPetsSuccessPayload, Error>('REQUEST_PETS');

export interface AddPetPayload {
    name: string;
    photoUrls: Array<string>;
}
export type AddPetAction = Action<AddPetPayload>;
export const addPet = actionCreator.async<AddPetPayload, {}, Error>('ADD_PET');
