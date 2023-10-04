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
import { Model5gqLs0vOApiResponseCommon } from './model5gq-ls0v-oapi-response-common';
import { Model5gqLs0vOMessages } from './model5gq-ls0v-omessages';
import { Model5gqLs0vOResultInfo } from './model5gq-ls0v-oresult-info';
/**
 * 
 * @export
 * @interface Model5gqLs0vOApiResponseCollection
 */
export interface Model5gqLs0vOApiResponseCollection extends Model5gqLs0vOApiResponseCommon {
    /**
     * 
     * @type {Array<any>}
     * @memberof Model5gqLs0vOApiResponseCollection
     */
    result?: Array<any> | null;
    /**
     * 
     * @type {Model5gqLs0vOResultInfo}
     * @memberof Model5gqLs0vOApiResponseCollection
     */
    resultInfo?: Model5gqLs0vOResultInfo;
}
