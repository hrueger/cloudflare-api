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
import { R8DzB06NApiResponseSingle } from './r8-dz-b06-napi-response-single';
import { R8DzB06NIndicatorFeedItem } from './r8-dz-b06-nindicator-feed-item';
/**
 * 
 * @export
 * @interface R8DzB06NIndicatorFeedResponseSingle
 */
export interface R8DzB06NIndicatorFeedResponseSingle extends R8DzB06NApiResponseSingle {
    /**
     * 
     * @type {R8DzB06NIndicatorFeedItem}
     * @memberof R8DzB06NIndicatorFeedResponseSingle
     */
    result?: R8DzB06NIndicatorFeedItem;
}
