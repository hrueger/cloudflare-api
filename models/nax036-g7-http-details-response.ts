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
import { NAx036G7HttpDetailsResponseHttpStats } from './nax036-g7-http-details-response-http-stats';
import { NAx036G7HttpDetailsResponseHttpStatsByColo } from './nax036-g7-http-details-response-http-stats-by-colo';
/**
 * 
 * @export
 * @interface NAx036G7HttpDetailsResponse
 */
export interface NAx036G7HttpDetailsResponse {
    /**
     * The url of the HTTP synthetic application test
     * @type {string}
     * @memberof NAx036G7HttpDetailsResponse
     */
    host: string;
    /**
     * 
     * @type {NAx036G7HttpDetailsResponseHttpStats}
     * @memberof NAx036G7HttpDetailsResponse
     */
    httpStats?: NAx036G7HttpDetailsResponseHttpStats;
    /**
     * 
     * @type {Array<NAx036G7HttpDetailsResponseHttpStatsByColo>}
     * @memberof NAx036G7HttpDetailsResponse
     */
    httpStatsByColo?: Array<NAx036G7HttpDetailsResponseHttpStatsByColo>;
    /**
     * The interval at which the HTTP synthetic application test is set to run.
     * @type {string}
     * @memberof NAx036G7HttpDetailsResponse
     */
    interval: string;
    /**
     * 
     * @type {string}
     * @memberof NAx036G7HttpDetailsResponse
     */
    kind: string;
    /**
     * The HTTP method to use when running the test
     * @type {string}
     * @memberof NAx036G7HttpDetailsResponse
     */
    method: string;
    /**
     * The name of the HTTP synthetic application test
     * @type {string}
     * @memberof NAx036G7HttpDetailsResponse
     */
    name: string;
}