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
import { NAx036G7TestStatOverTime } from './nax036-g7-test-stat-over-time';
import { NAx036G7TestStatPctOverTime } from './nax036-g7-test-stat-pct-over-time';
/**
 * 
 * @export
 * @interface NAx036G7TracerouteDetailsResponseTracerouteStats
 */
export interface NAx036G7TracerouteDetailsResponseTracerouteStats {
    /**
     * 
     * @type {NAx036G7TestStatPctOverTime}
     * @memberof NAx036G7TracerouteDetailsResponseTracerouteStats
     */
    availabilityPct: NAx036G7TestStatPctOverTime;
    /**
     * 
     * @type {NAx036G7TestStatOverTime}
     * @memberof NAx036G7TracerouteDetailsResponseTracerouteStats
     */
    hopsCount: NAx036G7TestStatOverTime;
    /**
     * 
     * @type {NAx036G7TestStatPctOverTime}
     * @memberof NAx036G7TracerouteDetailsResponseTracerouteStats
     */
    packetLossPct: NAx036G7TestStatPctOverTime;
    /**
     * 
     * @type {NAx036G7TestStatOverTime}
     * @memberof NAx036G7TracerouteDetailsResponseTracerouteStats
     */
    roundTripTimeMs: NAx036G7TestStatOverTime;
    /**
     * Count of unique devices that have run this test in the given time period
     * @type {number}
     * @memberof NAx036G7TracerouteDetailsResponseTracerouteStats
     */
    uniqueDevicesTotal: number;
}
