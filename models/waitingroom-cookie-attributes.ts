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
 * Configures cookie attributes for the waiting room cookie. This encrypted cookie stores a user's status in the waiting room, such as queue position.
 * @export
 * @interface WaitingroomCookieAttributes
 */
export interface WaitingroomCookieAttributes {
    /**
     * Configures the SameSite attribute on the waiting room cookie. Value `auto` will be translated to `lax` or `none` depending if **Always Use HTTPS** is enabled. Note that when using value `none`, the secure attribute cannot be set to `never`.
     * @type {string}
     * @memberof WaitingroomCookieAttributes
     */
    samesite?: WaitingroomCookieAttributesSamesiteEnum;
    /**
     * Configures the Secure attribute on the waiting room cookie. Value `always` indicates that the Secure attribute will be set in the Set-Cookie header, `never` indicates that the Secure attribute will not be set, and `auto` will set the Secure attribute depending if **Always Use HTTPS** is enabled.
     * @type {string}
     * @memberof WaitingroomCookieAttributes
     */
    secure?: WaitingroomCookieAttributesSecureEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum WaitingroomCookieAttributesSamesiteEnum {
    Auto = 'auto',
    Lax = 'lax',
    None = 'none',
    Strict = 'strict'
}
/**
    * @export
    * @enum {string}
    */
export enum WaitingroomCookieAttributesSecureEnum {
    Auto = 'auto',
    Always = 'always',
    Never = 'never'
}

