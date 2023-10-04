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
import { R8DzB06NApiResponseCommonFailure } from './r8-dz-b06-napi-response-common-failure';
import { R8DzB06NIndicatorFeedMetadataResponse } from './r8-dz-b06-nindicator-feed-metadata-response';
import { R8DzB06NMessages } from './r8-dz-b06-nmessages';
/**
 * 
 * @export
 * @interface InlineResponse4XX99
 */
export interface InlineResponse4XX99 extends R8DzB06NIndicatorFeedMetadataResponse {
    /**
     * 
     * @type {R8DzB06NMessages}
     * @memberof InlineResponse4XX99
     */
    errors: R8DzB06NMessages;
    /**
     * 
     * @type {R8DzB06NMessages}
     * @memberof InlineResponse4XX99
     */
    messages: R8DzB06NMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX99
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX99
     */
    success: boolean;
}