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
import { Logging } from './logging';
import { RTW3sz4nBlockRuleActionParameters } from './rtw3sz4n-block-rule-action-parameters';
import { RTW3sz4nRule } from './rtw3sz4n-rule';
import { RTW3sz4nRuleCategory } from './rtw3sz4n-rule-category';
import { RTW3sz4nRuleEnabled } from './rtw3sz4n-rule-enabled';
import { RTW3sz4nRuleId } from './rtw3sz4n-rule-id';
/**
 * 
 * @export
 * @interface RTW3sz4nBlockRule
 */
export interface RTW3sz4nBlockRule extends RTW3sz4nRule {
    /**
     * 
     * @type {string}
     * @memberof RTW3sz4nBlockRule
     */
    action?: string;
    /**
     * 
     * @type {RTW3sz4nBlockRuleActionParameters}
     * @memberof RTW3sz4nBlockRule
     */
    actionParameters?: RTW3sz4nBlockRuleActionParameters;
    /**
     * 
     * @type {any}
     * @memberof RTW3sz4nBlockRule
     */
    description?: any;
}
