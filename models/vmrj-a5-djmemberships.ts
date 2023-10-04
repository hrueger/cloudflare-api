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
import { VmrjA5DJAddressMapsMembership } from './vmrj-a5-djaddress-maps-membership';
/**
 * Zones and Accounts which will be assigned IPs on this Address Map. A zone membership will take priority over an account membership.
 * @export
 * @interface VmrjA5DJMemberships
 */
export interface VmrjA5DJMemberships extends Array<VmrjA5DJAddressMapsMembership> {
}