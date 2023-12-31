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
import { PgfDSRiERuleIdentifier } from './pgf-dsri-erule-identifier';
import { PgfDSRiETimestamp } from './pgf-dsri-etimestamp';
/**
 * 
 * @export
 * @interface PgfDSRiERule
 */
export interface PgfDSRiERule {
    /**
     * 
     * @type {PgfDSRiETimestamp}
     * @memberof PgfDSRiERule
     */
    created?: PgfDSRiETimestamp;
    /**
     * The hostname the rule will be applied to.
     * @type {string}
     * @memberof PgfDSRiERule
     */
    host?: string;
    /**
     * 
     * @type {PgfDSRiERuleIdentifier}
     * @memberof PgfDSRiERule
     */
    id?: PgfDSRiERuleIdentifier;
    /**
     * Whether the rule includes or excludes traffic from being measured.
     * @type {boolean}
     * @memberof PgfDSRiERule
     */
    inclusive?: boolean;
    /**
     * Whether the rule is paused or not.
     * @type {boolean}
     * @memberof PgfDSRiERule
     */
    isPaused?: boolean;
    /**
     * The paths the rule will be applied to.
     * @type {Array<string>}
     * @memberof PgfDSRiERule
     */
    paths?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof PgfDSRiERule
     */
    priority?: number;
}
