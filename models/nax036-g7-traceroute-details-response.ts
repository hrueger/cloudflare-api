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
import { NAx036G7TracerouteDetailsResponseTracerouteStats } from './nax036-g7-traceroute-details-response-traceroute-stats';
import { NAx036G7TracerouteDetailsResponseTracerouteStatsByColo } from './nax036-g7-traceroute-details-response-traceroute-stats-by-colo';
/**
 * 
 * @export
 * @interface NAx036G7TracerouteDetailsResponse
 */
export interface NAx036G7TracerouteDetailsResponse {
    /**
     * The host of the Traceroute synthetic application test
     * @type {string}
     * @memberof NAx036G7TracerouteDetailsResponse
     */
    host: string;
    /**
     * The interval at which the Traceroute synthetic application test is set to run.
     * @type {string}
     * @memberof NAx036G7TracerouteDetailsResponse
     */
    interval: string;
    /**
     * 
     * @type {string}
     * @memberof NAx036G7TracerouteDetailsResponse
     */
    kind: string;
    /**
     * The name of the Traceroute synthetic application test
     * @type {string}
     * @memberof NAx036G7TracerouteDetailsResponse
     */
    name: string;
    /**
     * 
     * @type {NAx036G7TracerouteDetailsResponseTracerouteStats}
     * @memberof NAx036G7TracerouteDetailsResponse
     */
    tracerouteStats?: NAx036G7TracerouteDetailsResponseTracerouteStats;
    /**
     * 
     * @type {Array<NAx036G7TracerouteDetailsResponseTracerouteStatsByColo>}
     * @memberof NAx036G7TracerouteDetailsResponse
     */
    tracerouteStatsByColo?: Array<NAx036G7TracerouteDetailsResponseTracerouteStatsByColo>;
}
