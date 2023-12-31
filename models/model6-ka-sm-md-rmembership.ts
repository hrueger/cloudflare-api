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
import { Model6KaSmMdRApiAccessEnabled } from './model6-ka-sm-md-rapi-access-enabled';
import { Model6KaSmMdRCode } from './model6-ka-sm-md-rcode';
import { Model6KaSmMdRMembershipComponentsSchemasIdentifier } from './model6-ka-sm-md-rmembership-components-schemas-identifier';
import { Model6KaSmMdRPermissions } from './model6-ka-sm-md-rpermissions';
import { Model6KaSmMdRRoles } from './model6-ka-sm-md-rroles';
import { Model6KaSmMdRSchemasAccount } from './model6-ka-sm-md-rschemas-account';
import { Model6KaSmMdRSchemasStatus } from './model6-ka-sm-md-rschemas-status';
/**
 * 
 * @export
 * @interface Model6KaSmMdRMembership
 */
export interface Model6KaSmMdRMembership {
    /**
     * 
     * @type {Model6KaSmMdRSchemasAccount}
     * @memberof Model6KaSmMdRMembership
     */
    account?: Model6KaSmMdRSchemasAccount;
    /**
     * 
     * @type {Model6KaSmMdRApiAccessEnabled}
     * @memberof Model6KaSmMdRMembership
     */
    apiAccessEnabled?: Model6KaSmMdRApiAccessEnabled;
    /**
     * 
     * @type {Model6KaSmMdRCode}
     * @memberof Model6KaSmMdRMembership
     */
    code?: Model6KaSmMdRCode;
    /**
     * 
     * @type {Model6KaSmMdRMembershipComponentsSchemasIdentifier}
     * @memberof Model6KaSmMdRMembership
     */
    id?: Model6KaSmMdRMembershipComponentsSchemasIdentifier;
    /**
     * All access permissions for the user at the account.
     * @type {Model6KaSmMdRPermissions}
     * @memberof Model6KaSmMdRMembership
     */
    permissions?: Model6KaSmMdRPermissions;
    /**
     * 
     * @type {Model6KaSmMdRRoles}
     * @memberof Model6KaSmMdRMembership
     */
    roles?: Model6KaSmMdRRoles;
    /**
     * 
     * @type {Model6KaSmMdRSchemasStatus}
     * @memberof Model6KaSmMdRMembership
     */
    status?: Model6KaSmMdRSchemasStatus;
}
