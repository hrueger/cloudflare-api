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
import { NAx036G7TestStatPctOverTimeSlots } from './nax036-g7-test-stat-pct-over-time-slots';
/**
 * 
 * @export
 * @interface NAx036G7TestStatPctOverTime
 */
export interface NAx036G7TestStatPctOverTime {
    /**
     * average observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    avg?: number | null;
    /**
     * highest observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    max?: number | null;
    /**
     * lowest  observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    min?: number | null;
    /**
     * p50 observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    p50?: number | null;
    /**
     * p90 observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    p90?: number | null;
    /**
     * p95 observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    p95?: number | null;
    /**
     * p99 observed in the time period
     * @type {number}
     * @memberof NAx036G7TestStatPctOverTime
     */
    p99?: number | null;
    /**
     * 
     * @type {Array<NAx036G7TestStatPctOverTimeSlots>}
     * @memberof NAx036G7TestStatPctOverTime
     */
    slots: Array<NAx036G7TestStatPctOverTimeSlots>;
}
