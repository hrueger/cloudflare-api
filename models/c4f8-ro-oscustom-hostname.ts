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
import { C4f8RoOSCreatedAt } from './c4f8-ro-oscreated-at';
import { C4f8RoOSCustomHostnameComponentsSchemasIdentifier } from './c4f8-ro-oscustom-hostname-components-schemas-identifier';
import { C4f8RoOSCustomHostnameComponentsSchemasStatus } from './c4f8-ro-oscustom-hostname-components-schemas-status';
import { C4f8RoOSCustomMetadata } from './c4f8-ro-oscustom-metadata';
import { C4f8RoOSCustomOriginServer } from './c4f8-ro-oscustom-origin-server';
import { C4f8RoOSCustomOriginSni } from './c4f8-ro-oscustom-origin-sni';
import { C4f8RoOSCustomhostname } from './c4f8-ro-oscustomhostname';
import { C4f8RoOSHostname } from './c4f8-ro-oshostname';
import { C4f8RoOSOwnershipVerification } from './c4f8-ro-osownership-verification';
import { C4f8RoOSOwnershipVerificationHttp } from './c4f8-ro-osownership-verification-http';
import { C4f8RoOSSsl } from './c4f8-ro-osssl';
import { C4f8RoOSVerificationErrors } from './c4f8-ro-osverification-errors';
/**
 * 
 * @export
 * @interface C4f8RoOSCustomHostname
 */
export interface C4f8RoOSCustomHostname extends C4f8RoOSCustomhostname {
    /**
     * 
     * @type {C4f8RoOSHostname}
     * @memberof C4f8RoOSCustomHostname
     */
    hostname: C4f8RoOSHostname;
    /**
     * 
     * @type {C4f8RoOSCustomHostnameComponentsSchemasIdentifier}
     * @memberof C4f8RoOSCustomHostname
     */
    id: C4f8RoOSCustomHostnameComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSSsl}
     * @memberof C4f8RoOSCustomHostname
     */
    ssl: C4f8RoOSSsl;
}
