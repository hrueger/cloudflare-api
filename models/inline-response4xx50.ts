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
import { Mpo6O2coComponentsSchemasTunnelModifiedResponse } from './mpo6-o2co-components-schemas-tunnel-modified-response';
import { Mpo6O2coMessages } from './mpo6-o2co-messages';
/**
 * 
 * @export
 * @interface InlineResponse4xx50
 */
export interface InlineResponse4xx50 extends Mpo6O2coComponentsSchemasTunnelModifiedResponse {
    /**
     * 
     * @type {Mpo6O2coMessages}
     * @memberof InlineResponse4xx50
     */
    errors: Mpo6O2coMessages;
    /**
     * 
     * @type {Mpo6O2coMessages}
     * @memberof InlineResponse4xx50
     */
    messages: Mpo6O2coMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4xx50
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4xx50
     */
    success: boolean;
}
