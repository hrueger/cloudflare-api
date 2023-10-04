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
 * Certificate's required validation record.
 * @export
 * @interface C4f8RoOSValidationRecord
 */
export interface C4f8RoOSValidationRecord {
    /**
     * The set of email addresses that the certificate authority (CA) will use to complete domain validation.
     * @type {Array<any>}
     * @memberof C4f8RoOSValidationRecord
     */
    emails?: Array<any>;
    /**
     * The content that the certificate authority (CA) will expect to find at the http_url during the domain validation.
     * @type {string}
     * @memberof C4f8RoOSValidationRecord
     */
    httpBody?: string;
    /**
     * The url that will be checked during domain validation.
     * @type {string}
     * @memberof C4f8RoOSValidationRecord
     */
    httpUrl?: string;
    /**
     * The hostname that the certificate authority (CA) will check for a TXT record during domain validation .
     * @type {string}
     * @memberof C4f8RoOSValidationRecord
     */
    txtName?: string;
    /**
     * The TXT record that the certificate authority (CA) will check during domain validation.
     * @type {string}
     * @memberof C4f8RoOSValidationRecord
     */
    txtValue?: string;
}
