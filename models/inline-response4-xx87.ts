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
import { T2xGLLqvApiResponseCommonFailure } from './t2x-gllqv-api-response-common-failure';
import { T2xGLLqvMessages } from './t2x-gllqv-messages';
import { T2xGLLqvTunnelConnectionsResponse } from './t2x-gllqv-tunnel-connections-response';
/**
 * 
 * @export
 * @interface InlineResponse4XX87
 */
export interface InlineResponse4XX87 extends T2xGLLqvTunnelConnectionsResponse {
    /**
     * 
     * @type {T2xGLLqvMessages}
     * @memberof InlineResponse4XX87
     */
    errors: T2xGLLqvMessages;
    /**
     * 
     * @type {T2xGLLqvMessages}
     * @memberof InlineResponse4XX87
     */
    messages: T2xGLLqvMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX87
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX87
     */
    success: boolean;
}
