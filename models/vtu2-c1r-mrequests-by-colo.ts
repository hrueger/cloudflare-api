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
 * Breakdown of totals for requests.
 * @export
 * @interface Vtu2C1rMRequestsByColo
 */
export interface Vtu2C1rMRequestsByColo {
    /**
     * Total number of requests served.
     * @type {number}
     * @memberof Vtu2C1rMRequestsByColo
     */
    all?: number;
    /**
     * Total number of cached requests served.
     * @type {number}
     * @memberof Vtu2C1rMRequestsByColo
     */
    cached?: number;
    /**
     * Key/value pairs where the key is a two-digit country code and the value is the number of requests served to that country.
     * @type {{ [key: string]: any; }}
     * @memberof Vtu2C1rMRequestsByColo
     */
    country?: { [key: string]: any; };
    /**
     * A variable list of key/value pairs where the key is a HTTP status code and the value is the number of requests with that code served.
     * @type {any}
     * @memberof Vtu2C1rMRequestsByColo
     */
    httpStatus?: any;
    /**
     * Total number of requests served from the origin.
     * @type {number}
     * @memberof Vtu2C1rMRequestsByColo
     */
    uncached?: number;
}
