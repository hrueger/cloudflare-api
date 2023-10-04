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
 * @interface C4f8RoOSSchemasCidrConfiguration
 */
export interface C4f8RoOSSchemasCidrConfiguration {
    /**
     * The configuration target. You must set the target to `ip_range` when specifying an IP address range in the Zone Lockdown rule.
     * @type {string}
     * @memberof C4f8RoOSSchemasCidrConfiguration
     */
    target?: string;
    /**
     * The IP address range to match. You can only use prefix lengths `/16` and `/24`.
     * @type {string}
     * @memberof C4f8RoOSSchemasCidrConfiguration
     */
    value?: string;
}