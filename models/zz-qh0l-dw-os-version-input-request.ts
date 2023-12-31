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
 * @interface ZzQH0lDwOsVersionInputRequest
 */
export interface ZzQH0lDwOsVersionInputRequest {
    /**
     * Operating System
     * @type {string}
     * @memberof ZzQH0lDwOsVersionInputRequest
     */
    operatingSystem: ZzQH0lDwOsVersionInputRequestOperatingSystemEnum;
    /**
     * Operator
     * @type {string}
     * @memberof ZzQH0lDwOsVersionInputRequest
     */
    operator: ZzQH0lDwOsVersionInputRequestOperatorEnum;
    /**
     * Operating System Distribution Name (linux only)
     * @type {string}
     * @memberof ZzQH0lDwOsVersionInputRequest
     */
    osDistroName?: string;
    /**
     * Version of OS Distribution (linux only)
     * @type {string}
     * @memberof ZzQH0lDwOsVersionInputRequest
     */
    osDistroRevision?: string;
    /**
     * Product Verison Extra that Mac OS uses (mac only)
     * @type {string}
     * @memberof ZzQH0lDwOsVersionInputRequest
     */
    osVersionExtra?: string;
    /**
     * Version of OS
     * @type {string}
     * @memberof ZzQH0lDwOsVersionInputRequest
     */
    version: string;
}

/**
    * @export
    * @enum {string}
    */
export enum ZzQH0lDwOsVersionInputRequestOperatingSystemEnum {
    Windows = 'windows'
}
/**
    * @export
    * @enum {string}
    */
export enum ZzQH0lDwOsVersionInputRequestOperatorEnum {
    LessThan = '<',
    LessThanOrEqualTo = '<=',
    GreaterThan = '>',
    GreaterThanOrEqualTo = '>=',
    Equal = '=='
}

