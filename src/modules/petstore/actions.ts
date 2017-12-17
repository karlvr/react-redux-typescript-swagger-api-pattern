import actionCreatorFactory, { Action } from 'typescript-fsa';

import { Pet } from './types';

/**
 * The action creator for this module. Note that it contains the module name.
 */
const actionCreator = actionCreatorFactory('Petstore');

export type ReceivePetsPayload = Array<Pet>;
export type ReceivePetsAction = Action<ReceivePetsPayload>;
export const receivePets = actionCreator<ReceivePetsPayload>('RECEIVE_PETS');

export const requestPetsFailed = actionCreator('REQUEST_PETS_FAILED');

export type RequestPetsAction = Action<undefined>;
export const requestPets = actionCreator('REQUEST_PETS');

export interface AddPetPayload {
    name: string;
    photoUrls: Array<string>;
}
export type AddPetAction = Action<AddPetPayload>;
export const addPet = actionCreator<AddPetPayload>('ADD_PET');
