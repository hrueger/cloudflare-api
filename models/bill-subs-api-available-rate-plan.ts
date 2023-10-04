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
import { BillSubsApiCanSubscribe } from './bill-subs-api-can-subscribe';
import { BillSubsApiCurrency } from './bill-subs-api-currency';
import { BillSubsApiExternallyManaged } from './bill-subs-api-externally-managed';
import { BillSubsApiIdentifier } from './bill-subs-api-identifier';
import { BillSubsApiIsSubscribed } from './bill-subs-api-is-subscribed';
import { BillSubsApiLegacyDiscount } from './bill-subs-api-legacy-discount';
import { BillSubsApiLegacyId } from './bill-subs-api-legacy-id';
import { BillSubsApiSchemasFrequency } from './bill-subs-api-schemas-frequency';
import { BillSubsApiSchemasName } from './bill-subs-api-schemas-name';
import { BillSubsApiSchemasPrice } from './bill-subs-api-schemas-price';
/**
 * 
 * @export
 * @interface BillSubsApiAvailableRatePlan
 */
export interface BillSubsApiAvailableRatePlan {
    /**
     * 
     * @type {BillSubsApiCanSubscribe}
     * @memberof BillSubsApiAvailableRatePlan
     */
    canSubscribe?: BillSubsApiCanSubscribe;
    /**
     * 
     * @type {BillSubsApiCurrency}
     * @memberof BillSubsApiAvailableRatePlan
     */
    currency?: BillSubsApiCurrency;
    /**
     * 
     * @type {BillSubsApiExternallyManaged}
     * @memberof BillSubsApiAvailableRatePlan
     */
    externallyManaged?: BillSubsApiExternallyManaged;
    /**
     * 
     * @type {BillSubsApiSchemasFrequency}
     * @memberof BillSubsApiAvailableRatePlan
     */
    frequency?: BillSubsApiSchemasFrequency;
    /**
     * 
     * @type {BillSubsApiIdentifier}
     * @memberof BillSubsApiAvailableRatePlan
     */
    id?: BillSubsApiIdentifier;
    /**
     * 
     * @type {BillSubsApiIsSubscribed}
     * @memberof BillSubsApiAvailableRatePlan
     */
    isSubscribed?: BillSubsApiIsSubscribed;
    /**
     * 
     * @type {BillSubsApiLegacyDiscount}
     * @memberof BillSubsApiAvailableRatePlan
     */
    legacyDiscount?: BillSubsApiLegacyDiscount;
    /**
     * 
     * @type {BillSubsApiLegacyId}
     * @memberof BillSubsApiAvailableRatePlan
     */
    legacyId?: BillSubsApiLegacyId;
    /**
     * 
     * @type {BillSubsApiSchemasName}
     * @memberof BillSubsApiAvailableRatePlan
     */
    name?: BillSubsApiSchemasName;
    /**
     * 
     * @type {BillSubsApiSchemasPrice}
     * @memberof BillSubsApiAvailableRatePlan
     */
    price?: BillSubsApiSchemasPrice;
}
