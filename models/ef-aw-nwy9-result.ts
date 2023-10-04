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
import { EfAwNWy9Data } from './ef-aw-nwy9-data';
import { EfAwNWy9Query } from './ef-aw-nwy9-query';
/**
 * 
 * @export
 * @interface EfAwNWy9Result
 */
export interface EfAwNWy9Result {
    /**
     * 
     * @type {EfAwNWy9Data}
     * @memberof EfAwNWy9Result
     */
    data: EfAwNWy9Data;
    /**
     * Number of seconds between current time and last processed event, in another words how many seconds of data could be missing.
     * @type {number}
     * @memberof EfAwNWy9Result
     */
    dataLag: number;
    /**
     * Maximum results for each metric (object mapping metric names to values). Currently always an empty object.
     * @type {any}
     * @memberof EfAwNWy9Result
     */
    max: any;
    /**
     * Minimum results for each metric (object mapping metric names to values). Currently always an empty object.
     * @type {any}
     * @memberof EfAwNWy9Result
     */
    min: any;
    /**
     * 
     * @type {EfAwNWy9Query}
     * @memberof EfAwNWy9Result
     */
    query: EfAwNWy9Query;
    /**
     * Total number of rows in the result.
     * @type {number}
     * @memberof EfAwNWy9Result
     */
    rows: number;
    /**
     * Total results for metrics across all data (object mapping metric names to values).
     * @type {any}
     * @memberof EfAwNWy9Result
     */
    totals: any;
}
