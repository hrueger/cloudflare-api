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
import { Ir4bTFI2ClientDefault } from './ir4b-tfi2-client-default';
import { Ir4bTFI2EcsSupport } from './ir4b-tfi2-ecs-support';
import { Ir4bTFI2Network } from './ir4b-tfi2-network';
import { Ir4bTFI2SchemasName } from './ir4b-tfi2-schemas-name';
/**
 * 
 * @export
 * @interface LocationsUuidBody
 */
export interface LocationsUuidBody {
    /**
     * 
     * @type {Ir4bTFI2ClientDefault}
     * @memberof LocationsUuidBody
     */
    clientDefault?: Ir4bTFI2ClientDefault;
    /**
     * 
     * @type {Ir4bTFI2EcsSupport}
     * @memberof LocationsUuidBody
     */
    ecsSupport?: Ir4bTFI2EcsSupport;
    /**
     * 
     * @type {Ir4bTFI2SchemasName}
     * @memberof LocationsUuidBody
     */
    name: Ir4bTFI2SchemasName;
    /**
     * 
     * @type {Ir4bTFI2Network}
     * @memberof LocationsUuidBody
     */
    networks?: Ir4bTFI2Network;
}
