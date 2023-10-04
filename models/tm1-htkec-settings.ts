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
 * @interface Tm1HTKEcSettings
 */
export interface Tm1HTKEcSettings {
    /**
     * Request client certificates for this hostname in China. Can only be set to true if this zone is china network enabled.
     * @type {boolean}
     * @memberof Tm1HTKEcSettings
     */
    chinaNetwork: boolean;
    /**
     * Client Certificate Forwarding is a feature that takes the client cert provided by the eyeball to the edge, and forwards it to the origin as a HTTP header to allow logging on the origin.
     * @type {boolean}
     * @memberof Tm1HTKEcSettings
     */
    clientCertificateForwarding: boolean;
    /**
     * The hostname that these settings apply to.
     * @type {string}
     * @memberof Tm1HTKEcSettings
     */
    hostname: string;
}
