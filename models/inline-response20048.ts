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
import { C4f8RoOSApiResponseCollection } from './c4f8-ro-osapi-response-collection';
import { C4f8RoOSQueue } from './c4f8-ro-osqueue';
import { InlineResponse20048ResultInfo } from './inline-response20048-result-info';
/**
 * 
 * @export
 * @interface InlineResponse20048
 */
export interface InlineResponse20048 extends C4f8RoOSApiResponseCollection {
    /**
     * 
     * @type {any}
     * @memberof InlineResponse20048
     */
    errors?: any | null;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse20048
     */
    messages?: any | null;
    /**
     * 
     * @type {InlineResponse20048ResultInfo}
     * @memberof InlineResponse20048
     */
    resultInfo?: InlineResponse20048ResultInfo;
    /**
     * 
     * @type {Array<C4f8RoOSQueue>}
     * @memberof InlineResponse20048
     */
    result?: Array<C4f8RoOSQueue>;
}
