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
import { InlineResponse4001Messages } from './inline-response4001-messages';
import { InlineResponse409ResultScannedFrom } from './inline-response409-result-scanned-from';
/**
 * 
 * @export
 * @interface InlineResponse409ResultTasks
 */
export interface InlineResponse409ResultTasks {
    /**
     * Submitter location
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    clientLocation: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    clientType: InlineResponse409ResultTasksClientTypeEnum;
    /**
     * URL of the primary request, after all HTTP redirects
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    effectiveUrl: string;
    /**
     * 
     * @type {Array<InlineResponse4001Messages>}
     * @memberof InlineResponse409ResultTasks
     */
    errors: Array<InlineResponse4001Messages>;
    /**
     * 
     * @type {InlineResponse409ResultScannedFrom}
     * @memberof InlineResponse409ResultTasks
     */
    scannedFrom: InlineResponse409ResultScannedFrom;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    status: InlineResponse409ResultTasksStatusEnum;
    /**
     * 
     * @type {boolean}
     * @memberof InlineResponse409ResultTasks
     */
    success: boolean;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    time: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    timeEnd: string;
    /**
     * Submitted URL
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    url: string;
    /**
     * Scan ID
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse409ResultTasks
     */
    visibility: InlineResponse409ResultTasksVisibilityEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum InlineResponse409ResultTasksClientTypeEnum {
    Site = 'Site',
    Automatic = 'Automatic',
    Api = 'Api'
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse409ResultTasksStatusEnum {
    Queued = 'Queued',
    InProgress = 'InProgress',
    InPostProcessing = 'InPostProcessing',
    Finished = 'Finished'
}
/**
    * @export
    * @enum {string}
    */
export enum InlineResponse409ResultTasksVisibilityEnum {
    Public = 'Public',
    Unlisted = 'Unlisted'
}

