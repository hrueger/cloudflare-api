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
 * The definition of the redirect.
 * @export
 * @interface C4f8RoOSItemRedirect
 */
export interface C4f8RoOSItemRedirect {
    /**
     * 
     * @type {boolean}
     * @memberof C4f8RoOSItemRedirect
     */
    includeSubdomains?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof C4f8RoOSItemRedirect
     */
    preservePathSuffix?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof C4f8RoOSItemRedirect
     */
    preserveQueryString?: boolean;
    /**
     * 
     * @type {string}
     * @memberof C4f8RoOSItemRedirect
     */
    sourceUrl: string;
    /**
     * 
     * @type {number}
     * @memberof C4f8RoOSItemRedirect
     */
    statusCode?: C4f8RoOSItemRedirectStatusCodeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof C4f8RoOSItemRedirect
     */
    subpathMatching?: boolean;
    /**
     * 
     * @type {string}
     * @memberof C4f8RoOSItemRedirect
     */
    targetUrl: string;
}

/**
    * @export
    * @enum {string}
    */
export enum C4f8RoOSItemRedirectStatusCodeEnum {
    NUMBER_301 = 301,
    NUMBER_302 = 302,
    NUMBER_307 = 307,
    NUMBER_308 = 308
}

