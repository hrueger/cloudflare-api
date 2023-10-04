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
 * Defines rules for fine-grained control over content than signed URL tokens alone. Access rules primarily make tokens conditionally valid based on user information. Access Rules are specified on token payloads as the `accessRules` property containing an array of Rule objects.
 * @export
 * @interface JOh1h9zQAccessRules
 */
export interface JOh1h9zQAccessRules {
    /**
     * The action to take when a request matches a rule. If the action is `block`, the signed token blocks views for viewers matching the rule.
     * @type {string}
     * @memberof JOh1h9zQAccessRules
     */
    action?: JOh1h9zQAccessRulesActionEnum;
    /**
     * An array of 2-letter country codes in ISO 3166-1 Alpha-2 format used to match requests.
     * @type {Array<string>}
     * @memberof JOh1h9zQAccessRules
     */
    country?: Array<string>;
    /**
     * An array of IPv4 or IPV6 addresses or CIDRs used to match requests.
     * @type {Array<string>}
     * @memberof JOh1h9zQAccessRules
     */
    ip?: Array<string>;
    /**
     * Lists available rule types to match for requests. An `any` type matches all requests and can be used as a wildcard to apply default actions after other rules.
     * @type {string}
     * @memberof JOh1h9zQAccessRules
     */
    type?: JOh1h9zQAccessRulesTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum JOh1h9zQAccessRulesActionEnum {
    Allow = 'allow',
    Block = 'block'
}
/**
    * @export
    * @enum {string}
    */
export enum JOh1h9zQAccessRulesTypeEnum {
    Any = 'any',
    IpSrc = 'ip.src',
    IpGeoipCountry = 'ip.geoip.country'
}
