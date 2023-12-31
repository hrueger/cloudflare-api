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
 * Value of the zone setting. Notes: The minimum TTL available depends on the plan level of the zone. (Enterprise = 30, Business = 1800, Pro = 3600, Free = 7200)
 * @export
 * @enum {string}
 */
export enum Model4tKvLQ4cEdgeCacheTtlValue {
    NUMBER_30 = 30,
    NUMBER_60 = 60,
    NUMBER_300 = 300,
    NUMBER_1200 = 1200,
    NUMBER_1800 = 1800,
    NUMBER_3600 = 3600,
    NUMBER_7200 = 7200,
    NUMBER_10800 = 10800,
    NUMBER_14400 = 14400,
    NUMBER_18000 = 18000,
    NUMBER_28800 = 28800,
    NUMBER_43200 = 43200,
    NUMBER_57600 = 57600,
    NUMBER_72000 = 72000,
    NUMBER_86400 = 86400,
    NUMBER_172800 = 172800,
    NUMBER_259200 = 259200,
    NUMBER_345600 = 345600,
    NUMBER_432000 = 432000,
    NUMBER_518400 = 518400,
    NUMBER_604800 = 604800
}

