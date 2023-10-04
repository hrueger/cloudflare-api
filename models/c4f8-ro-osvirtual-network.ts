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
import { C4f8RoOSIsDefaultNetwork } from './c4f8-ro-osis-default-network';
import { C4f8RoOSSchemasComment } from './c4f8-ro-osschemas-comment';
import { C4f8RoOSVnetId } from './c4f8-ro-osvnet-id';
import { C4f8RoOSVnetName } from './c4f8-ro-osvnet-name';
/**
 * 
 * @export
 * @interface C4f8RoOSVirtualNetwork
 */
export interface C4f8RoOSVirtualNetwork {
    /**
     * 
     * @type {C4f8RoOSSchemasComment}
     * @memberof C4f8RoOSVirtualNetwork
     */
    comment: C4f8RoOSSchemasComment;
    /**
     * Timestamp of when the virtual network was created.
     * @type {any}
     * @memberof C4f8RoOSVirtualNetwork
     */
    createdAt: any;
    /**
     * Timestamp of when the virtual network was deleted. If `null`, the virtual network has not been deleted.
     * @type {any}
     * @memberof C4f8RoOSVirtualNetwork
     */
    deletedAt?: any;
    /**
     * 
     * @type {C4f8RoOSVnetId}
     * @memberof C4f8RoOSVirtualNetwork
     */
    id: C4f8RoOSVnetId;
    /**
     * 
     * @type {C4f8RoOSIsDefaultNetwork}
     * @memberof C4f8RoOSVirtualNetwork
     */
    isDefaultNetwork: C4f8RoOSIsDefaultNetwork;
    /**
     * 
     * @type {C4f8RoOSVnetName}
     * @memberof C4f8RoOSVirtualNetwork
     */
    name: C4f8RoOSVnetName;
}
