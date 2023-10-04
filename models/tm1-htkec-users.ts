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
import { Tm1HTKEcActiveDeviceCount } from './tm1-htkec-active-device-count';
import { Tm1HTKEcLastSuccessfulLogin } from './tm1-htkec-last-successful-login';
import { Tm1HTKEcSchemasAccessSeat } from './tm1-htkec-schemas-access-seat';
import { Tm1HTKEcSchemasEmail } from './tm1-htkec-schemas-email';
import { Tm1HTKEcSchemasGatewaySeat } from './tm1-htkec-schemas-gateway-seat';
import { Tm1HTKEcSchemasId } from './tm1-htkec-schemas-id';
import { Tm1HTKEcSeatUid } from './tm1-htkec-seat-uid';
import { Tm1HTKEcTimestamp } from './tm1-htkec-timestamp';
import { Tm1HTKEcUid } from './tm1-htkec-uid';
import { Tm1HTKEcUsersComponentsSchemasName } from './tm1-htkec-users-components-schemas-name';
/**
 * 
 * @export
 * @interface Tm1HTKEcUsers
 */
export interface Tm1HTKEcUsers {
    /**
     * 
     * @type {Tm1HTKEcSchemasAccessSeat}
     * @memberof Tm1HTKEcUsers
     */
    accessSeat?: Tm1HTKEcSchemasAccessSeat;
    /**
     * 
     * @type {Tm1HTKEcActiveDeviceCount}
     * @memberof Tm1HTKEcUsers
     */
    activeDeviceCount?: Tm1HTKEcActiveDeviceCount;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcUsers
     */
    createdAt?: Tm1HTKEcTimestamp;
    /**
     * 
     * @type {Tm1HTKEcSchemasEmail}
     * @memberof Tm1HTKEcUsers
     */
    email?: Tm1HTKEcSchemasEmail;
    /**
     * 
     * @type {Tm1HTKEcSchemasGatewaySeat}
     * @memberof Tm1HTKEcUsers
     */
    gatewaySeat?: Tm1HTKEcSchemasGatewaySeat;
    /**
     * 
     * @type {Tm1HTKEcSchemasId}
     * @memberof Tm1HTKEcUsers
     */
    id?: Tm1HTKEcSchemasId;
    /**
     * 
     * @type {Tm1HTKEcLastSuccessfulLogin}
     * @memberof Tm1HTKEcUsers
     */
    lastSuccessfulLogin?: Tm1HTKEcLastSuccessfulLogin;
    /**
     * 
     * @type {Tm1HTKEcUsersComponentsSchemasName}
     * @memberof Tm1HTKEcUsers
     */
    name?: Tm1HTKEcUsersComponentsSchemasName;
    /**
     * 
     * @type {Tm1HTKEcSeatUid}
     * @memberof Tm1HTKEcUsers
     */
    seatUid?: Tm1HTKEcSeatUid;
    /**
     * 
     * @type {Tm1HTKEcUid}
     * @memberof Tm1HTKEcUsers
     */
    uid?: Tm1HTKEcUid;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcUsers
     */
    updatedAt?: Tm1HTKEcTimestamp;
}
