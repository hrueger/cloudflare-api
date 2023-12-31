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
import { DlpProfileId } from './dlp-profile-id';
import { DlpTimestamp } from './dlp-timestamp';
/**
 * 
 * @export
 * @interface DlpCustomProfile
 */
export interface DlpCustomProfile {
    /**
     * 
     * @type {DlpAllowedMatchCount}
     * @memberof DlpCustomProfile
     */
    allowedMatchCount?: DlpAllowedMatchCount;
    /**
     * 
     * @type {DlpTimestamp}
     * @memberof DlpCustomProfile
     */
    createdAt?: DlpTimestamp;
    /**
     * The description of the profile.
     * @type {string}
     * @memberof DlpCustomProfile
     */
    description?: string;
    /**
     * The entries for this profile.
     * @type {Array<DlpCustomEntry>}
     * @memberof DlpCustomProfile
     */
    entries?: Array<DlpCustomEntry>;
    /**
     * 
     * @type {DlpProfileId}
     * @memberof DlpCustomProfile
     */
    id?: DlpProfileId;
    /**
     * The name of the profile.
     * @type {string}
     * @memberof DlpCustomProfile
     */
    name?: string;
    /**
     * The type of the profile.
     * @type {string}
     * @memberof DlpCustomProfile
     */
    type?: DlpCustomProfileTypeEnum;
    /**
     * 
     * @type {DlpTimestamp}
     * @memberof DlpCustomProfile
     */
    updatedAt?: DlpTimestamp;
}

/**
    * @export
    * @enum {string}
    */
export enum DlpCustomProfileTypeEnum {
    Custom = 'custom'
}

