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
import { Tm1HTKEcAccessSeat } from './tm1-htkec-access-seat';
import { Tm1HTKEcGatewaySeat } from './tm1-htkec-gateway-seat';
import { Tm1HTKEcSeatUid } from './tm1-htkec-seat-uid';
import { Tm1HTKEcTimestamp } from './tm1-htkec-timestamp';
/**
 * 
 * @export
 * @interface Tm1HTKEcSeats
 */
export interface Tm1HTKEcSeats {
    /**
     * 
     * @type {Tm1HTKEcAccessSeat}
     * @memberof Tm1HTKEcSeats
     */
    accessSeat?: Tm1HTKEcAccessSeat;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcSeats
     */
    createdAt?: Tm1HTKEcTimestamp;
    /**
     * 
     * @type {Tm1HTKEcGatewaySeat}
     * @memberof Tm1HTKEcSeats
     */
    gatewaySeat?: Tm1HTKEcGatewaySeat;
    /**
     * 
     * @type {Tm1HTKEcSeatUid}
     * @memberof Tm1HTKEcSeats
     */
    seatUid?: Tm1HTKEcSeatUid;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcSeats
     */
    updatedAt?: Tm1HTKEcTimestamp;
}
