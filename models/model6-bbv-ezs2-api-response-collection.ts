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
import { Model6BbvEZS2ApiResponseCommon } from './model6-bbv-ezs2-api-response-common';
import { Model6BbvEZS2Messages } from './model6-bbv-ezs2-messages';
import { Model6BbvEZS2ResultInfo } from './model6-bbv-ezs2-result-info';
/**
 * 
 * @export
 * @interface Model6BbvEZS2ApiResponseCollection
 */
export interface Model6BbvEZS2ApiResponseCollection extends Model6BbvEZS2ApiResponseCommon {
    /**
     * 
     * @type {Array<any>}
     * @memberof Model6BbvEZS2ApiResponseCollection
     */
    result?: Array<any> | null;
    /**
     * 
     * @type {Model6BbvEZS2ResultInfo}
     * @memberof Model6BbvEZS2ApiResponseCollection
     */
    resultInfo?: Model6BbvEZS2ResultInfo;
}
