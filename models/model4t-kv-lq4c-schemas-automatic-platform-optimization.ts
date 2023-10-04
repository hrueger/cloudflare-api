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
import { Model4tKvLQ4cAutomaticPlatformOptimization } from './model4t-kv-lq4c-automatic-platform-optimization';
import { Model4tKvLQ4cBase } from './model4t-kv-lq4c-base';
/**
 * [Automatic Platform Optimization for WordPress](https://developers.cloudflare.com/automatic-platform-optimization/) serves your WordPress site from Cloudflare's edge network and caches third-party fonts.
 * @export
 * @interface Model4tKvLQ4cSchemasAutomaticPlatformOptimization
 */
export interface Model4tKvLQ4cSchemasAutomaticPlatformOptimization extends Model4tKvLQ4cBase {
    /**
     * ID of the zone setting.
     * @type {string}
     * @memberof Model4tKvLQ4cSchemasAutomaticPlatformOptimization
     */
    id?: string;
    /**
     * 
     * @type {Model4tKvLQ4cAutomaticPlatformOptimization}
     * @memberof Model4tKvLQ4cSchemasAutomaticPlatformOptimization
     */
    value?: Model4tKvLQ4cAutomaticPlatformOptimization;
}
