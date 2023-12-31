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
 * @interface YPqzrK6GTrend
 */
export interface YPqzrK6GTrend {
    /**
     * Cumulative Layout Shift trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    cls?: Array<number>;
    /**
     * First Contentful Paint trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    fcp?: Array<number>;
    /**
     * Largest Contentful Paint trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    lcp?: Array<number>;
    /**
     * The Lighthouse score trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    performanceScore?: Array<number>;
    /**
     * Speed Index trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    si?: Array<number>;
    /**
     * Total Blocking Time trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    tbt?: Array<number>;
    /**
     * Time To First Byte trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    ttfb?: Array<number>;
    /**
     * Time To Interactive trend.
     * @type {Array<number>}
     * @memberof YPqzrK6GTrend
     */
    tti?: Array<number>;
}
