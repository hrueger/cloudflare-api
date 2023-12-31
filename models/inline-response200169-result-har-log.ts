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
import { InlineResponse200169ResultHarLogCreator } from './inline-response200169-result-har-log-creator';
import { InlineResponse200169ResultHarLogEntries } from './inline-response200169-result-har-log-entries';
import { InlineResponse200169ResultHarLogPages } from './inline-response200169-result-har-log-pages';
/**
 * 
 * @export
 * @interface InlineResponse200169ResultHarLog
 */
export interface InlineResponse200169ResultHarLog {
    /**
     * 
     * @type {InlineResponse200169ResultHarLogCreator}
     * @memberof InlineResponse200169ResultHarLog
     */
    creator: InlineResponse200169ResultHarLogCreator;
    /**
     * 
     * @type {Array<InlineResponse200169ResultHarLogEntries>}
     * @memberof InlineResponse200169ResultHarLog
     */
    entries: Array<InlineResponse200169ResultHarLogEntries>;
    /**
     * 
     * @type {Array<InlineResponse200169ResultHarLogPages>}
     * @memberof InlineResponse200169ResultHarLog
     */
    pages: Array<InlineResponse200169ResultHarLogPages>;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200169ResultHarLog
     */
    version: string;
}
