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
import { WaitingroomApiResponseCommonFailure } from './waitingroom-api-response-common-failure';
import { WaitingroomMessages } from './waitingroom-messages';
import { WaitingroomPreviewResponse } from './waitingroom-preview-response';
/**
 * 
 * @export
 * @interface InlineResponse4XX318
 */
export interface InlineResponse4XX318 extends WaitingroomPreviewResponse {
    /**
     * 
     * @type {WaitingroomMessages}
     * @memberof InlineResponse4XX318
     */
    errors: WaitingroomMessages;
    /**
     * 
     * @type {WaitingroomMessages}
     * @memberof InlineResponse4XX318
     */
    messages: WaitingroomMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX318
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX318
     */
    success: boolean;
}
