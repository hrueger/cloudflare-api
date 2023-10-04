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
import { VmrjA5DJCidr } from './vmrj-a5-djcidr';
import { VmrjA5DJIdentifier } from './vmrj-a5-djidentifier';
import { VmrjA5DJProvisioning } from './vmrj-a5-djprovisioning';
import { VmrjA5DJServiceIdentifier } from './vmrj-a5-djservice-identifier';
import { VmrjA5DJServiceName } from './vmrj-a5-djservice-name';
/**
 * 
 * @export
 * @interface VmrjA5DJServiceBinding
 */
export interface VmrjA5DJServiceBinding {
    /**
     * 
     * @type {VmrjA5DJCidr}
     * @memberof VmrjA5DJServiceBinding
     */
    cidr?: VmrjA5DJCidr;
    /**
     * 
     * @type {VmrjA5DJIdentifier}
     * @memberof VmrjA5DJServiceBinding
     */
    id?: VmrjA5DJIdentifier;
    /**
     * 
     * @type {VmrjA5DJProvisioning}
     * @memberof VmrjA5DJServiceBinding
     */
    provisioning?: VmrjA5DJProvisioning;
    /**
     * 
     * @type {VmrjA5DJServiceIdentifier}
     * @memberof VmrjA5DJServiceBinding
     */
    serviceId?: VmrjA5DJServiceIdentifier;
    /**
     * 
     * @type {VmrjA5DJServiceName}
     * @memberof VmrjA5DJServiceBinding
     */
    serviceName?: VmrjA5DJServiceName;
}
