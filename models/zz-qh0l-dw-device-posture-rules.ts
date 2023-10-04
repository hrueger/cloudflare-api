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
import { ZzQH0lDwDescription } from './zz-qh0l-dw-description';
import { ZzQH0lDwExpiration } from './zz-qh0l-dw-expiration';
import { ZzQH0lDwInput } from './zz-qh0l-dw-input';
import { ZzQH0lDwMatch } from './zz-qh0l-dw-match';
import { ZzQH0lDwName } from './zz-qh0l-dw-name';
import { ZzQH0lDwSchedule } from './zz-qh0l-dw-schedule';
import { ZzQH0lDwType } from './zz-qh0l-dw-type';
import { ZzQH0lDwUuid } from './zz-qh0l-dw-uuid';
/**
 * 
 * @export
 * @interface ZzQH0lDwDevicePostureRules
 */
export interface ZzQH0lDwDevicePostureRules {
    /**
     * 
     * @type {ZzQH0lDwDescription}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    description?: ZzQH0lDwDescription;
    /**
     * 
     * @type {ZzQH0lDwExpiration}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    expiration?: ZzQH0lDwExpiration;
    /**
     * 
     * @type {ZzQH0lDwUuid}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    id?: ZzQH0lDwUuid;
    /**
     * 
     * @type {ZzQH0lDwInput}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    input?: ZzQH0lDwInput;
    /**
     * 
     * @type {ZzQH0lDwMatch}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    match?: ZzQH0lDwMatch;
    /**
     * 
     * @type {ZzQH0lDwName}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    name?: ZzQH0lDwName;
    /**
     * 
     * @type {ZzQH0lDwSchedule}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    schedule?: ZzQH0lDwSchedule;
    /**
     * 
     * @type {ZzQH0lDwType}
     * @memberof ZzQH0lDwDevicePostureRules
     */
    type?: ZzQH0lDwType;
}
