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
import { VmrjA5DJApiResponseCommonFailure } from './vmrj-a5-djapi-response-common-failure';
import { VmrjA5DJFullResponse } from './vmrj-a5-djfull-response';
import { VmrjA5DJMessages } from './vmrj-a5-djmessages';
/**
 * 
 * @export
 * @interface InlineResponse4XX159
 */
export interface InlineResponse4XX159 extends VmrjA5DJFullResponse {
    /**
     * 
     * @type {VmrjA5DJMessages}
     * @memberof InlineResponse4XX159
     */
    errors: VmrjA5DJMessages;
    /**
     * 
     * @type {VmrjA5DJMessages}
     * @memberof InlineResponse4XX159
     */
    messages: VmrjA5DJMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX159
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX159
     */
    success: boolean;
}
