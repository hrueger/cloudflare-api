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
import { C4f8RoOSAlertType } from './c4f8-ro-osalert-type';
import { C4f8RoOSComponentsSchemasFilters } from './c4f8-ro-oscomponents-schemas-filters';
import { C4f8RoOSMechanisms } from './c4f8-ro-osmechanisms';
import { C4f8RoOSPoliciesComponentsSchemasDescription } from './c4f8-ro-ospolicies-components-schemas-description';
import { C4f8RoOSPoliciesComponentsSchemasEnabled } from './c4f8-ro-ospolicies-components-schemas-enabled';
import { C4f8RoOSPoliciesComponentsSchemasName2 } from './c4f8-ro-ospolicies-components-schemas-name2';
import { C4f8RoOSTimestamp } from './c4f8-ro-ostimestamp';
import { C4f8RoOSUuid } from './c4f8-ro-osuuid';
/**
 * 
 * @export
 * @interface C4f8RoOSComponentsSchemasPolicies
 */
export interface C4f8RoOSComponentsSchemasPolicies {
    /**
     * 
     * @type {C4f8RoOSAlertType}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    alertType?: C4f8RoOSAlertType;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    created?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSPoliciesComponentsSchemasDescription}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    description?: C4f8RoOSPoliciesComponentsSchemasDescription;
    /**
     * 
     * @type {C4f8RoOSPoliciesComponentsSchemasEnabled}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    enabled?: C4f8RoOSPoliciesComponentsSchemasEnabled;
    /**
     * 
     * @type {C4f8RoOSComponentsSchemasFilters}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    filters?: C4f8RoOSComponentsSchemasFilters;
    /**
     * 
     * @type {C4f8RoOSUuid}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    id?: C4f8RoOSUuid;
    /**
     * 
     * @type {C4f8RoOSMechanisms}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    mechanisms?: C4f8RoOSMechanisms;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    modified?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSPoliciesComponentsSchemasName2}
     * @memberof C4f8RoOSComponentsSchemasPolicies
     */
    name?: C4f8RoOSPoliciesComponentsSchemasName2;
}
