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
import { Tm1HTKEcAssociatedHostnames } from './tm1-htkec-associated-hostnames';
import { Tm1HTKEcCertificatesComponentsSchemasName } from './tm1-htkec-certificates-components-schemas-name';
import { Tm1HTKEcFingerprint } from './tm1-htkec-fingerprint';
import { Tm1HTKEcTimestamp } from './tm1-htkec-timestamp';
/**
 * 
 * @export
 * @interface Tm1HTKEcCertificates
 */
export interface Tm1HTKEcCertificates {
    /**
     * 
     * @type {Tm1HTKEcAssociatedHostnames}
     * @memberof Tm1HTKEcCertificates
     */
    associatedHostnames?: Tm1HTKEcAssociatedHostnames;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcCertificates
     */
    createdAt?: Tm1HTKEcTimestamp;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcCertificates
     */
    expiresOn?: Tm1HTKEcTimestamp;
    /**
     * 
     * @type {Tm1HTKEcFingerprint}
     * @memberof Tm1HTKEcCertificates
     */
    fingerprint?: Tm1HTKEcFingerprint;
    /**
     * The ID of the application that will use this certificate.
     * @type {any}
     * @memberof Tm1HTKEcCertificates
     */
    id?: any;
    /**
     * 
     * @type {Tm1HTKEcCertificatesComponentsSchemasName}
     * @memberof Tm1HTKEcCertificates
     */
    name?: Tm1HTKEcCertificatesComponentsSchemasName;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcCertificates
     */
    updatedAt?: Tm1HTKEcTimestamp;
}
