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
import { C4f8RoOSCidr } from './c4f8-ro-oscidr';
import { C4f8RoOSCommonComponentsSchemasIdentifier } from './c4f8-ro-oscommon-components-schemas-identifier';
import { C4f8RoOSDelegatedAccountIdentifier } from './c4f8-ro-osdelegated-account-identifier';
import { C4f8RoOSDelegationIdentifier } from './c4f8-ro-osdelegation-identifier';
import { C4f8RoOSTimestamp } from './c4f8-ro-ostimestamp';
/**
 * 
 * @export
 * @interface C4f8RoOSIpamDelegations
 */
export interface C4f8RoOSIpamDelegations {
    /**
     * 
     * @type {C4f8RoOSCidr}
     * @memberof C4f8RoOSIpamDelegations
     */
    cidr?: C4f8RoOSCidr;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSIpamDelegations
     */
    createdAt?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSDelegatedAccountIdentifier}
     * @memberof C4f8RoOSIpamDelegations
     */
    delegatedAccountId?: C4f8RoOSDelegatedAccountIdentifier;
    /**
     * 
     * @type {C4f8RoOSDelegationIdentifier}
     * @memberof C4f8RoOSIpamDelegations
     */
    id?: C4f8RoOSDelegationIdentifier;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSIpamDelegations
     */
    modifiedAt?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSCommonComponentsSchemasIdentifier}
     * @memberof C4f8RoOSIpamDelegations
     */
    parentPrefixId?: C4f8RoOSCommonComponentsSchemasIdentifier;
}
