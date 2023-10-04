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
import { Ir4bTFI2ApiResponseCollection } from './ir4b-tfi2-api-response-collection';
import { Ir4bTFI2Lists } from './ir4b-tfi2-lists';
import { Ir4bTFI2ResultInfo } from './ir4b-tfi2-result-info';
/**
 * 
 * @export
 * @interface Ir4bTFI2ResponseCollection
 */
export interface Ir4bTFI2ResponseCollection extends Ir4bTFI2ApiResponseCollection {
    /**
     * 
     * @type {Array<Ir4bTFI2Lists>}
     * @memberof Ir4bTFI2ResponseCollection
     */
    result?: Array<Ir4bTFI2Lists>;
}
