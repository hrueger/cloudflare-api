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
import { Vtu2C1rMApiResponseCommonFailure } from './vtu2-c1r-mapi-response-common-failure';
import { Vtu2C1rMDashboardResponse } from './vtu2-c1r-mdashboard-response';
import { Vtu2C1rMMessages } from './vtu2-c1r-mmessages';
import { Vtu2C1rMQueryResponse } from './vtu2-c1r-mquery-response';
/**
 * 
 * @export
 * @interface InlineResponse4XX365
 */
export interface InlineResponse4XX365 extends Vtu2C1rMDashboardResponse {
    /**
     * 
     * @type {Vtu2C1rMMessages}
     * @memberof InlineResponse4XX365
     */
    errors: Vtu2C1rMMessages;
    /**
     * 
     * @type {Vtu2C1rMMessages}
     * @memberof InlineResponse4XX365
     */
    messages: Vtu2C1rMMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX365
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX365
     */
    success: boolean;
}
