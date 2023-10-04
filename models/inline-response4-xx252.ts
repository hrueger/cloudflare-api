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
import { WAy69x7MApiResponseCommonFailure } from './way69x7-mapi-response-common-failure';
import { WAy69x7MDomainResponseSingle } from './way69x7-mdomain-response-single';
import { WAy69x7MMessages } from './way69x7-mmessages';
/**
 * 
 * @export
 * @interface InlineResponse4XX252
 */
export interface InlineResponse4XX252 extends WAy69x7MDomainResponseSingle {
    /**
     * 
     * @type {WAy69x7MMessages}
     * @memberof InlineResponse4XX252
     */
    errors: WAy69x7MMessages;
    /**
     * 
     * @type {WAy69x7MMessages}
     * @memberof InlineResponse4XX252
     */
    messages: WAy69x7MMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX252
     */
    result: any | null;
    /**
     * Whether the API call was successful.
     * @type {boolean}
     * @memberof InlineResponse4XX252
     */
    success: boolean;
}
