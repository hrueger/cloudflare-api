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
import { DlpAllowedMatchCount } from './dlp-allowed-match-count';
import { DlpCustomEntry } from './dlp-custom-entry';
import { DlpSharedEntryUpdateIntegration } from './dlp-shared-entry-update-integration';
import { DlpSharedEntryUpdatePredefined } from './dlp-shared-entry-update-predefined';
/**
 * 
 * @export
 * @interface DlpUpdateCustomProfile
 */
export interface DlpUpdateCustomProfile {
    /**
     * 
     * @type {DlpAllowedMatchCount}
     * @memberof DlpUpdateCustomProfile
     */
    allowedMatchCount?: DlpAllowedMatchCount;
    /**
     * The description of the profile.
     * @type {string}
     * @memberof DlpUpdateCustomProfile
     */
    description?: string;
    /**
     * The custom entries for this profile. Array elements with IDs are modifying the existing entry with that ID. Elements without ID will create new entries. Any entry not in the list will be deleted.
     * @type {Array<DlpCustomEntry>}
     * @memberof DlpUpdateCustomProfile
     */
    entries?: Array<DlpCustomEntry>;
    /**
     * The name of the profile.
     * @type {string}
     * @memberof DlpUpdateCustomProfile
     */
    name?: string;
    /**
     * Entries from other profiles (e.g. pre-defined Cloudflare profiles, or your Microsoft Information Protection profiles).
     * @type {Array<DlpSharedEntryUpdatePredefined | DlpSharedEntryUpdateIntegration>}
     * @memberof DlpUpdateCustomProfile
     */
    sharedEntries?: Array<DlpSharedEntryUpdatePredefined | DlpSharedEntryUpdateIntegration>;
}
