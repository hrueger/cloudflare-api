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
import { C4f8RoOSCertificateObject } from './c4f8-ro-oscertificate-object';
import { C4f8RoOSIssuer } from './c4f8-ro-osissuer';
import { C4f8RoOSPrivateKey } from './c4f8-ro-osprivate-key';
import { C4f8RoOSSchemasUploadedOn } from './c4f8-ro-osschemas-uploaded-on';
import { C4f8RoOSSignature } from './c4f8-ro-ossignature';
import { C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasCertificate } from './c4f8-ro-oszone-authenticated-origin-pull-components-schemas-certificate';
import { C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasEnabled } from './c4f8-ro-oszone-authenticated-origin-pull-components-schemas-enabled';
import { C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasExpiresOn } from './c4f8-ro-oszone-authenticated-origin-pull-components-schemas-expires-on';
import { C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasIdentifier } from './c4f8-ro-oszone-authenticated-origin-pull-components-schemas-identifier';
import { C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasStatus } from './c4f8-ro-oszone-authenticated-origin-pull-components-schemas-status';
/**
 * 
 * @export
 * @interface C4f8RoOSZoneAuthenticatedOriginPull
 */
export interface C4f8RoOSZoneAuthenticatedOriginPull extends C4f8RoOSCertificateObject {
    /**
     * 
     * @type {C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasCertificate}
     * @memberof C4f8RoOSZoneAuthenticatedOriginPull
     */
    certificate?: C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasCertificate;
    /**
     * 
     * @type {C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasEnabled}
     * @memberof C4f8RoOSZoneAuthenticatedOriginPull
     */
    enabled?: C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasEnabled;
    /**
     * 
     * @type {C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasIdentifier}
     * @memberof C4f8RoOSZoneAuthenticatedOriginPull
     */
    id?: C4f8RoOSZoneAuthenticatedOriginPullComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSPrivateKey}
     * @memberof C4f8RoOSZoneAuthenticatedOriginPull
     */
    privateKey?: C4f8RoOSPrivateKey;
}
