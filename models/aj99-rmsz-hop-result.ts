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
import { AJ99RMSzNodeResult } from './aj99-rmsz-node-result';
import { AJ99RMSzPacketsLost } from './aj99-rmsz-packets-lost';
import { AJ99RMSzPacketsSent } from './aj99-rmsz-packets-sent';
import { AJ99RMSzPacketsTtl } from './aj99-rmsz-packets-ttl';
/**
 * 
 * @export
 * @interface AJ99RMSzHopResult
 */
export interface AJ99RMSzHopResult {
    /**
     * An array of node objects.
     * @type {Array<AJ99RMSzNodeResult>}
     * @memberof AJ99RMSzHopResult
     */
    nodes?: Array<AJ99RMSzNodeResult>;
    /**
     * 
     * @type {AJ99RMSzPacketsLost}
     * @memberof AJ99RMSzHopResult
     */
    packetsLost?: AJ99RMSzPacketsLost;
    /**
     * 
     * @type {AJ99RMSzPacketsSent}
     * @memberof AJ99RMSzHopResult
     */
    packetsSent?: AJ99RMSzPacketsSent;
    /**
     * 
     * @type {AJ99RMSzPacketsTtl}
     * @memberof AJ99RMSzHopResult
     */
    packetsTtl?: AJ99RMSzPacketsTtl;
}
