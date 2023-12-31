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
import { C4f8RoOSAllowedModesDenyTraditional } from './c4f8-ro-osallowed-modes-deny-traditional';
import { C4f8RoOSDefaultMode } from './c4f8-ro-osdefault-mode';
import { C4f8RoOSModeDenyTraditional } from './c4f8-ro-osmode-deny-traditional';
import { C4f8RoOSRuleComponentsSchemasBase2 } from './c4f8-ro-osrule-components-schemas-base2';
/**
 * When triggered, traditional WAF rules cause the firewall to immediately act upon the request based on the configuration of the rule. A 'deny' rule will immediately respond to the request based on the configured rule action/mode (for example, 'block') and no other rules will be processed.
 * @export
 * @interface C4f8RoOSTraditionalDenyRule
 */
export interface C4f8RoOSTraditionalDenyRule extends C4f8RoOSRuleComponentsSchemasBase2 {
    /**
     * 
     * @type {C4f8RoOSAllowedModesDenyTraditional}
     * @memberof C4f8RoOSTraditionalDenyRule
     */
    allowedModes: C4f8RoOSAllowedModesDenyTraditional;
    /**
     * 
     * @type {C4f8RoOSDefaultMode}
     * @memberof C4f8RoOSTraditionalDenyRule
     */
    defaultMode: C4f8RoOSDefaultMode;
    /**
     * 
     * @type {C4f8RoOSModeDenyTraditional}
     * @memberof C4f8RoOSTraditionalDenyRule
     */
    mode: C4f8RoOSModeDenyTraditional;
}
