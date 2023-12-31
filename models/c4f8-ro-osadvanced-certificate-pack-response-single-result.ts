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
import { C4f8RoOSAdvancedType } from './c4f8-ro-osadvanced-type';
import { C4f8RoOSCertificateAuthority } from './c4f8-ro-oscertificate-authority';
import { C4f8RoOSCertificatePacksComponentsSchemasIdentifier } from './c4f8-ro-oscertificate-packs-components-schemas-identifier';
import { C4f8RoOSCertificatePacksComponentsSchemasStatus } from './c4f8-ro-oscertificate-packs-components-schemas-status';
import { C4f8RoOSCloudflareBranding } from './c4f8-ro-oscloudflare-branding';
import { C4f8RoOSSchemasHosts } from './c4f8-ro-osschemas-hosts';
import { C4f8RoOSValidationMethod } from './c4f8-ro-osvalidation-method';
import { C4f8RoOSValidityDays } from './c4f8-ro-osvalidity-days';
/**
 * 
 * @export
 * @interface C4f8RoOSAdvancedCertificatePackResponseSingleResult
 */
export interface C4f8RoOSAdvancedCertificatePackResponseSingleResult {
    /**
     * 
     * @type {C4f8RoOSCertificateAuthority}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    certificateAuthority?: C4f8RoOSCertificateAuthority;
    /**
     * 
     * @type {C4f8RoOSCloudflareBranding}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    cloudflareBranding?: C4f8RoOSCloudflareBranding;
    /**
     * 
     * @type {C4f8RoOSSchemasHosts}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    hosts?: C4f8RoOSSchemasHosts;
    /**
     * 
     * @type {C4f8RoOSCertificatePacksComponentsSchemasIdentifier}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    id?: C4f8RoOSCertificatePacksComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSCertificatePacksComponentsSchemasStatus}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    status?: C4f8RoOSCertificatePacksComponentsSchemasStatus;
    /**
     * 
     * @type {C4f8RoOSAdvancedType}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    type?: C4f8RoOSAdvancedType;
    /**
     * 
     * @type {C4f8RoOSValidationMethod}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    validationMethod?: C4f8RoOSValidationMethod;
    /**
     * 
     * @type {C4f8RoOSValidityDays}
     * @memberof C4f8RoOSAdvancedCertificatePackResponseSingleResult
     */
    validityDays?: C4f8RoOSValidityDays;
}
