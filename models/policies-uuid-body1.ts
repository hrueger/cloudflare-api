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
import { HrcAXqolAlertType } from './hrc-axqol-alert-type';
import { HrcAXqolEnabled } from './hrc-axqol-enabled';
import { HrcAXqolFilters } from './hrc-axqol-filters';
import { HrcAXqolMechanisms } from './hrc-axqol-mechanisms';
import { HrcAXqolSchemasDescription } from './hrc-axqol-schemas-description';
import { HrcAXqolSchemasName } from './hrc-axqol-schemas-name';
/**
 * 
 * @export
 * @interface PoliciesUuidBody1
 */
export interface PoliciesUuidBody1 {
    /**
     * 
     * @type {HrcAXqolAlertType}
     * @memberof PoliciesUuidBody1
     */
    alertType?: HrcAXqolAlertType;
    /**
     * 
     * @type {HrcAXqolSchemasDescription}
     * @memberof PoliciesUuidBody1
     */
    description?: HrcAXqolSchemasDescription;
    /**
     * 
     * @type {HrcAXqolEnabled}
     * @memberof PoliciesUuidBody1
     */
    enabled?: HrcAXqolEnabled;
    /**
     * 
     * @type {HrcAXqolFilters}
     * @memberof PoliciesUuidBody1
     */
    filters?: HrcAXqolFilters;
    /**
     * 
     * @type {HrcAXqolMechanisms}
     * @memberof PoliciesUuidBody1
     */
    mechanisms?: HrcAXqolMechanisms;
    /**
     * 
     * @type {HrcAXqolSchemasName}
     * @memberof PoliciesUuidBody1
     */
    name?: HrcAXqolSchemasName;
}
