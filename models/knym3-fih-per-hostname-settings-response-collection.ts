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
import { KNYM3FIhApiResponseCollection } from './knym3-fih-api-response-collection';
import { KNYM3FIhPerHostnameSettingsResponseCollectionResult } from './knym3-fih-per-hostname-settings-response-collection-result';
import { KNYM3FIhPerHostnameSettingsResponseCollectionResultInfo } from './knym3-fih-per-hostname-settings-response-collection-result-info';
/**
 * 
 * @export
 * @interface KNYM3FIhPerHostnameSettingsResponseCollection
 */
export interface KNYM3FIhPerHostnameSettingsResponseCollection extends KNYM3FIhApiResponseCollection {
    /**
     * 
     * @type {Array<KNYM3FIhPerHostnameSettingsResponseCollectionResult>}
     * @memberof KNYM3FIhPerHostnameSettingsResponseCollection
     */
    result?: Array<KNYM3FIhPerHostnameSettingsResponseCollectionResult>;
    /**
     * 
     * @type {KNYM3FIhPerHostnameSettingsResponseCollectionResultInfo}
     * @memberof KNYM3FIhPerHostnameSettingsResponseCollection
     */
    resultInfo?: KNYM3FIhPerHostnameSettingsResponseCollectionResultInfo;
}
