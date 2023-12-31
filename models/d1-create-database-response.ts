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
import { D1DatabaseIdentifier } from './d1-database-identifier';
import { D1DatabaseName } from './d1-database-name';
import { D1DatabaseVersion } from './d1-database-version';
/**
 * 
 * @export
 * @interface D1CreateDatabaseResponse
 */
export interface D1CreateDatabaseResponse {
    /**
     * Specifies the timestamp the resource was created as an ISO8601 string.
     * @type {any}
     * @memberof D1CreateDatabaseResponse
     */
    createdAt?: any;
    /**
     * 
     * @type {D1DatabaseName}
     * @memberof D1CreateDatabaseResponse
     */
    name?: D1DatabaseName;
    /**
     * 
     * @type {D1DatabaseIdentifier}
     * @memberof D1CreateDatabaseResponse
     */
    uuid?: D1DatabaseIdentifier;
    /**
     * 
     * @type {D1DatabaseVersion}
     * @memberof D1CreateDatabaseResponse
     */
    version?: D1DatabaseVersion;
}
