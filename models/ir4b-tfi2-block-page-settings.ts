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
 * Block page layout settings.
 * @export
 * @interface Ir4bTFI2BlockPageSettings
 */
export interface Ir4bTFI2BlockPageSettings {
    /**
     * Block page background color in #rrggbb format.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    backgroundColor?: string;
    /**
     * Enable only cipher suites and TLS versions compliant with FIPS 140-2.
     * @type {boolean}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    enabled?: boolean;
    /**
     * Block page footer text.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    footerText?: string;
    /**
     * Block page header text.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    headerText?: string;
    /**
     * Full URL to the logo file.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    logoPath?: string;
    /**
     * Admin email for users to contact.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    mailtoAddress?: string;
    /**
     * Subject line for emails created from block page.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    mailtoSubject?: string;
    /**
     * Block page title.
     * @type {string}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    name?: string;
    /**
     * Suppress detailed info at the bottom of the block page.
     * @type {boolean}
     * @memberof Ir4bTFI2BlockPageSettings
     */
    suppressFooter?: boolean;
}