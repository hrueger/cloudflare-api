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
import { Model6KaSmMdRFirstName } from './model6-ka-sm-md-rfirst-name';
import { Model6KaSmMdRLastName } from './model6-ka-sm-md-rlast-name';
import { Model6KaSmMdRTwoFactorAuthenticationEnabled } from './model6-ka-sm-md-rtwo-factor-authentication-enabled';
/**
 * 
 * @export
 * @interface Model6KaSmMdRMemberUser
 */
export interface Model6KaSmMdRMemberUser {
    /**
     * 
     * @type {Model6KaSmMdREmail}
     * @memberof Model6KaSmMdRMemberUser
     */
    email: Model6KaSmMdREmail;
    /**
     * 
     * @type {Model6KaSmMdRFirstName}
     * @memberof Model6KaSmMdRMemberUser
     */
    firstName?: Model6KaSmMdRFirstName;
    /**
     * 
     * @type {Model6KaSmMdRCommonComponentsSchemasIdentifier}
     * @memberof Model6KaSmMdRMemberUser
     */
    id?: Model6KaSmMdRCommonComponentsSchemasIdentifier;
    /**
     * 
     * @type {Model6KaSmMdRLastName}
     * @memberof Model6KaSmMdRMemberUser
     */
    lastName?: Model6KaSmMdRLastName;
    /**
     * 
     * @type {Model6KaSmMdRTwoFactorAuthenticationEnabled}
     * @memberof Model6KaSmMdRMemberUser
     */
    twoFactorAuthenticationEnabled?: Model6KaSmMdRTwoFactorAuthenticationEnabled;
}