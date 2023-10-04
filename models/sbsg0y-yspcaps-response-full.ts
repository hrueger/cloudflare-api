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
import { SBsg0yYSPcapsErrorMessage } from './sbsg0y-yspcaps-error-message';
import { SBsg0yYSPcapsFilterV1 } from './sbsg0y-yspcaps-filter-v1';
import { SBsg0yYSPcapsId } from './sbsg0y-yspcaps-id';
import { SBsg0yYSPcapsStatus } from './sbsg0y-yspcaps-status';
import { SBsg0yYSPcapsSubmitted } from './sbsg0y-yspcaps-submitted';
import { SBsg0yYSPcapsSystem } from './sbsg0y-yspcaps-system';
import { SBsg0yYSPcapsTimeLimit } from './sbsg0y-yspcaps-time-limit';
import { SBsg0yYSPcapsType } from './sbsg0y-yspcaps-type';
/**
 * 
 * @export
 * @interface SBsg0yYSPcapsResponseFull
 */
export interface SBsg0yYSPcapsResponseFull {
    /**
     * 
     * @type {SBsg0yYSPcapsByteLimit}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    byteLimit?: SBsg0yYSPcapsByteLimit;
    /**
     * 
     * @type {SBsg0yYSPcapsColoName}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    coloName?: SBsg0yYSPcapsColoName;
    /**
     * 
     * @type {SBsg0yYSPcapsDestinationConf}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    destinationConf?: SBsg0yYSPcapsDestinationConf;
    /**
     * 
     * @type {SBsg0yYSPcapsErrorMessage}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    errorMessage?: SBsg0yYSPcapsErrorMessage;
    /**
     * 
     * @type {SBsg0yYSPcapsFilterV1}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    filterV1?: SBsg0yYSPcapsFilterV1;
    /**
     * 
     * @type {SBsg0yYSPcapsId}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    id?: SBsg0yYSPcapsId;
    /**
     * 
     * @type {SBsg0yYSPcapsStatus}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    status?: SBsg0yYSPcapsStatus;
    /**
     * 
     * @type {SBsg0yYSPcapsSubmitted}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    submitted?: SBsg0yYSPcapsSubmitted;
    /**
     * 
     * @type {SBsg0yYSPcapsSystem}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    system?: SBsg0yYSPcapsSystem;
    /**
     * 
     * @type {SBsg0yYSPcapsTimeLimit}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    timeLimit?: SBsg0yYSPcapsTimeLimit;
    /**
     * 
     * @type {SBsg0yYSPcapsType}
     * @memberof SBsg0yYSPcapsResponseFull
     */
    type?: SBsg0yYSPcapsType;
}