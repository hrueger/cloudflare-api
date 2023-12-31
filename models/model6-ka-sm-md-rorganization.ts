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
import { Model6KaSmMdRCommonComponentsSchemasIdentifier } from './model6-ka-sm-md-rcommon-components-schemas-identifier';
import { Model6KaSmMdRComponentsSchemasStatus } from './model6-ka-sm-md-rcomponents-schemas-status';
import { Model6KaSmMdRSchemasName } from './model6-ka-sm-md-rschemas-name';
import { Model6KaSmMdRSchemasPermissions } from './model6-ka-sm-md-rschemas-permissions';
/**
 * 
 * @export
 * @interface Model6KaSmMdROrganization
 */
export interface Model6KaSmMdROrganization {
    /**
     * 
     * @type {Model6KaSmMdRCommonComponentsSchemasIdentifier}
     * @memberof Model6KaSmMdROrganization
     */
    id?: Model6KaSmMdRCommonComponentsSchemasIdentifier;
    /**
     * 
     * @type {Model6KaSmMdRSchemasName}
     * @memberof Model6KaSmMdROrganization
     */
    name?: Model6KaSmMdRSchemasName;
    /**
     * 
     * @type {Model6KaSmMdRSchemasPermissions}
     * @memberof Model6KaSmMdROrganization
     */
    permissions?: Model6KaSmMdRSchemasPermissions;
    /**
     * List of roles that a user has within an organization.
     * @type {Array<string>}
     * @memberof Model6KaSmMdROrganization
     */
    roles?: Array<string>;
    /**
     * 
     * @type {Model6KaSmMdRComponentsSchemasStatus}
     * @memberof Model6KaSmMdROrganization
     */
    status?: Model6KaSmMdRComponentsSchemasStatus;
}
