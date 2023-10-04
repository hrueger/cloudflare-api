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
/**
 * 
 * @export
 * @interface BillSubsApiResultInfo
 */
export interface BillSubsApiResultInfo {
    /**
     * Total number of results for the requested service
     * @type {number}
     * @memberof BillSubsApiResultInfo
     */
    count?: number;
    /**
     * Current page within paginated list of results
     * @type {number}
     * @memberof BillSubsApiResultInfo
     */
    page?: number;
    /**
     * Number of results per page of results
     * @type {number}
     * @memberof BillSubsApiResultInfo
     */
    perPage?: number;
    /**
     * Total results available without any search parameters
     * @type {number}
     * @memberof BillSubsApiResultInfo
     */
    totalCount?: number;
}
