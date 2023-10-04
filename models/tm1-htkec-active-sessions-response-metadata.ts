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
import { Tm1HTKEcActiveSessionsResponseMetadataApps } from './tm1-htkec-active-sessions-response-metadata-apps';
/**
 * 
 * @export
 * @interface Tm1HTKEcActiveSessionsResponseMetadata
 */
export interface Tm1HTKEcActiveSessionsResponseMetadata {
    /**
     * 
     * @type {{ [key: string]: Tm1HTKEcActiveSessionsResponseMetadataApps; }}
     * @memberof Tm1HTKEcActiveSessionsResponseMetadata
     */
    apps?: { [key: string]: Tm1HTKEcActiveSessionsResponseMetadataApps; };
    /**
     * 
     * @type {number}
     * @memberof Tm1HTKEcActiveSessionsResponseMetadata
     */
    expires?: number;
    /**
     * 
     * @type {number}
     * @memberof Tm1HTKEcActiveSessionsResponseMetadata
     */
    iat?: number;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcActiveSessionsResponseMetadata
     */
    nonce?: string;
    /**
     * 
     * @type {number}
     * @memberof Tm1HTKEcActiveSessionsResponseMetadata
     */
    ttl?: number;
}
