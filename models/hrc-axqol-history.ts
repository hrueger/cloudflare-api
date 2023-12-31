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
import { HrcAXqolAlertBody } from './hrc-axqol-alert-body';
import { HrcAXqolComponentsSchemasDescription } from './hrc-axqol-components-schemas-description';
import { HrcAXqolMechanism } from './hrc-axqol-mechanism';
import { HrcAXqolMechanismType } from './hrc-axqol-mechanism-type';
import { HrcAXqolSchemasAlertType } from './hrc-axqol-schemas-alert-type';
import { HrcAXqolSchemasName } from './hrc-axqol-schemas-name';
import { HrcAXqolSent } from './hrc-axqol-sent';
import { HrcAXqolUuid } from './hrc-axqol-uuid';
/**
 * 
 * @export
 * @interface HrcAXqolHistory
 */
export interface HrcAXqolHistory {
    /**
     * 
     * @type {HrcAXqolAlertBody}
     * @memberof HrcAXqolHistory
     */
    alertBody?: HrcAXqolAlertBody;
    /**
     * 
     * @type {HrcAXqolSchemasAlertType}
     * @memberof HrcAXqolHistory
     */
    alertType?: HrcAXqolSchemasAlertType;
    /**
     * 
     * @type {HrcAXqolComponentsSchemasDescription}
     * @memberof HrcAXqolHistory
     */
    description?: HrcAXqolComponentsSchemasDescription;
    /**
     * 
     * @type {HrcAXqolUuid}
     * @memberof HrcAXqolHistory
     */
    id?: HrcAXqolUuid;
    /**
     * 
     * @type {HrcAXqolMechanism}
     * @memberof HrcAXqolHistory
     */
    mechanism?: HrcAXqolMechanism;
    /**
     * 
     * @type {HrcAXqolMechanismType}
     * @memberof HrcAXqolHistory
     */
    mechanismType?: HrcAXqolMechanismType;
    /**
     * 
     * @type {HrcAXqolSchemasName}
     * @memberof HrcAXqolHistory
     */
    name?: HrcAXqolSchemasName;
    /**
     * 
     * @type {HrcAXqolSent}
     * @memberof HrcAXqolHistory
     */
    sent?: HrcAXqolSent;
}
