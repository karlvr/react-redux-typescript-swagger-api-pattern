export interface FetchAPI {
    (url: string, init?: any): Promise<any>;
}
export interface FetchArgs {
    url: string;
    options: any;
}
export declare class BaseAPI {
    basePath: string;
    fetch: FetchAPI;
    constructor(fetch?: FetchAPI, basePath?: string);
}
export interface ApiResponse {
    "code"?: number;
    "type"?: string;
    "message"?: string;
}
export interface Category {
    "id"?: number;
    "name"?: string;
}
export interface Order {
    "id"?: number;
    "petId"?: number;
    "quantity"?: number;
    "shipDate"?: Date;
    /**
     * Order Status
     */
    "status"?: OrderStatusEnum;
    "complete"?: boolean;
}
export declare type OrderStatusEnum = "placed" | "approved" | "delivered";
export interface Pet {
    "id"?: number;
    "category"?: Category;
    "name": string;
    "photoUrls": Array<string>;
    "tags"?: Array<Tag>;
    /**
     * pet status in the store
     */
    "status"?: PetStatusEnum;
}
export declare type PetStatusEnum = "available" | "pending" | "sold";
export interface Tag {
    "id"?: number;
    "name"?: string;
}
export interface User {
    "id"?: number;
    "username"?: string;
    "firstName"?: string;
    "lastName"?: string;
    "email"?: string;
    "password"?: string;
    "phone"?: string;
    /**
     * User Status
     */
    "userStatus"?: number;
}
/**
 * PetApi - fetch parameter creator
 */
export declare const PetApiFetchParamCreator: {
    addPet(params: {
        "body": Pet;
    }, options?: any): FetchArgs;
    deletePet(params: {
        "petId": number;
        "apiKey"?: string;
    }, options?: any): FetchArgs;
    findPetsByStatus(params: {
        "status": string[];
    }, options?: any): FetchArgs;
    findPetsByTags(params: {
        "tags": string[];
    }, options?: any): FetchArgs;
    getPetById(params: {
        "petId": number;
    }, options?: any): FetchArgs;
    updatePet(params: {
        "body": Pet;
    }, options?: any): FetchArgs;
    updatePetWithForm(params: {
        "petId": number;
        "name"?: string;
        "status"?: string;
    }, options?: any): FetchArgs;
    uploadFile(params: {
        "petId": number;
        "additionalMetadata"?: string;
        "file"?: any;
    }, options?: any): FetchArgs;
};
/**
 * PetApi - functional programming interface
 */
export declare const PetApiFp: {
    addPet(params: {
        "body": Pet;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    deletePet(params: {
        "petId": number;
        "apiKey"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    findPetsByStatus(params: {
        "status": string[];
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Pet[]>;
    findPetsByTags(params: {
        "tags": string[];
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Pet[]>;
    getPetById(params: {
        "petId": number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Pet>;
    updatePet(params: {
        "body": Pet;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    updatePetWithForm(params: {
        "petId": number;
        "name"?: string;
        "status"?: string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    uploadFile(params: {
        "petId": number;
        "additionalMetadata"?: string;
        "file"?: any;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<ApiResponse>;
};
/**
 * PetApi - object-oriented interface
 */
export declare class PetApi extends BaseAPI {
    /**
     *
     * @summary Add a new pet to the store
     * @param body Pet object that needs to be added to the store
     */
    addPet(params: {
        "body": Pet;
    }, options?: any): Promise<any>;
    /**
     *
     * @summary Deletes a pet
     * @param petId Pet id to delete
     * @param apiKey
     */
    deletePet(params: {
        "petId": number;
        "apiKey"?: string;
    }, options?: any): Promise<any>;
    /**
     * Multiple status values can be provided with comma separated strings
     * @summary Finds Pets by status
     * @param status Status values that need to be considered for filter
     */
    findPetsByStatus(params: {
        "status": Array<string>;
    }, options?: any): Promise<Pet[]>;
    /**
     * Muliple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @summary Finds Pets by tags
     * @param tags Tags to filter by
     */
    findPetsByTags(params: {
        "tags": Array<string>;
    }, options?: any): Promise<Pet[]>;
    /**
     * Returns a single pet
     * @summary Find pet by ID
     * @param petId ID of pet to return
     */
    getPetById(params: {
        "petId": number;
    }, options?: any): Promise<Pet>;
    /**
     *
     * @summary Update an existing pet
     * @param body Pet object that needs to be added to the store
     */
    updatePet(params: {
        "body": Pet;
    }, options?: any): Promise<any>;
    /**
     *
     * @summary Updates a pet in the store with form data
     * @param petId ID of pet that needs to be updated
     * @param name Updated name of the pet
     * @param status Updated status of the pet
     */
    updatePetWithForm(params: {
        "petId": number;
        "name"?: string;
        "status"?: string;
    }, options?: any): Promise<any>;
    /**
     *
     * @summary uploads an image
     * @param petId ID of pet to update
     * @param additionalMetadata Additional data to pass to server
     * @param file file to upload
     */
    uploadFile(params: {
        "petId": number;
        "additionalMetadata"?: string;
        "file"?: any;
    }, options?: any): Promise<ApiResponse>;
}
/**
 * PetApi - factory interface
 */
export declare const PetApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    addPet(params: {
        "body": Pet;
    }, options?: any): Promise<any>;
    deletePet(params: {
        "petId": number;
        "apiKey"?: string;
    }, options?: any): Promise<any>;
    findPetsByStatus(params: {
        "status": string[];
    }, options?: any): Promise<Pet[]>;
    findPetsByTags(params: {
        "tags": string[];
    }, options?: any): Promise<Pet[]>;
    getPetById(params: {
        "petId": number;
    }, options?: any): Promise<Pet>;
    updatePet(params: {
        "body": Pet;
    }, options?: any): Promise<any>;
    updatePetWithForm(params: {
        "petId": number;
        "name"?: string;
        "status"?: string;
    }, options?: any): Promise<any>;
    uploadFile(params: {
        "petId": number;
        "additionalMetadata"?: string;
        "file"?: any;
    }, options?: any): Promise<ApiResponse>;
};
/**
 * StoreApi - fetch parameter creator
 */
export declare const StoreApiFetchParamCreator: {
    deleteOrder(params: {
        "orderId": number;
    }, options?: any): FetchArgs;
    getInventory(options?: any): FetchArgs;
    getOrderById(params: {
        "orderId": number;
    }, options?: any): FetchArgs;
    placeOrder(params: {
        "body": Order;
    }, options?: any): FetchArgs;
};
/**
 * StoreApi - functional programming interface
 */
export declare const StoreApiFp: {
    deleteOrder(params: {
        "orderId": number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    getInventory(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<{
        [key: string]: number;
    }>;
    getOrderById(params: {
        "orderId": number;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Order>;
    placeOrder(params: {
        "body": Order;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Order>;
};
/**
 * StoreApi - object-oriented interface
 */
export declare class StoreApi extends BaseAPI {
    /**
     * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
     * @summary Delete purchase order by ID
     * @param orderId ID of the order that needs to be deleted
     */
    deleteOrder(params: {
        "orderId": number;
    }, options?: any): Promise<any>;
    /**
     * Returns a map of status codes to quantities
     * @summary Returns pet inventories by status
     */
    getInventory(options?: any): Promise<{
        [key: string]: number;
    }>;
    /**
     * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
     * @summary Find purchase order by ID
     * @param orderId ID of pet that needs to be fetched
     */
    getOrderById(params: {
        "orderId": number;
    }, options?: any): Promise<Order>;
    /**
     *
     * @summary Place an order for a pet
     * @param body order placed for purchasing the pet
     */
    placeOrder(params: {
        "body": Order;
    }, options?: any): Promise<Order>;
}
/**
 * StoreApi - factory interface
 */
export declare const StoreApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    deleteOrder(params: {
        "orderId": number;
    }, options?: any): Promise<any>;
    getInventory(options?: any): Promise<{
        [key: string]: number;
    }>;
    getOrderById(params: {
        "orderId": number;
    }, options?: any): Promise<Order>;
    placeOrder(params: {
        "body": Order;
    }, options?: any): Promise<Order>;
};
/**
 * UserApi - fetch parameter creator
 */
export declare const UserApiFetchParamCreator: {
    createUser(params: {
        "body": User;
    }, options?: any): FetchArgs;
    createUsersWithArrayInput(params: {
        "body": User[];
    }, options?: any): FetchArgs;
    createUsersWithListInput(params: {
        "body": User[];
    }, options?: any): FetchArgs;
    deleteUser(params: {
        "username": string;
    }, options?: any): FetchArgs;
    getUserByName(params: {
        "username": string;
    }, options?: any): FetchArgs;
    loginUser(params: {
        "username": string;
        "password": string;
    }, options?: any): FetchArgs;
    logoutUser(options?: any): FetchArgs;
    updateUser(params: {
        "username": string;
        "body": User;
    }, options?: any): FetchArgs;
};
/**
 * UserApi - functional programming interface
 */
export declare const UserApiFp: {
    createUser(params: {
        "body": User;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    createUsersWithArrayInput(params: {
        "body": User[];
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    createUsersWithListInput(params: {
        "body": User[];
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    deleteUser(params: {
        "username": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    getUserByName(params: {
        "username": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<User>;
    loginUser(params: {
        "username": string;
        "password": string;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<string>;
    logoutUser(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
    updateUser(params: {
        "username": string;
        "body": User;
    }, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<any>;
};
/**
 * UserApi - object-oriented interface
 */
export declare class UserApi extends BaseAPI {
    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param body Created user object
     */
    createUser(params: {
        "body": User;
    }, options?: any): Promise<any>;
    /**
     *
     * @summary Creates list of users with given input array
     * @param body List of user object
     */
    createUsersWithArrayInput(params: {
        "body": Array<User>;
    }, options?: any): Promise<any>;
    /**
     *
     * @summary Creates list of users with given input array
     * @param body List of user object
     */
    createUsersWithListInput(params: {
        "body": Array<User>;
    }, options?: any): Promise<any>;
    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param username The name that needs to be deleted
     */
    deleteUser(params: {
        "username": string;
    }, options?: any): Promise<any>;
    /**
     *
     * @summary Get user by user name
     * @param username The name that needs to be fetched. Use user1 for testing.
     */
    getUserByName(params: {
        "username": string;
    }, options?: any): Promise<User>;
    /**
     *
     * @summary Logs user into the system
     * @param username The user name for login
     * @param password The password for login in clear text
     */
    loginUser(params: {
        "username": string;
        "password": string;
    }, options?: any): Promise<string>;
    /**
     *
     * @summary Logs out current logged in user session
     */
    logoutUser(options?: any): Promise<any>;
    /**
     * This can only be done by the logged in user.
     * @summary Updated user
     * @param username name that need to be updated
     * @param body Updated user object
     */
    updateUser(params: {
        "username": string;
        "body": User;
    }, options?: any): Promise<any>;
}
/**
 * UserApi - factory interface
 */
export declare const UserApiFactory: (fetch?: FetchAPI, basePath?: string) => {
    createUser(params: {
        "body": User;
    }, options?: any): Promise<any>;
    createUsersWithArrayInput(params: {
        "body": User[];
    }, options?: any): Promise<any>;
    createUsersWithListInput(params: {
        "body": User[];
    }, options?: any): Promise<any>;
    deleteUser(params: {
        "username": string;
    }, options?: any): Promise<any>;
    getUserByName(params: {
        "username": string;
    }, options?: any): Promise<User>;
    loginUser(params: {
        "username": string;
        "password": string;
    }, options?: any): Promise<string>;
    logoutUser(options?: any): Promise<any>;
    updateUser(params: {
        "username": string;
        "body": User;
    }, options?: any): Promise<any>;
};
