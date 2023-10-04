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
import { C4f8RoOSNotes } from './c4f8-ro-osnotes';
import { C4f8RoOSRule } from './c4f8-ro-osrule';
import { C4f8RoOSRuleComponentsSchemasIdentifier } from './c4f8-ro-osrule-components-schemas-identifier';
import { C4f8RoOSSchemasConfiguration } from './c4f8-ro-osschemas-configuration';
import { C4f8RoOSSchemasMode } from './c4f8-ro-osschemas-mode';
import { C4f8RoOSSchemasruleScope } from './c4f8-ro-osschemasrule-scope';
/**
 * 
 * @export
 * @interface C4f8RoOSSchemasRule
 */
export interface C4f8RoOSSchemasRule extends C4f8RoOSRule {
    /**
     * 
     * @type {C4f8RoOSSchemasruleScope}
     * @memberof C4f8RoOSSchemasRule
     */
    scope: C4f8RoOSSchemasruleScope;
}
