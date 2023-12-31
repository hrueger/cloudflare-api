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
import { SBsg0yYSPcapsDestinationConf } from './sbsg0y-yspcaps-destination-conf';
import { SBsg0yYSPcapsOwnershipChallenge } from './sbsg0y-yspcaps-ownership-challenge';
/**
 * 
 * @export
 * @interface SBsg0yYSPcapsOwnershipResponse
 */
export interface SBsg0yYSPcapsOwnershipResponse {
    /**
     * 
     * @type {SBsg0yYSPcapsDestinationConf}
     * @memberof SBsg0yYSPcapsOwnershipResponse
     */
    destinationConf: SBsg0yYSPcapsDestinationConf;
    /**
     * 
     * @type {SBsg0yYSPcapsOwnershipChallenge}
     * @memberof SBsg0yYSPcapsOwnershipResponse
     */
    filename: SBsg0yYSPcapsOwnershipChallenge;
    /**
     * The bucket ID associated with the packet captures API.
     * @type {string}
     * @memberof SBsg0yYSPcapsOwnershipResponse
     */
    id: string;
    /**
     * The status of the ownership challenge. Can be pending, success or failed.
     * @type {string}
     * @memberof SBsg0yYSPcapsOwnershipResponse
     */
    status: SBsg0yYSPcapsOwnershipResponseStatusEnum;
    /**
     * The RFC 3339 timestamp when the bucket was added to packet captures API.
     * @type {string}
     * @memberof SBsg0yYSPcapsOwnershipResponse
     */
    submitted: string;
    /**
     * The RFC 3339 timestamp when the bucket was validated.
     * @type {string}
     * @memberof SBsg0yYSPcapsOwnershipResponse
     */
    validated?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum SBsg0yYSPcapsOwnershipResponseStatusEnum {
    Pending = 'pending',
    Success = 'success',
    Failed = 'failed'
}

