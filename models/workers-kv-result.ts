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
import { C4f8RoOSResultData } from './c4f8-ro-osresult-data';
import { WorkersKvQuery } from './workers-kv-query';
/**
 * Metrics on Workers KV requests.
 * @export
 * @interface WorkersKvResult
 */
export interface WorkersKvResult {
    /**
     * 
     * @type {Array<C4f8RoOSResultData>}
     * @memberof WorkersKvResult
     */
    data: Array<C4f8RoOSResultData> | null;
    /**
     * Number of seconds between current time and last processed event, i.e. how many seconds of data could be missing.
     * @type {number}
     * @memberof WorkersKvResult
     */
    dataLag: number;
    /**
     * Maximum results for each metric.
     * @type {any}
     * @memberof WorkersKvResult
     */
    max: any;
    /**
     * Minimum results for each metric.
     * @type {any}
     * @memberof WorkersKvResult
     */
    min: any;
    /**
     * 
     * @type {WorkersKvQuery}
     * @memberof WorkersKvResult
     */
    query: WorkersKvQuery;
    /**
     * Total number of rows in the result.
     * @type {number}
     * @memberof WorkersKvResult
     */
    rows: number;
    /**
     * Total results for metrics across all data.
     * @type {any}
     * @memberof WorkersKvResult
     */
    totals: any;
}
