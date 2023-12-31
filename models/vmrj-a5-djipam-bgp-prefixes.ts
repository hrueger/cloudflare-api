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
import { VmrjA5DJAsn } from './vmrj-a5-djasn';
import { VmrjA5DJBgpOnDemand } from './vmrj-a5-djbgp-on-demand';
import { VmrjA5DJBgpSignalOpts } from './vmrj-a5-djbgp-signal-opts';
import { VmrjA5DJCidr } from './vmrj-a5-djcidr';
import { VmrjA5DJIdentifier } from './vmrj-a5-djidentifier';
import { VmrjA5DJTimestamp } from './vmrj-a5-djtimestamp';
/**
 * 
 * @export
 * @interface VmrjA5DJIpamBgpPrefixes
 */
export interface VmrjA5DJIpamBgpPrefixes {
    /**
     * 
     * @type {VmrjA5DJAsn}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    asn?: VmrjA5DJAsn;
    /**
     * 
     * @type {VmrjA5DJBgpSignalOpts}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    bgpSignalOpts?: VmrjA5DJBgpSignalOpts;
    /**
     * 
     * @type {VmrjA5DJCidr}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    cidr?: VmrjA5DJCidr;
    /**
     * 
     * @type {VmrjA5DJTimestamp}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    createdAt?: VmrjA5DJTimestamp;
    /**
     * 
     * @type {VmrjA5DJIdentifier}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    id?: VmrjA5DJIdentifier;
    /**
     * 
     * @type {VmrjA5DJTimestamp}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    modifiedAt?: VmrjA5DJTimestamp;
    /**
     * 
     * @type {VmrjA5DJBgpOnDemand}
     * @memberof VmrjA5DJIpamBgpPrefixes
     */
    onDemand?: VmrjA5DJBgpOnDemand;
}
