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
 * @interface Model4tKvLQ4cAutomaticPlatformOptimization
 */
export interface Model4tKvLQ4cAutomaticPlatformOptimization {
    /**
     * Indicates whether or not [cache by device type](https://developers.cloudflare.com/automatic-platform-optimization/reference/cache-device-type/) is enabled.
     * @type {boolean}
     * @memberof Model4tKvLQ4cAutomaticPlatformOptimization
     */
    cacheByDeviceType: boolean;
    /**
     * Indicates whether or not Cloudflare proxy is enabled.
     * @type {boolean}
     * @memberof Model4tKvLQ4cAutomaticPlatformOptimization
     */
    cf: boolean;
    /**
     * Indicates whether or not Automatic Platform Optimization is enabled.
     * @type {boolean}
     * @memberof Model4tKvLQ4cAutomaticPlatformOptimization
     */
    enabled: boolean;
    /**
     * An array of hostnames where Automatic Platform Optimization for WordPress is activated.
     * @type {Array<string>}
     * @memberof Model4tKvLQ4cAutomaticPlatformOptimization
     */
    hostnames: Array<string>;
    /**
     * Indicates whether or not site is powered by WordPress.
     * @type {boolean}
     * @memberof Model4tKvLQ4cAutomaticPlatformOptimization
     */
    wordpress: boolean;
    /**
     * Indicates whether or not [Cloudflare for WordPress plugin](https://wordpress.org/plugins/cloudflare/) is installed.
     * @type {boolean}
     * @memberof Model4tKvLQ4cAutomaticPlatformOptimization
     */
    wpPlugin: boolean;
}
