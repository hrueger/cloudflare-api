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
import { DlpIntegrationEntry } from './dlp-integration-entry';
import { DlpProfileId } from './dlp-profile-id';
import { DlpTimestamp } from './dlp-timestamp';
/**
 * 
 * @export
 * @interface DlpIntegrationProfile
 */
export interface DlpIntegrationProfile {
    /**
     * 
     * @type {DlpTimestamp}
     * @memberof DlpIntegrationProfile
     */
    createdAt?: DlpTimestamp;
    /**
     * The description of the profile.
     * @type {string}
     * @memberof DlpIntegrationProfile
     */
    description?: string;
    /**
     * The entries for this profile.
     * @type {Array<DlpIntegrationEntry>}
     * @memberof DlpIntegrationProfile
     */
    entries?: Array<DlpIntegrationEntry>;
    /**
     * 
     * @type {DlpProfileId}
     * @memberof DlpIntegrationProfile
     */
    id?: DlpProfileId;
    /**
     * The name of the profile.
     * @type {string}
     * @memberof DlpIntegrationProfile
     */
    name?: string;
    /**
     * The type of the profile.
     * @type {string}
     * @memberof DlpIntegrationProfile
     */
    type?: DlpIntegrationProfileTypeEnum;
    /**
     * 
     * @type {DlpTimestamp}
     * @memberof DlpIntegrationProfile
     */
    updatedAt?: DlpTimestamp;
}

/**
    * @export
    * @enum {string}
    */
export enum DlpIntegrationProfileTypeEnum {
    Integration = 'integration'
}
