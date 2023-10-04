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
import { SBsg0yYSPcapsByteLimit } from './sbsg0y-yspcaps-byte-limit';
import { SBsg0yYSPcapsColoName } from './sbsg0y-yspcaps-colo-name';
import { SBsg0yYSPcapsDestinationConf } from './sbsg0y-yspcaps-destination-conf';
import { SBsg0yYSPcapsFilterV1 } from './sbsg0y-yspcaps-filter-v1';
import { SBsg0yYSPcapsPacketLimit } from './sbsg0y-yspcaps-packet-limit';
import { SBsg0yYSPcapsSystem } from './sbsg0y-yspcaps-system';
import { SBsg0yYSPcapsTimeLimit } from './sbsg0y-yspcaps-time-limit';
import { SBsg0yYSPcapsType } from './sbsg0y-yspcaps-type';
/**
 * 
 * @export
 * @interface SBsg0yYSPcapsRequestFull
 */
export interface SBsg0yYSPcapsRequestFull {
    /**
     * 
     * @type {SBsg0yYSPcapsByteLimit}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    byteLimit?: SBsg0yYSPcapsByteLimit;
    /**
     * 
     * @type {SBsg0yYSPcapsColoName}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    coloName: SBsg0yYSPcapsColoName;
    /**
     * 
     * @type {SBsg0yYSPcapsDestinationConf}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    destinationConf: SBsg0yYSPcapsDestinationConf;
    /**
     * 
     * @type {SBsg0yYSPcapsFilterV1}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    filterV1?: SBsg0yYSPcapsFilterV1;
    /**
     * 
     * @type {SBsg0yYSPcapsPacketLimit}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    packetLimit?: SBsg0yYSPcapsPacketLimit;
    /**
     * 
     * @type {SBsg0yYSPcapsSystem}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    system: SBsg0yYSPcapsSystem;
    /**
     * 
     * @type {SBsg0yYSPcapsTimeLimit}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    timeLimit: SBsg0yYSPcapsTimeLimit;
    /**
     * 
     * @type {SBsg0yYSPcapsType}
     * @memberof SBsg0yYSPcapsRequestFull
     */
    type: SBsg0yYSPcapsType;
}
