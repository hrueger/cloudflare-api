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
import { C4f8RoOSAlertBody } from './c4f8-ro-osalert-body';
import { C4f8RoOSHistoryComponentsSchemasDescription } from './c4f8-ro-oshistory-components-schemas-description';
import { C4f8RoOSHistoryComponentsSchemasName } from './c4f8-ro-oshistory-components-schemas-name';
import { C4f8RoOSMechanism } from './c4f8-ro-osmechanism';
import { C4f8RoOSMechanismType } from './c4f8-ro-osmechanism-type';
import { C4f8RoOSSchemasAlertType } from './c4f8-ro-osschemas-alert-type';
import { C4f8RoOSSent } from './c4f8-ro-ossent';
import { C4f8RoOSUuid } from './c4f8-ro-osuuid';
/**
 * 
 * @export
 * @interface C4f8RoOSHistory
 */
export interface C4f8RoOSHistory {
    /**
     * 
     * @type {C4f8RoOSAlertBody}
     * @memberof C4f8RoOSHistory
     */
    alertBody?: C4f8RoOSAlertBody;
    /**
     * 
     * @type {C4f8RoOSSchemasAlertType}
     * @memberof C4f8RoOSHistory
     */
    alertType?: C4f8RoOSSchemasAlertType;
    /**
     * 
     * @type {C4f8RoOSHistoryComponentsSchemasDescription}
     * @memberof C4f8RoOSHistory
     */
    description?: C4f8RoOSHistoryComponentsSchemasDescription;
    /**
     * 
     * @type {C4f8RoOSUuid}
     * @memberof C4f8RoOSHistory
     */
    id?: C4f8RoOSUuid;
    /**
     * 
     * @type {C4f8RoOSMechanism}
     * @memberof C4f8RoOSHistory
     */
    mechanism?: C4f8RoOSMechanism;
    /**
     * 
     * @type {C4f8RoOSMechanismType}
     * @memberof C4f8RoOSHistory
     */
    mechanismType?: C4f8RoOSMechanismType;
    /**
     * 
     * @type {C4f8RoOSHistoryComponentsSchemasName}
     * @memberof C4f8RoOSHistory
     */
    name?: C4f8RoOSHistoryComponentsSchemasName;
    /**
     * 
     * @type {C4f8RoOSSent}
     * @memberof C4f8RoOSHistory
     */
    sent?: C4f8RoOSSent;
}
