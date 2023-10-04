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
import { Mpo6O2coCloudflareIpsecEndpoint } from './mpo6-o2co-cloudflare-ipsec-endpoint';
import { Mpo6O2coComponentsSchemasDescription } from './mpo6-o2co-components-schemas-description';
import { Mpo6O2coCustomerIpsecEndpoint } from './mpo6-o2co-customer-ipsec-endpoint';
import { Mpo6O2coInterfaceAddress } from './mpo6-o2co-interface-address';
import { Mpo6O2coPsk } from './mpo6-o2co-psk';
import { Mpo6O2coReplayProtection } from './mpo6-o2co-replay-protection';
import { Mpo6O2coSchemasName } from './mpo6-o2co-schemas-name';
/**
 * 
 * @export
 * @interface Mpo6O2coSchemasTunnelAddSingleRequest
 */
export interface Mpo6O2coSchemasTunnelAddSingleRequest {
    /**
     * 
     * @type {Mpo6O2coCloudflareIpsecEndpoint}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    cloudflareEndpoint: Mpo6O2coCloudflareIpsecEndpoint;
    /**
     * 
     * @type {Mpo6O2coCustomerIpsecEndpoint}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    customerEndpoint?: Mpo6O2coCustomerIpsecEndpoint;
    /**
     * 
     * @type {Mpo6O2coComponentsSchemasDescription}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    description?: Mpo6O2coComponentsSchemasDescription;
    /**
     * 
     * @type {Mpo6O2coInterfaceAddress}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    interfaceAddress: Mpo6O2coInterfaceAddress;
    /**
     * 
     * @type {Mpo6O2coSchemasName}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    name: Mpo6O2coSchemasName;
    /**
     * 
     * @type {Mpo6O2coPsk}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    psk?: Mpo6O2coPsk;
    /**
     * 
     * @type {Mpo6O2coReplayProtection}
     * @memberof Mpo6O2coSchemasTunnelAddSingleRequest
     */
    replayProtection?: Mpo6O2coReplayProtection;
}