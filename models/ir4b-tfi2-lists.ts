/* tslint:disable */
/* eslint-disable */
/**
 * Cloudflare API
 * Interact with Cloudflare's products and services via the Cloudflare API.  Using the Cloudflare API requires authentication so that Cloudflare knows who is making requests and what permissions you have. Create an API token to grant access to the API to perform actions.  To create an API token, from the Cloudflare dashboard, go to My Profile > API Tokens and select Create Token. For more information on how to create and troubleshoot API tokens, refer to our [API fundamentals](https://developers.cloudflare.com/fundamentals/api/).  Totally new to Cloudflare? [Start here](https://developers.cloudflare.com/fundamentals/get-started/).
 *
 * OpenAPI spec version: 4.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Ir4bTFI2Count } from './ir4b-tfi2-count';
import { Ir4bTFI2Description } from './ir4b-tfi2-description';
import { Ir4bTFI2Name } from './ir4b-tfi2-name';
import { Ir4bTFI2Timestamp } from './ir4b-tfi2-timestamp';
import { Ir4bTFI2Type } from './ir4b-tfi2-type';
import { Ir4bTFI2Uuid } from './ir4b-tfi2-uuid';
/**
 * 
 * @export
 * @interface Ir4bTFI2Lists
 */
export interface Ir4bTFI2Lists {
    /**
     * 
     * @type {Ir4bTFI2Count}
     * @memberof Ir4bTFI2Lists
     */
    count?: Ir4bTFI2Count;
    /**
     * 
     * @type {Ir4bTFI2Timestamp}
     * @memberof Ir4bTFI2Lists
     */
    createdAt?: Ir4bTFI2Timestamp;
    /**
     * 
     * @type {Ir4bTFI2Description}
     * @memberof Ir4bTFI2Lists
     */
    description?: Ir4bTFI2Description;
    /**
     * 
     * @type {Ir4bTFI2Uuid}
     * @memberof Ir4bTFI2Lists
     */
    id?: Ir4bTFI2Uuid;
    /**
     * 
     * @type {Ir4bTFI2Name}
     * @memberof Ir4bTFI2Lists
     */
    name?: Ir4bTFI2Name;
    /**
     * 
     * @type {Ir4bTFI2Type}
     * @memberof Ir4bTFI2Lists
     */
    type?: Ir4bTFI2Type;
    /**
     * 
     * @type {Ir4bTFI2Timestamp}
     * @memberof Ir4bTFI2Lists
     */
    updatedAt?: Ir4bTFI2Timestamp;
}
