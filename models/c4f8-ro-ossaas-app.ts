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
import { C4f8RoOSSaasAppCustomAttributes } from './c4f8-ro-ossaas-app-custom-attributes';
import { C4f8RoOSTimestamp } from './c4f8-ro-ostimestamp';
/**
 * 
 * @export
 * @interface C4f8RoOSSaasApp
 */
export interface C4f8RoOSSaasApp {
    /**
     * The service provider's endpoint that is responsible for receiving and parsing a SAML assertion.
     * @type {string}
     * @memberof C4f8RoOSSaasApp
     */
    consumerServiceUrl?: string;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSSaasApp
     */
    createdAt?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSSaasAppCustomAttributes}
     * @memberof C4f8RoOSSaasApp
     */
    customAttributes?: C4f8RoOSSaasAppCustomAttributes;
    /**
     * The unique identifier for your SaaS application.
     * @type {string}
     * @memberof C4f8RoOSSaasApp
     */
    idpEntityId?: string;
    /**
     * The format of the name identifier sent to the SaaS application.
     * @type {string}
     * @memberof C4f8RoOSSaasApp
     */
    nameIdFormat?: C4f8RoOSSaasAppNameIdFormatEnum;
    /**
     * The Access public certificate that will be used to verify your identity.
     * @type {string}
     * @memberof C4f8RoOSSaasApp
     */
    publicKey?: string;
    /**
     * A globally unique name for an identity or service provider.
     * @type {string}
     * @memberof C4f8RoOSSaasApp
     */
    spEntityId?: string;
    /**
     * The endpoint where your SaaS application will send login requests.
     * @type {string}
     * @memberof C4f8RoOSSaasApp
     */
    ssoEndpoint?: string;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSSaasApp
     */
    updatedAt?: C4f8RoOSTimestamp;
}

/**
    * @export
    * @enum {string}
    */
export enum C4f8RoOSSaasAppNameIdFormatEnum {
    Id = 'id',
    Email = 'email'
}

