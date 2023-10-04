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
import { Tm1HTKEcPolicyCheckResponseResultAppState } from './tm1-htkec-policy-check-response-result-app-state';
import { Tm1HTKEcPolicyCheckResponseResultUserIdentity } from './tm1-htkec-policy-check-response-result-user-identity';
/**
 * 
 * @export
 * @interface Tm1HTKEcPolicyCheckResponseResult
 */
export interface Tm1HTKEcPolicyCheckResponseResult {
    /**
     * 
     * @type {Tm1HTKEcPolicyCheckResponseResultAppState}
     * @memberof Tm1HTKEcPolicyCheckResponseResult
     */
    appState?: Tm1HTKEcPolicyCheckResponseResultAppState;
    /**
     * 
     * @type {Tm1HTKEcPolicyCheckResponseResultUserIdentity}
     * @memberof Tm1HTKEcPolicyCheckResponseResult
     */
    userIdentity?: Tm1HTKEcPolicyCheckResponseResultUserIdentity;
}
