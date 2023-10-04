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
import { C4f8RoOSSchemasDomainName } from './c4f8-ro-osschemas-domain-name';
import { Model5gqLs0vODomainhistoryCategorizations } from './model5gq-ls0v-odomainhistory-categorizations';
/**
 * 
 * @export
 * @interface C4f8RoOSDomainHistory
 */
export interface C4f8RoOSDomainHistory {
    /**
     * 
     * @type {Array<Model5gqLs0vODomainhistoryCategorizations>}
     * @memberof C4f8RoOSDomainHistory
     */
    categorizations?: Array<Model5gqLs0vODomainhistoryCategorizations>;
    /**
     * 
     * @type {C4f8RoOSSchemasDomainName}
     * @memberof C4f8RoOSDomainHistory
     */
    domain?: C4f8RoOSSchemasDomainName;
}