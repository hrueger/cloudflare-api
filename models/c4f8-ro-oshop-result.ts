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
import { C4f8RoOSNodeResult } from './c4f8-ro-osnode-result';
import { C4f8RoOSPacketsLost } from './c4f8-ro-ospackets-lost';
import { C4f8RoOSPacketsSent } from './c4f8-ro-ospackets-sent';
import { C4f8RoOSPacketsTtl } from './c4f8-ro-ospackets-ttl';
/**
 * 
 * @export
 * @interface C4f8RoOSHopResult
 */
export interface C4f8RoOSHopResult {
    /**
     * An array of node objects.
     * @type {Array<C4f8RoOSNodeResult>}
     * @memberof C4f8RoOSHopResult
     */
    nodes?: Array<C4f8RoOSNodeResult>;
    /**
     * 
     * @type {C4f8RoOSPacketsLost}
     * @memberof C4f8RoOSHopResult
     */
    packetsLost?: C4f8RoOSPacketsLost;
    /**
     * 
     * @type {C4f8RoOSPacketsSent}
     * @memberof C4f8RoOSHopResult
     */
    packetsSent?: C4f8RoOSPacketsSent;
    /**
     * 
     * @type {C4f8RoOSPacketsTtl}
     * @memberof C4f8RoOSHopResult
     */
    packetsTtl?: C4f8RoOSPacketsTtl;
}
