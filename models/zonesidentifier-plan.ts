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
import { Model4tKvLQ4cIdentifier } from './model4t-kv-lq4c-identifier';
/**
 * (Deprecated) Please use the `/zones/{identifier}/subscription` API to update a zone's plan. Changing this value will create/cancel associated subscriptions. To view available plans for this zone, see Zone Plans. 
 * @export
 * @interface ZonesidentifierPlan
 */
export interface ZonesidentifierPlan {
    /**
     * 
     * @type {Model4tKvLQ4cIdentifier}
     * @memberof ZonesidentifierPlan
     */
    id?: Model4tKvLQ4cIdentifier;
}
