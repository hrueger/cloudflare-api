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
import { VO0Wi1fNApiResponseCommonFailure } from './vo0-wi1f-napi-response-common-failure';
import { VO0Wi1fNApiResponseSingleId } from './vo0-wi1f-napi-response-single-id';
import { VO0Wi1fNMessages } from './vo0-wi1f-nmessages';
/**
 * 
 * @export
 * @interface InlineResponse4xx109
 */
export interface InlineResponse4xx109 extends VO0Wi1fNApiResponseSingleId {
    /**
     * 
     * @type {VO0Wi1fNMessages}
     * @memberof InlineResponse4xx109
     */
    errors: VO0Wi1fNMessages;
    /**
     * 
     * @type {VO0Wi1fNMessages}
     * @memberof InlineResponse4xx109
     */
    messages: VO0Wi1fNMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4xx109
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4xx109
     */
    success: boolean;
}
