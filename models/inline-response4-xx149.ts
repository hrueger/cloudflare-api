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
import { AJ99RMSzApiResponseCommonFailure } from './aj99-rmsz-api-response-common-failure';
import { AJ99RMSzMessages } from './aj99-rmsz-messages';
import { AJ99RMSzTracerouteResponseCollection } from './aj99-rmsz-traceroute-response-collection';
/**
 * 
 * @export
 * @interface InlineResponse4XX149
 */
export interface InlineResponse4XX149 extends AJ99RMSzTracerouteResponseCollection {
    /**
     * 
     * @type {AJ99RMSzMessages}
     * @memberof InlineResponse4XX149
     */
    errors: AJ99RMSzMessages;
    /**
     * 
     * @type {AJ99RMSzMessages}
     * @memberof InlineResponse4XX149
     */
    messages: AJ99RMSzMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX149
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX149
     */
    success: boolean;
}