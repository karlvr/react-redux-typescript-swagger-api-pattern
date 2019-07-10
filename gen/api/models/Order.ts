// tslint:disable
/**
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Order
 */
export interface Order {
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    id?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    petId?: number;
    /**
     * 
     * @type {number}
     * @memberof Order
     */
    quantity?: number;
    /**
     * 
     * @type {Date}
     * @memberof Order
     */
    shipDate?: Date;
    /**
     * Order Status
     * @type {string}
     * @memberof Order
     */
    status?: OrderStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof Order
     */
    complete?: boolean;
}

export function OrderFromJSON(json: any): Order {
    return {
        'id': !exists(json, 'id') ? undefined : json['id'],
        'petId': !exists(json, 'petId') ? undefined : json['petId'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'shipDate': !exists(json, 'shipDate') ? undefined : new Date(json['shipDate']),
        'status': !exists(json, 'status') ? undefined : json['status'],
        'complete': !exists(json, 'complete') ? undefined : json['complete'],
    };
}

export function OrderToJSON(value?: Order): any {
    if (value === undefined) {
        return undefined;
    }
    return {
        'id': value.id,
        'petId': value.petId,
        'quantity': value.quantity,
        'shipDate': value.shipDate === undefined ? undefined : value.shipDate.toISOString(),
        'status': value.status,
        'complete': value.complete,
    };
}

/**
* @export
* @enum {string}
*/
export enum OrderStatusEnum {
    Placed = 'placed',
    Approved = 'approved',
    Delivered = 'delivered'
}


