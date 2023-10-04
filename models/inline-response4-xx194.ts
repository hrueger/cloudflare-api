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
import { Mpo6O2coApiResponseCommonFailure } from './mpo6-o2co-api-response-common-failure';
import { Mpo6O2coMessages } from './mpo6-o2co-messages';
import { Mpo6O2coTunnelsCollectionResponse } from './mpo6-o2co-tunnels-collection-response';
/**
 * 
 * @export
 * @interface InlineResponse4XX194
 */
export interface InlineResponse4XX194 extends Mpo6O2coTunnelsCollectionResponse {
    /**
     * 
     * @type {Mpo6O2coMessages}
     * @memberof InlineResponse4XX194
     */
    errors: Mpo6O2coMessages;
    /**
     * 
     * @type {Mpo6O2coMessages}
     * @memberof InlineResponse4XX194
     */
    messages: Mpo6O2coMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX194
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX194
     */
    success: boolean;
}
