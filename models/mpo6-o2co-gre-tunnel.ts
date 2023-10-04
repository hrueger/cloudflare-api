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
import { Mpo6O2coCloudflareGreEndpoint } from './mpo6-o2co-cloudflare-gre-endpoint';
import { Mpo6O2coCustomerGreEndpoint } from './mpo6-o2co-customer-gre-endpoint';
import { Mpo6O2coHealthCheck } from './mpo6-o2co-health-check';
import { Mpo6O2coInterfaceAddress } from './mpo6-o2co-interface-address';
import { Mpo6O2coMtu } from './mpo6-o2co-mtu';
import { Mpo6O2coName } from './mpo6-o2co-name';
import { Mpo6O2coSchemasCreatedOn } from './mpo6-o2co-schemas-created-on';
import { Mpo6O2coSchemasDescription } from './mpo6-o2co-schemas-description';
import { Mpo6O2coSchemasIdentifier } from './mpo6-o2co-schemas-identifier';
import { Mpo6O2coSchemasModifiedOn } from './mpo6-o2co-schemas-modified-on';
import { Mpo6O2coTtl } from './mpo6-o2co-ttl';
/**
 * 
 * @export
 * @interface Mpo6O2coGreTunnel
 */
export interface Mpo6O2coGreTunnel {
    /**
     * 
     * @type {Mpo6O2coCloudflareGreEndpoint}
     * @memberof Mpo6O2coGreTunnel
     */
    cloudflareGreEndpoint: Mpo6O2coCloudflareGreEndpoint;
    /**
     * 
     * @type {Mpo6O2coSchemasCreatedOn}
     * @memberof Mpo6O2coGreTunnel
     */
    createdOn?: Mpo6O2coSchemasCreatedOn;
    /**
     * 
     * @type {Mpo6O2coCustomerGreEndpoint}
     * @memberof Mpo6O2coGreTunnel
     */
    customerGreEndpoint: Mpo6O2coCustomerGreEndpoint;
    /**
     * 
     * @type {Mpo6O2coSchemasDescription}
     * @memberof Mpo6O2coGreTunnel
     */
    description?: Mpo6O2coSchemasDescription;
    /**
     * 
     * @type {Mpo6O2coHealthCheck}
     * @memberof Mpo6O2coGreTunnel
     */
    healthCheck?: Mpo6O2coHealthCheck;
    /**
     * 
     * @type {Mpo6O2coSchemasIdentifier}
     * @memberof Mpo6O2coGreTunnel
     */
    id?: Mpo6O2coSchemasIdentifier;
    /**
     * 
     * @type {Mpo6O2coInterfaceAddress}
     * @memberof Mpo6O2coGreTunnel
     */
    interfaceAddress: Mpo6O2coInterfaceAddress;
    /**
     * 
     * @type {Mpo6O2coSchemasModifiedOn}
     * @memberof Mpo6O2coGreTunnel
     */
    modifiedOn?: Mpo6O2coSchemasModifiedOn;
    /**
     * 
     * @type {Mpo6O2coMtu}
     * @memberof Mpo6O2coGreTunnel
     */
    mtu?: Mpo6O2coMtu;
    /**
     * 
     * @type {Mpo6O2coName}
     * @memberof Mpo6O2coGreTunnel
     */
    name: Mpo6O2coName;
    /**
     * 
     * @type {Mpo6O2coTtl}
     * @memberof Mpo6O2coGreTunnel
     */
    ttl?: Mpo6O2coTtl;
}
