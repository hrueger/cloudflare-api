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
/**
 * A rule object containing conditions and overrides for this load balancer to evaluate.
 * @export
 * @interface VXFDQCwXRulesInner
 */
export interface VXFDQCwXRulesInner {
    /**
     * The condition expressions to evaluate. If the condition evaluates to true, the overrides or fixed_response in this rule will be applied. An empty condition is always true. For more details on condition expressions, please see https://developers.cloudflare.com/load-balancing/understand-basics/load-balancing-rules/expressions.
     * @type {string}
     * @memberof VXFDQCwXRulesInner
     */
    condition?: string;
    /**
     * Disable this specific rule. It will no longer be evaluated by this load balancer.
     * @type {boolean}
     * @memberof VXFDQCwXRulesInner
     */
    disabled?: boolean;
    /**
     * A collection of fields used to directly respond to the eyeball instead of routing to a pool. If a fixed_response is supplied the rule will be marked as terminates.
     * @type {any}
     * @memberof VXFDQCwXRulesInner
     */
    fixedResponse?: any;
    /**
     * Name of this rule. Only used for human readability.
     * @type {string}
     * @memberof VXFDQCwXRulesInner
     */
    name?: string;
    /**
     * A collection of overrides to apply to the load balancer when this rule's condition is true. All fields are optional.
     * @type {any}
     * @memberof VXFDQCwXRulesInner
     */
    overrides?: any;
    /**
     * The order in which rules should be executed in relation to each other. Lower values are executed first. Values do not need to be sequential. If no value is provided for any rule the array order of the rules field will be used to assign a priority.
     * @type {number}
     * @memberof VXFDQCwXRulesInner
     */
    priority?: number;
    /**
     * If this rule's condition is true, this causes rule evaluation to stop after processing this rule.
     * @type {boolean}
     * @memberof VXFDQCwXRulesInner
     */
    terminates?: boolean;
}
