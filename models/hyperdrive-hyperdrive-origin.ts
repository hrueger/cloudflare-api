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
import { HyperdriveHyperdriveScheme } from './hyperdrive-hyperdrive-scheme';
/**
 * 
 * @export
 * @interface HyperdriveHyperdriveOrigin
 */
export interface HyperdriveHyperdriveOrigin {
    /**
     * The name of your origin database.
     * @type {string}
     * @memberof HyperdriveHyperdriveOrigin
     */
    database?: string;
    /**
     * The host (hostname or IP) of your origin database.
     * @type {string}
     * @memberof HyperdriveHyperdriveOrigin
     */
    host?: string;
    /**
     * The port (default: 5432 for Postgres) of your origin database.
     * @type {number}
     * @memberof HyperdriveHyperdriveOrigin
     */
    port?: number;
    /**
     * 
     * @type {HyperdriveHyperdriveScheme}
     * @memberof HyperdriveHyperdriveOrigin
     */
    scheme?: HyperdriveHyperdriveScheme;
    /**
     * The user of your origin database.
     * @type {string}
     * @memberof HyperdriveHyperdriveOrigin
     */
    user?: string;
}
