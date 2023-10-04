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
import { C4f8RoOSActiveDeviceCount } from './c4f8-ro-osactive-device-count';
import { C4f8RoOSComponentsSchemasEmail } from './c4f8-ro-oscomponents-schemas-email';
import { C4f8RoOSLastSuccessfulLogin } from './c4f8-ro-oslast-successful-login';
import { C4f8RoOSSchemasAccessSeat } from './c4f8-ro-osschemas-access-seat';
import { C4f8RoOSSchemasGatewaySeat } from './c4f8-ro-osschemas-gateway-seat';
import { C4f8RoOSSeatUid } from './c4f8-ro-osseat-uid';
import { C4f8RoOSTimestamp } from './c4f8-ro-ostimestamp';
import { C4f8RoOSUid } from './c4f8-ro-osuid';
import { C4f8RoOSUsersComponentsSchemasId } from './c4f8-ro-osusers-components-schemas-id';
import { C4f8RoOSUsersComponentsSchemasName } from './c4f8-ro-osusers-components-schemas-name';
/**
 * 
 * @export
 * @interface C4f8RoOSUsers
 */
export interface C4f8RoOSUsers {
    /**
     * 
     * @type {C4f8RoOSSchemasAccessSeat}
     * @memberof C4f8RoOSUsers
     */
    accessSeat?: C4f8RoOSSchemasAccessSeat;
    /**
     * 
     * @type {C4f8RoOSActiveDeviceCount}
     * @memberof C4f8RoOSUsers
     */
    activeDeviceCount?: C4f8RoOSActiveDeviceCount;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSUsers
     */
    createdAt?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSComponentsSchemasEmail}
     * @memberof C4f8RoOSUsers
     */
    email?: C4f8RoOSComponentsSchemasEmail;
    /**
     * 
     * @type {C4f8RoOSSchemasGatewaySeat}
     * @memberof C4f8RoOSUsers
     */
    gatewaySeat?: C4f8RoOSSchemasGatewaySeat;
    /**
     * 
     * @type {C4f8RoOSUsersComponentsSchemasId}
     * @memberof C4f8RoOSUsers
     */
    id?: C4f8RoOSUsersComponentsSchemasId;
    /**
     * 
     * @type {C4f8RoOSLastSuccessfulLogin}
     * @memberof C4f8RoOSUsers
     */
    lastSuccessfulLogin?: C4f8RoOSLastSuccessfulLogin;
    /**
     * 
     * @type {C4f8RoOSUsersComponentsSchemasName}
     * @memberof C4f8RoOSUsers
     */
    name?: C4f8RoOSUsersComponentsSchemasName;
    /**
     * 
     * @type {C4f8RoOSSeatUid}
     * @memberof C4f8RoOSUsers
     */
    seatUid?: C4f8RoOSSeatUid;
    /**
     * 
     * @type {C4f8RoOSUid}
     * @memberof C4f8RoOSUsers
     */
    uid?: C4f8RoOSUid;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSUsers
     */
    updatedAt?: C4f8RoOSTimestamp;
}