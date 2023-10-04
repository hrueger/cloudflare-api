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
import { C4f8RoOSComponentsSchemasUploadedOn } from './c4f8-ro-oscomponents-schemas-uploaded-on';
import { C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasCertificate } from './c4f8-ro-oshostname-authenticated-origin-pull-components-schemas-certificate';
import { C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasEnabled } from './c4f8-ro-oshostname-authenticated-origin-pull-components-schemas-enabled';
import { C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasExpiresOn } from './c4f8-ro-oshostname-authenticated-origin-pull-components-schemas-expires-on';
import { C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasIdentifier } from './c4f8-ro-oshostname-authenticated-origin-pull-components-schemas-identifier';
import { C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasStatus } from './c4f8-ro-oshostname-authenticated-origin-pull-components-schemas-status';
import { C4f8RoOSHostnameCertidObject } from './c4f8-ro-oshostname-certid-object';
import { C4f8RoOSIssuer } from './c4f8-ro-osissuer';
import { C4f8RoOSSchemasCreatedAt } from './c4f8-ro-osschemas-created-at';
import { C4f8RoOSSchemasHostname } from './c4f8-ro-osschemas-hostname';
import { C4f8RoOSSchemasPrivateKey } from './c4f8-ro-osschemas-private-key';
import { C4f8RoOSSerialNumber } from './c4f8-ro-osserial-number';
import { C4f8RoOSSignature } from './c4f8-ro-ossignature';
import { C4f8RoOSUpdatedAt } from './c4f8-ro-osupdated-at';
/**
 * 
 * @export
 * @interface C4f8RoOSHostnameAuthenticatedOriginPull
 */
export interface C4f8RoOSHostnameAuthenticatedOriginPull extends C4f8RoOSHostnameCertidObject {
    /**
     * 
     * @type {C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasIdentifier}
     * @memberof C4f8RoOSHostnameAuthenticatedOriginPull
     */
    certId?: C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasCertificate}
     * @memberof C4f8RoOSHostnameAuthenticatedOriginPull
     */
    certificate?: C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasCertificate;
    /**
     * 
     * @type {C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasEnabled}
     * @memberof C4f8RoOSHostnameAuthenticatedOriginPull
     */
    enabled?: C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasEnabled;
    /**
     * 
     * @type {C4f8RoOSSchemasHostname}
     * @memberof C4f8RoOSHostnameAuthenticatedOriginPull
     */
    hostname?: C4f8RoOSSchemasHostname;
    /**
     * 
     * @type {C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasIdentifier}
     * @memberof C4f8RoOSHostnameAuthenticatedOriginPull
     */
    id?: C4f8RoOSHostnameAuthenticatedOriginPullComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSSchemasPrivateKey}
     * @memberof C4f8RoOSHostnameAuthenticatedOriginPull
     */
    privateKey?: C4f8RoOSSchemasPrivateKey;
}