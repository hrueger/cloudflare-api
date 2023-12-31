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
import { KNYM3FIhComponentsSchemasUploadedOn } from './knym3-fih-components-schemas-uploaded-on';
import { KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasCertificate } from './knym3-fih-hostname-authenticated-origin-pull-components-schemas-certificate';
import { KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasEnabled } from './knym3-fih-hostname-authenticated-origin-pull-components-schemas-enabled';
import { KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasExpiresOn } from './knym3-fih-hostname-authenticated-origin-pull-components-schemas-expires-on';
import { KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasStatus } from './knym3-fih-hostname-authenticated-origin-pull-components-schemas-status';
import { KNYM3FIhHostnameCertidObject } from './knym3-fih-hostname-certid-object';
import { KNYM3FIhIdentifier } from './knym3-fih-identifier';
import { KNYM3FIhIssuer } from './knym3-fih-issuer';
import { KNYM3FIhSchemasCreatedAt } from './knym3-fih-schemas-created-at';
import { KNYM3FIhSchemasHostname } from './knym3-fih-schemas-hostname';
import { KNYM3FIhSchemasPrivateKey } from './knym3-fih-schemas-private-key';
import { KNYM3FIhSerialNumber } from './knym3-fih-serial-number';
import { KNYM3FIhSignature } from './knym3-fih-signature';
import { KNYM3FIhUpdatedAt } from './knym3-fih-updated-at';
/**
 * 
 * @export
 * @interface KNYM3FIhHostnameAuthenticatedOriginPull
 */
export interface KNYM3FIhHostnameAuthenticatedOriginPull extends KNYM3FIhHostnameCertidObject {
    /**
     * 
     * @type {KNYM3FIhIdentifier}
     * @memberof KNYM3FIhHostnameAuthenticatedOriginPull
     */
    certId?: KNYM3FIhIdentifier;
    /**
     * 
     * @type {KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasCertificate}
     * @memberof KNYM3FIhHostnameAuthenticatedOriginPull
     */
    certificate?: KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasCertificate;
    /**
     * 
     * @type {KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasEnabled}
     * @memberof KNYM3FIhHostnameAuthenticatedOriginPull
     */
    enabled?: KNYM3FIhHostnameAuthenticatedOriginPullComponentsSchemasEnabled;
    /**
     * 
     * @type {KNYM3FIhSchemasHostname}
     * @memberof KNYM3FIhHostnameAuthenticatedOriginPull
     */
    hostname?: KNYM3FIhSchemasHostname;
    /**
     * 
     * @type {KNYM3FIhIdentifier}
     * @memberof KNYM3FIhHostnameAuthenticatedOriginPull
     */
    id?: KNYM3FIhIdentifier;
    /**
     * 
     * @type {KNYM3FIhSchemasPrivateKey}
     * @memberof KNYM3FIhHostnameAuthenticatedOriginPull
     */
    privateKey?: KNYM3FIhSchemasPrivateKey;
}
