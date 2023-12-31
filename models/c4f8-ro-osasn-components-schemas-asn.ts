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
import { C4f8RoOSAsnCountry } from './c4f8-ro-osasn-country';
import { C4f8RoOSAsnDescription } from './c4f8-ro-osasn-description';
import { C4f8RoOSAsnType } from './c4f8-ro-osasn-type';
import { C4f8RoOSComponentsSchemasAsn } from './c4f8-ro-oscomponents-schemas-asn';
/**
 * 
 * @export
 * @interface C4f8RoOSAsnComponentsSchemasAsn
 */
export interface C4f8RoOSAsnComponentsSchemasAsn {
    /**
     * 
     * @type {C4f8RoOSComponentsSchemasAsn}
     * @memberof C4f8RoOSAsnComponentsSchemasAsn
     */
    asn?: C4f8RoOSComponentsSchemasAsn;
    /**
     * 
     * @type {C4f8RoOSAsnCountry}
     * @memberof C4f8RoOSAsnComponentsSchemasAsn
     */
    country?: C4f8RoOSAsnCountry;
    /**
     * 
     * @type {C4f8RoOSAsnDescription}
     * @memberof C4f8RoOSAsnComponentsSchemasAsn
     */
    description?: C4f8RoOSAsnDescription;
    /**
     * 
     * @type {number}
     * @memberof C4f8RoOSAsnComponentsSchemasAsn
     */
    domainCount?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof C4f8RoOSAsnComponentsSchemasAsn
     */
    topDomains?: Array<string>;
    /**
     * 
     * @type {C4f8RoOSAsnType}
     * @memberof C4f8RoOSAsnComponentsSchemasAsn
     */
    type?: C4f8RoOSAsnType;
}
