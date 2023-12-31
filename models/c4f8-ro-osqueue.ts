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
import { C4f8RoOSQueuesComponentsSchemasName } from './c4f8-ro-osqueues-components-schemas-name';
/**
 * 
 * @export
 * @interface C4f8RoOSQueue
 */
export interface C4f8RoOSQueue {
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    consumers?: any;
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    consumersTotalCount?: any;
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    createdOn?: any;
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    modifiedOn?: any;
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    producers?: any;
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    producersTotalCount?: any;
    /**
     * 
     * @type {any}
     * @memberof C4f8RoOSQueue
     */
    queueId?: any;
    /**
     * 
     * @type {C4f8RoOSQueuesComponentsSchemasName}
     * @memberof C4f8RoOSQueue
     */
    queueName?: C4f8RoOSQueuesComponentsSchemasName;
}
