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
import { Model8INyb3jSApiResponseCommonFailure } from './model8-inyb3j-sapi-response-common-failure';
import { Model8INyb3jSDnsFirewallSingleResponse } from './model8-inyb3j-sdns-firewall-single-response';
import { Model8INyb3jSMessages } from './model8-inyb3j-smessages';
/**
 * 
 * @export
 * @interface InlineResponse4XX124
 */
export interface InlineResponse4XX124 extends Model8INyb3jSDnsFirewallSingleResponse {
    /**
     * 
     * @type {Model8INyb3jSMessages}
     * @memberof InlineResponse4XX124
     */
    errors: Model8INyb3jSMessages;
    /**
     * 
     * @type {Model8INyb3jSMessages}
     * @memberof InlineResponse4XX124
     */
    messages: Model8INyb3jSMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX124
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX124
     */
    success: boolean;
}
