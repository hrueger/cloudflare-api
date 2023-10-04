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
 * 
 * @export
 * @interface ZzQH0lDwCrowdstrikeInputRequest
 */
export interface ZzQH0lDwCrowdstrikeInputRequest {
    /**
     * Posture Integration ID.
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    connectionId: string;
    /**
     * Operator
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    operator?: ZzQH0lDwCrowdstrikeInputRequestOperatorEnum;
    /**
     * Os Version
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    os?: string;
    /**
     * overall
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    overall?: string;
    /**
     * SensorConfig
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    sensorConfig?: string;
    /**
     * Version
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    version?: string;
    /**
     * Version Operator
     * @type {string}
     * @memberof ZzQH0lDwCrowdstrikeInputRequest
     */
    versionOperator?: ZzQH0lDwCrowdstrikeInputRequestVersionOperatorEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum ZzQH0lDwCrowdstrikeInputRequestOperatorEnum {
    LessThan = '<',
    LessThanOrEqualTo = '<=',
    GreaterThan = '>',
    GreaterThanOrEqualTo = '>=',
     = '=='
}
/**
    * @export
    * @enum {string}
    */
export enum ZzQH0lDwCrowdstrikeInputRequestVersionOperatorEnum {
    LessThan = '<',
    LessThanOrEqualTo = '<=',
    GreaterThan = '>',
    GreaterThanOrEqualTo = '>=',
     = '=='
}
