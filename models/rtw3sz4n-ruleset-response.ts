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
import { RTW3sz4nRulesResponse } from './rtw3sz4n-rules-response';
import { RTW3sz4nRuleset } from './rtw3sz4n-ruleset';
import { RTW3sz4nRulesetId } from './rtw3sz4n-ruleset-id';
import { RTW3sz4nRulesetKind } from './rtw3sz4n-ruleset-kind';
import { RTW3sz4nRulesetPhase } from './rtw3sz4n-ruleset-phase';
import { RTW3sz4nRulesetVersion } from './rtw3sz4n-ruleset-version';
/**
 * 
 * @export
 * @interface RTW3sz4nRulesetResponse
 */
export interface RTW3sz4nRulesetResponse extends RTW3sz4nRuleset {
    /**
     * 
     * @type {RTW3sz4nRulesResponse}
     * @memberof RTW3sz4nRulesetResponse
     */
    rules: RTW3sz4nRulesResponse;
}
