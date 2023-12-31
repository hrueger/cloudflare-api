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
import { Tm1HTKEcAuthDomain } from './tm1-htkec-auth-domain';
import { Tm1HTKEcIsUiReadOnly } from './tm1-htkec-is-ui-read-only';
import { Tm1HTKEcLoginDesign } from './tm1-htkec-login-design';
import { Tm1HTKEcName } from './tm1-htkec-name';
import { Tm1HTKEcUiReadOnlyToggleReason } from './tm1-htkec-ui-read-only-toggle-reason';
import { Tm1HTKEcUserSeatExpirationInactiveTime } from './tm1-htkec-user-seat-expiration-inactive-time';
/**
 * 
 * @export
 * @interface AccessOrganizationsBody3
 */
export interface AccessOrganizationsBody3 {
    /**
     * 
     * @type {Tm1HTKEcAuthDomain}
     * @memberof AccessOrganizationsBody3
     */
    authDomain: Tm1HTKEcAuthDomain;
    /**
     * 
     * @type {Tm1HTKEcIsUiReadOnly}
     * @memberof AccessOrganizationsBody3
     */
    isUiReadOnly?: Tm1HTKEcIsUiReadOnly;
    /**
     * 
     * @type {Tm1HTKEcLoginDesign}
     * @memberof AccessOrganizationsBody3
     */
    loginDesign?: Tm1HTKEcLoginDesign;
    /**
     * 
     * @type {Tm1HTKEcName}
     * @memberof AccessOrganizationsBody3
     */
    name: Tm1HTKEcName;
    /**
     * 
     * @type {Tm1HTKEcUiReadOnlyToggleReason}
     * @memberof AccessOrganizationsBody3
     */
    uiReadOnlyToggleReason?: Tm1HTKEcUiReadOnlyToggleReason;
    /**
     * 
     * @type {Tm1HTKEcUserSeatExpirationInactiveTime}
     * @memberof AccessOrganizationsBody3
     */
    userSeatExpirationInactiveTime?: Tm1HTKEcUserSeatExpirationInactiveTime;
}
