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
import { NAx036G7AggregateStat } from './nax036-g7-aggregate-stat';
import { NAx036G7TimingAggregatesOverTime } from './nax036-g7-timing-aggregates-over-time';
/**
 * 
 * @export
 * @interface NAx036G7TimingAggregates
 */
export interface NAx036G7TimingAggregates {
    /**
     * 
     * @type {number}
     * @memberof NAx036G7TimingAggregates
     */
    avgMs?: number | null;
    /**
     * 
     * @type {Array<NAx036G7AggregateStat>}
     * @memberof NAx036G7TimingAggregates
     */
    history: Array<NAx036G7AggregateStat>;
    /**
     * 
     * @type {NAx036G7TimingAggregatesOverTime}
     * @memberof NAx036G7TimingAggregates
     */
    overTime?: NAx036G7TimingAggregatesOverTime;
}
