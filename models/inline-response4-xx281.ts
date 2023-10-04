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
import { Model2UOufITZApiResponseCommonFailure } from './model2-uouf-itzapi-response-common-failure';
import { Model2UOufITZForceResponse } from './model2-uouf-itzforce-response';
import { Model2UOufITZMessages } from './model2-uouf-itzmessages';
/**
 * 
 * @export
 * @interface InlineResponse4XX281
 */
export interface InlineResponse4XX281 extends Model2UOufITZForceResponse {
    /**
     * 
     * @type {Model2UOufITZMessages}
     * @memberof InlineResponse4XX281
     */
    errors: Model2UOufITZMessages;
    /**
     * 
     * @type {Model2UOufITZMessages}
     * @memberof InlineResponse4XX281
     */
    messages: Model2UOufITZMessages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX281
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX281
     */
    success: boolean;
}
