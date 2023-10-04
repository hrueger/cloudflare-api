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
 * Configures attributes for session affinity.
 * @export
 * @interface VXFDQCwXSessionAffinityAttributes
 */
export interface VXFDQCwXSessionAffinityAttributes {
    /**
     * Configures the drain duration in seconds. This field is only used when session affinity is enabled on the load balancer.
     * @type {number}
     * @memberof VXFDQCwXSessionAffinityAttributes
     */
    drainDuration?: number;
    /**
     * Configures the names of HTTP headers to base session affinity on when header `session_affinity` is enabled. At least one HTTP header name must be provided. To specify the exact cookies to be used, include an item in the following format: `\"cookie:<cookie-name-1>,<cookie-name-2>\"` (example) where everything after the colon is a comma-separated list of cookie names. Providing only `\"cookie\"` will result in all cookies being used. The default max number of HTTP header names that can be provided depends on your plan: 5 for Enterprise, 1 for all other plans.
     * @type {Array<string>}
     * @memberof VXFDQCwXSessionAffinityAttributes
     */
    headers?: Array<string>;
    /**
     * When header `session_affinity` is enabled, this option can be used to specify how HTTP headers on load balancing requests will be used. The supported values are: - `\"true\"`: Load balancing requests must contain *all* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created. - `\"false\"`: Load balancing requests must contain *at least one* of the HTTP headers specified by the `headers` session affinity attribute, otherwise sessions aren't created.
     * @type {boolean}
     * @memberof VXFDQCwXSessionAffinityAttributes
     */
    requireAllHeaders?: boolean;
    /**
     * Configures the SameSite attribute on session affinity cookie. Value \"Auto\" will be translated to \"Lax\" or \"None\" depending if Always Use HTTPS is enabled. Note: when using value \"None\", the secure attribute can not be set to \"Never\".
     * @type {string}
     * @memberof VXFDQCwXSessionAffinityAttributes
     */
    samesite?: VXFDQCwXSessionAffinityAttributesSamesiteEnum;
    /**
     * Configures the Secure attribute on session affinity cookie. Value \"Always\" indicates the Secure attribute will be set in the Set-Cookie header, \"Never\" indicates the Secure attribute will not be set, and \"Auto\" will set the Secure attribute depending if Always Use HTTPS is enabled.
     * @type {string}
     * @memberof VXFDQCwXSessionAffinityAttributes
     */
    secure?: VXFDQCwXSessionAffinityAttributesSecureEnum;
    /**
     * Configures the zero-downtime failover between origins within a pool when session affinity is enabled. This feature is currently incompatible with Argo, Tiered Cache, and Bandwidth Alliance. The supported values are: - `\"none\"`: No failover takes place for sessions pinned to the origin (default). - `\"temporary\"`: Traffic will be sent to another other healthy origin until the originally pinned origin is available; note that this can potentially result in heavy origin flapping. - `\"sticky\"`: The session affinity cookie is updated and subsequent requests are sent to the new origin. Note: Zero-downtime failover with sticky sessions is currently not supported for session affinity by header.
     * @type {string}
     * @memberof VXFDQCwXSessionAffinityAttributes
     */
    zeroDowntimeFailover?: VXFDQCwXSessionAffinityAttributesZeroDowntimeFailoverEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum VXFDQCwXSessionAffinityAttributesSamesiteEnum {
    Auto = 'Auto',
    Lax = 'Lax',
    None = 'None',
    Strict = 'Strict'
}
/**
    * @export
    * @enum {string}
    */
export enum VXFDQCwXSessionAffinityAttributesSecureEnum {
    Auto = 'Auto',
    Always = 'Always',
    Never = 'Never'
}
/**
    * @export
    * @enum {string}
    */
export enum VXFDQCwXSessionAffinityAttributesZeroDowntimeFailoverEnum {
    None = 'none',
    Temporary = 'temporary',
    Sticky = 'sticky'
}

