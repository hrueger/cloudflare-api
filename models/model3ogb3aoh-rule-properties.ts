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
import { Model3ogb3aohRuleActions } from './model3ogb3aoh-rule-actions';
import { Model3ogb3aohRuleEnabled } from './model3ogb3aoh-rule-enabled';
import { Model3ogb3aohRuleIdentifier } from './model3ogb3aoh-rule-identifier';
import { Model3ogb3aohRuleMatchers } from './model3ogb3aoh-rule-matchers';
import { Model3ogb3aohRuleName } from './model3ogb3aoh-rule-name';
import { Model3ogb3aohRulePriority } from './model3ogb3aoh-rule-priority';
/**
 * 
 * @export
 * @interface Model3ogb3aohRuleProperties
 */
export interface Model3ogb3aohRuleProperties {
    /**
     * 
     * @type {Model3ogb3aohRuleActions}
     * @memberof Model3ogb3aohRuleProperties
     */
    actions?: Model3ogb3aohRuleActions;
    /**
     * 
     * @type {Model3ogb3aohRuleEnabled}
     * @memberof Model3ogb3aohRuleProperties
     */
    enabled?: Model3ogb3aohRuleEnabled;
    /**
     * 
     * @type {Model3ogb3aohRuleMatchers}
     * @memberof Model3ogb3aohRuleProperties
     */
    matchers?: Model3ogb3aohRuleMatchers;
    /**
     * 
     * @type {Model3ogb3aohRuleName}
     * @memberof Model3ogb3aohRuleProperties
     */
    name?: Model3ogb3aohRuleName;
    /**
     * 
     * @type {Model3ogb3aohRulePriority}
     * @memberof Model3ogb3aohRuleProperties
     */
    priority?: Model3ogb3aohRulePriority;
    /**
     * 
     * @type {Model3ogb3aohRuleIdentifier}
     * @memberof Model3ogb3aohRuleProperties
     */
    tag?: Model3ogb3aohRuleIdentifier;
}
