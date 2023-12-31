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
import { Ir4bTFI2CfAccountId } from './ir4b-tfi2-cf-account-id';
import { Ir4bTFI2GatewayTag } from './ir4b-tfi2-gateway-tag';
import { Ir4bTFI2ProviderName } from './ir4b-tfi2-provider-name';
/**
 * 
 * @export
 * @interface Ir4bTFI2GatewayAccountResult
 */
export interface Ir4bTFI2GatewayAccountResult {
    /**
     * 
     * @type {Ir4bTFI2GatewayTag}
     * @memberof Ir4bTFI2GatewayAccountResult
     */
    gatewayTag?: Ir4bTFI2GatewayTag;
    /**
     * 
     * @type {Ir4bTFI2CfAccountId}
     * @memberof Ir4bTFI2GatewayAccountResult
     */
    id?: Ir4bTFI2CfAccountId;
    /**
     * 
     * @type {Ir4bTFI2ProviderName}
     * @memberof Ir4bTFI2GatewayAccountResult
     */
    providerName?: Ir4bTFI2ProviderName;
}
