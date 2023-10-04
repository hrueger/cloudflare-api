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
import { Cb6wd4cIMessages } from './cb6wd4c-imessages';
/**
 * 
 * @export
 * @interface Cb6wd4cIApiResponseCommon
 */
export interface Cb6wd4cIApiResponseCommon {
    /**
     * 
     * @type {Cb6wd4cIMessages}
     * @memberof Cb6wd4cIApiResponseCommon
     */
    errors: Cb6wd4cIMessages;
    /**
     * 
     * @type {Cb6wd4cIMessages}
     * @memberof Cb6wd4cIApiResponseCommon
     */
    messages: Cb6wd4cIMessages;
    /**
     * 
     * @type {any | Array<any> | string}
     * @memberof Cb6wd4cIApiResponseCommon
     */
    result: any | Array<any> | string;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof Cb6wd4cIApiResponseCommon
     */
    success: boolean;
}
