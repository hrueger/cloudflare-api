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
import { LzX4rxF4Priority } from './lz-x4rx-f4-priority';
/**
 * Components of a SRV record.
 * @export
 * @interface LzX4rxF4SRVRecordData
 */
export interface LzX4rxF4SRVRecordData {
    /**
     * A valid hostname.
     * @type {string}
     * @memberof LzX4rxF4SRVRecordData
     */
    name?: string;
    /**
     * The port of the service.
     * @type {number}
     * @memberof LzX4rxF4SRVRecordData
     */
    port?: number;
    /**
     * 
     * @type {LzX4rxF4Priority}
     * @memberof LzX4rxF4SRVRecordData
     */
    priority?: LzX4rxF4Priority;
    /**
     * A valid protocol.
     * @type {string}
     * @memberof LzX4rxF4SRVRecordData
     */
    proto?: string;
    /**
     * A service type, prefixed with an underscore.
     * @type {string}
     * @memberof LzX4rxF4SRVRecordData
     */
    service?: string;
    /**
     * A valid hostname.
     * @type {string}
     * @memberof LzX4rxF4SRVRecordData
     */
    target?: string;
    /**
     * The record weight.
     * @type {number}
     * @memberof LzX4rxF4SRVRecordData
     */
    weight?: number;
}