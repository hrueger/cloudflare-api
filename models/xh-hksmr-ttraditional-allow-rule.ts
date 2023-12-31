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
import { XhHksmrTAllowedModesAllowTraditional } from './xh-hksmr-tallowed-modes-allow-traditional';
import { XhHksmrTBase } from './xh-hksmr-tbase';
import { XhHksmrTBaseGroup } from './xh-hksmr-tbase-group';
import { XhHksmrTIdentifier } from './xh-hksmr-tidentifier';
import { XhHksmrTModeAllowTraditional } from './xh-hksmr-tmode-allow-traditional';
import { XhHksmrTPriority } from './xh-hksmr-tpriority';
import { XhHksmrTRuleComponentsSchemasIdentifier } from './xh-hksmr-trule-components-schemas-identifier';
import { XhHksmrTSchemasDescription } from './xh-hksmr-tschemas-description';
/**
 * When triggered, traditional WAF rules cause the firewall to immediately act on the request based on the rule configuration. An 'allow' rule will immediately allow the request and no other rules will be processed.
 * @export
 * @interface XhHksmrTTraditionalAllowRule
 */
export interface XhHksmrTTraditionalAllowRule extends XhHksmrTBase {
    /**
     * 
     * @type {XhHksmrTAllowedModesAllowTraditional}
     * @memberof XhHksmrTTraditionalAllowRule
     */
    allowedModes: XhHksmrTAllowedModesAllowTraditional;
    /**
     * 
     * @type {XhHksmrTModeAllowTraditional}
     * @memberof XhHksmrTTraditionalAllowRule
     */
    mode: XhHksmrTModeAllowTraditional;
}
