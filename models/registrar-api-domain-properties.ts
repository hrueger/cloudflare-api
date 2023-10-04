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
import { RegistrarApiAvailable } from './registrar-api-available';
import { RegistrarApiCanRegister } from './registrar-api-can-register';
import { RegistrarApiCreatedAt } from './registrar-api-created-at';
import { RegistrarApiCurrentRegistrar } from './registrar-api-current-registrar';
import { RegistrarApiDomainIdentifier } from './registrar-api-domain-identifier';
import { RegistrarApiExpiresAt } from './registrar-api-expires-at';
import { RegistrarApiLocked } from './registrar-api-locked';
import { RegistrarApiRegistrantContact } from './registrar-api-registrant-contact';
import { RegistrarApiRegistryStatuses } from './registrar-api-registry-statuses';
import { RegistrarApiSupportedTld } from './registrar-api-supported-tld';
import { RegistrarApiTransferIn } from './registrar-api-transfer-in';
import { RegistrarApiUpdatedAt } from './registrar-api-updated-at';
/**
 * 
 * @export
 * @interface RegistrarApiDomainProperties
 */
export interface RegistrarApiDomainProperties {
    /**
     * 
     * @type {RegistrarApiAvailable}
     * @memberof RegistrarApiDomainProperties
     */
    available?: RegistrarApiAvailable;
    /**
     * 
     * @type {RegistrarApiCanRegister}
     * @memberof RegistrarApiDomainProperties
     */
    canRegister?: RegistrarApiCanRegister;
    /**
     * 
     * @type {RegistrarApiCreatedAt}
     * @memberof RegistrarApiDomainProperties
     */
    createdAt?: RegistrarApiCreatedAt;
    /**
     * 
     * @type {RegistrarApiCurrentRegistrar}
     * @memberof RegistrarApiDomainProperties
     */
    currentRegistrar?: RegistrarApiCurrentRegistrar;
    /**
     * 
     * @type {RegistrarApiExpiresAt}
     * @memberof RegistrarApiDomainProperties
     */
    expiresAt?: RegistrarApiExpiresAt;
    /**
     * 
     * @type {RegistrarApiDomainIdentifier}
     * @memberof RegistrarApiDomainProperties
     */
    id?: RegistrarApiDomainIdentifier;
    /**
     * 
     * @type {RegistrarApiLocked}
     * @memberof RegistrarApiDomainProperties
     */
    locked?: RegistrarApiLocked;
    /**
     * 
     * @type {RegistrarApiRegistrantContact}
     * @memberof RegistrarApiDomainProperties
     */
    registrantContact?: RegistrarApiRegistrantContact;
    /**
     * 
     * @type {RegistrarApiRegistryStatuses}
     * @memberof RegistrarApiDomainProperties
     */
    registryStatuses?: RegistrarApiRegistryStatuses;
    /**
     * 
     * @type {RegistrarApiSupportedTld}
     * @memberof RegistrarApiDomainProperties
     */
    supportedTld?: RegistrarApiSupportedTld;
    /**
     * 
     * @type {RegistrarApiTransferIn}
     * @memberof RegistrarApiDomainProperties
     */
    transferIn?: RegistrarApiTransferIn;
    /**
     * 
     * @type {RegistrarApiUpdatedAt}
     * @memberof RegistrarApiDomainProperties
     */
    updatedAt?: RegistrarApiUpdatedAt;
}
