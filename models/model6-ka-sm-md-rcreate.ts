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
import { Model6KaSmMdREmail } from './model6-ka-sm-md-remail';
import { Model6KaSmMdRRoleComponentsSchemasIdentifier } from './model6-ka-sm-md-rrole-components-schemas-identifier';
/**
 * 
 * @export
 * @interface Model6KaSmMdRCreate
 */
export interface Model6KaSmMdRCreate {
    /**
     * 
     * @type {Model6KaSmMdREmail}
     * @memberof Model6KaSmMdRCreate
     */
    email: Model6KaSmMdREmail;
    /**
     * Array of roles associated with this member.
     * @type {Array<Model6KaSmMdRRoleComponentsSchemasIdentifier>}
     * @memberof Model6KaSmMdRCreate
     */
    roles: Array<Model6KaSmMdRRoleComponentsSchemasIdentifier>;
    /**
     * 
     * @type {string}
     * @memberof Model6KaSmMdRCreate
     */
    status?: string;
}
