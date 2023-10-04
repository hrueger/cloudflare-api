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
import { C4f8RoOSBindingName } from './c4f8-ro-osbinding-name';
import { C4f8RoOSNamespaceIdentifier } from './c4f8-ro-osnamespace-identifier';
/**
 * 
 * @export
 * @interface C4f8RoOSKvNamespaceBinding
 */
export interface C4f8RoOSKvNamespaceBinding {
    /**
     * 
     * @type {C4f8RoOSBindingName}
     * @memberof C4f8RoOSKvNamespaceBinding
     */
    name: C4f8RoOSBindingName;
    /**
     * 
     * @type {C4f8RoOSNamespaceIdentifier}
     * @memberof C4f8RoOSKvNamespaceBinding
     */
    namespaceId: C4f8RoOSNamespaceIdentifier;
    /**
     * The class of resource that the binding provides.
     * @type {string}
     * @memberof C4f8RoOSKvNamespaceBinding
     */
    type: C4f8RoOSKvNamespaceBindingTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum C4f8RoOSKvNamespaceBindingTypeEnum {
    KvNamespace = 'kv_namespace'
}

