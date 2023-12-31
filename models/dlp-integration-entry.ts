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
import { DlpEntryId } from './dlp-entry-id';
import { DlpTimestamp } from './dlp-timestamp';
/**
 * An entry derived from an integration
 * @export
 * @interface DlpIntegrationEntry
 */
export interface DlpIntegrationEntry {
    /**
     * 
     * @type {DlpTimestamp}
     * @memberof DlpIntegrationEntry
     */
    createdAt?: DlpTimestamp;
    /**
     * Whether the entry is enabled or not.
     * @type {boolean}
     * @memberof DlpIntegrationEntry
     */
    enabled?: boolean;
    /**
     * 
     * @type {DlpEntryId}
     * @memberof DlpIntegrationEntry
     */
    id?: DlpEntryId;
    /**
     * The name of the entry.
     * @type {string}
     * @memberof DlpIntegrationEntry
     */
    name?: string;
    /**
     * ID of the parent profile
     * @type {any}
     * @memberof DlpIntegrationEntry
     */
    profileId?: any;
    /**
     * 
     * @type {DlpTimestamp}
     * @memberof DlpIntegrationEntry
     */
    updatedAt?: DlpTimestamp;
}
