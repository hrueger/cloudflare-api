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
import { KNYM3FIhCertId } from './knym3-fih-cert-id';
import { KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasEnabled } from './knym3-fih-hostname-authenticated-origin-pull-components-schemas-enabled';
import { KNYM3FIhSchemasHostname } from './knym3-fih-schemas-hostname';
/**
 * 
 * @export
 * @interface KNYM3FIhHostnameCertidInput
 */
export interface KNYM3FIhHostnameCertidInput {
    /**
     * 
     * @type {KNYM3FIhCertId}
     * @memberof KNYM3FIhHostnameCertidInput
     */
    certId?: KNYM3FIhCertId;
    /**
     * 
     * @type {KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasEnabled}
     * @memberof KNYM3FIhHostnameCertidInput
     */
    enabled?: KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasEnabled;
    /**
     * 
     * @type {KNYM3FIhSchemasHostname}
     * @memberof KNYM3FIhHostnameCertidInput
     */
    hostname?: KNYM3FIhSchemasHostname;
}