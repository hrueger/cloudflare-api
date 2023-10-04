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
import { Model6KaSmMdREmail } from './model6-ka-sm-md-remail';
import { Model6KaSmMdRMemberComponentsSchemasName } from './model6-ka-sm-md-rmember-components-schemas-name';
import { Model6KaSmMdRSchemasRole } from './model6-ka-sm-md-rschemas-role';
/**
 * 
 * @export
 * @interface Model6KaSmMdRComponentsSchemasMember
 */
export interface Model6KaSmMdRComponentsSchemasMember {
    /**
     * 
     * @type {Model6KaSmMdREmail}
     * @memberof Model6KaSmMdRComponentsSchemasMember
     */
    email: Model6KaSmMdREmail;
    /**
     * 
     * @type {Model6KaSmMdRCommonComponentsSchemasIdentifier}
     * @memberof Model6KaSmMdRComponentsSchemasMember
     */
    id: Model6KaSmMdRCommonComponentsSchemasIdentifier;
    /**
     * 
     * @type {Model6KaSmMdRMemberComponentsSchemasName}
     * @memberof Model6KaSmMdRComponentsSchemasMember
     */
    name: Model6KaSmMdRMemberComponentsSchemasName;
    /**
     * Roles assigned to this Member.
     * @type {Array<Model6KaSmMdRSchemasRole>}
     * @memberof Model6KaSmMdRComponentsSchemasMember
     */
    roles: Array<Model6KaSmMdRSchemasRole>;
    /**
     * A member's status in the organization.
     * @type {string}
     * @memberof Model6KaSmMdRComponentsSchemasMember
     */
    status: string;
}
