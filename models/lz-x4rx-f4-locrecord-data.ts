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
/**
 * Components of a LOC record.
 * @export
 * @interface LzX4rxF4LOCRecordData
 */
export interface LzX4rxF4LOCRecordData {
    /**
     * Altitude of location in meters.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    altitude?: number;
    /**
     * Degrees of latitude.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    latDegrees?: number;
    /**
     * Latitude direction.
     * @type {string}
     * @memberof LzX4rxF4LOCRecordData
     */
    latDirection?: string;
    /**
     * Minutes of latitude.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    latMinutes?: number;
    /**
     * Seconds of latitude.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    latSeconds?: number;
    /**
     * Degrees of longitude.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    longDegrees?: number;
    /**
     * Longitude direction.
     * @type {string}
     * @memberof LzX4rxF4LOCRecordData
     */
    longDirection?: string;
    /**
     * Minutes of longitude.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    longMinutes?: number;
    /**
     * Seconds of longitude.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    longSeconds?: number;
    /**
     * Horizontal precision of location.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    precisionHorz?: number;
    /**
     * Vertical precision of location.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    precisionVert?: number;
    /**
     * Size of location in meters.
     * @type {number}
     * @memberof LzX4rxF4LOCRecordData
     */
    size?: number;
}
