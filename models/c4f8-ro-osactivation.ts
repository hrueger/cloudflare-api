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
import { C4f8RoOSActivatedOn } from './c4f8-ro-osactivated-on';
import { C4f8RoOSActivationKey } from './c4f8-ro-osactivation-key';
import { C4f8RoOSActivationVersion } from './c4f8-ro-osactivation-version';
/**
 * 
 * @export
 * @interface C4f8RoOSActivation
 */
export interface C4f8RoOSActivation {
    /**
     * 
     * @type {C4f8RoOSActivatedOn}
     * @memberof C4f8RoOSActivation
     */
    activatedOn?: C4f8RoOSActivatedOn;
    /**
     * 
     * @type {C4f8RoOSActivationKey}
     * @memberof C4f8RoOSActivation
     */
    key: C4f8RoOSActivationKey;
    /**
     * 
     * @type {C4f8RoOSActivationVersion}
     * @memberof C4f8RoOSActivation
     */
    version?: C4f8RoOSActivationVersion;
}