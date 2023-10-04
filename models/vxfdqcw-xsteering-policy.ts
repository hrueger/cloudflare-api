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
 * Steering Policy for this load balancer. - `\"off\"`: Use `default_pools`. - `\"geo\"`: Use `region_pools`/`country_pools`/`pop_pools`. For non-proxied requests, the country for `country_pools` is determined by `location_strategy`. - `\"random\"`: Select a pool randomly. - `\"dynamic_latency\"`: Use round trip time to select the closest pool in default_pools (requires pool health checks). - `\"proximity\"`: Use the pools' latitude and longitude to select the closest pool using the Cloudflare PoP location for proxied requests or the location determined by `location_strategy` for non-proxied requests. - `\"least_outstanding_requests\"`: Select a pool by taking into consideration `random_steering` weights, as well as each pool's number of outstanding requests. Pools with more pending requests are weighted proportionately less relative to others. - `\"\"`: Will map to `\"geo\"` if you use `region_pools`/`country_pools`/`pop_pools` otherwise `\"off\"`.
 * @export
 * @enum {string}
 */
export enum VXFDQCwXSteeringPolicy {
    Off = 'off',
    Geo = 'geo',
    Random = 'random',
    DynamicLatency = 'dynamic_latency',
    Proximity = 'proximity',
    LeastOutstandingRequests = 'least_outstanding_requests',
    Auto = ""
}

