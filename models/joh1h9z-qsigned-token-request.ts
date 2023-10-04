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
import { JOh1h9zQAccessRules } from './joh1h9z-qaccess-rules';
/**
 * 
 * @export
 * @interface JOh1h9zQSignedTokenRequest
 */
export interface JOh1h9zQSignedTokenRequest {
    /**
     * The optional list of access rule constraints on the token. Access can be blocked or allowed based on an IP, IP range, or by country. Access rules are evaluated from first to last. If a rule matches, the associated action is applied and no further rules are evaluated.
     * @type {Array<JOh1h9zQAccessRules>}
     * @memberof JOh1h9zQSignedTokenRequest
     */
    accessRules?: Array<JOh1h9zQAccessRules>;
    /**
     * The optional boolean value that enables using signed tokens to access MP4 download links for a video.
     * @type {boolean}
     * @memberof JOh1h9zQSignedTokenRequest
     */
    downloadable?: boolean;
    /**
     * The optional unix epoch timestamp that specficies the time after a token is not accepted. The maximum time specification is 24 hours from issuing time. If this field is not set, the default is one hour after issuing.
     * @type {number}
     * @memberof JOh1h9zQSignedTokenRequest
     */
    exp?: number;
    /**
     * The optional ID of a Stream signing key. If present, the `pem` field is also required.
     * @type {string}
     * @memberof JOh1h9zQSignedTokenRequest
     */
    id?: string;
    /**
     * The optional unix epoch timestamp that specifies the time before a the token is not accepted. If this field is not set, the default is one hour before issuing.
     * @type {number}
     * @memberof JOh1h9zQSignedTokenRequest
     */
    nbf?: number;
    /**
     * The optional base64 encoded private key in PEM format associated with a Stream signing key. If present, the `id` field is also required.
     * @type {string}
     * @memberof JOh1h9zQSignedTokenRequest
     */
    pem?: string;
}