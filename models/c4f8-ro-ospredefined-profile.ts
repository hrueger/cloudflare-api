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
import { C4f8RoOSAllowedMatchCount } from './c4f8-ro-osallowed-match-count';
import { C4f8RoOSPredefinedEntry } from './c4f8-ro-ospredefined-entry';
import { C4f8RoOSProfileId } from './c4f8-ro-osprofile-id';
/**
 * 
 * @export
 * @interface C4f8RoOSPredefinedProfile
 */
export interface C4f8RoOSPredefinedProfile {
    /**
     * 
     * @type {C4f8RoOSAllowedMatchCount}
     * @memberof C4f8RoOSPredefinedProfile
     */
    allowedMatchCount?: C4f8RoOSAllowedMatchCount;
    /**
     * The entries for this profile.
     * @type {Array<C4f8RoOSPredefinedEntry>}
     * @memberof C4f8RoOSPredefinedProfile
     */
    entries?: Array<C4f8RoOSPredefinedEntry>;
    /**
     * 
     * @type {C4f8RoOSProfileId}
     * @memberof C4f8RoOSPredefinedProfile
     */
    id?: C4f8RoOSProfileId;
    /**
     * The name of the profile.
     * @type {string}
     * @memberof C4f8RoOSPredefinedProfile
     */
    name?: string;
    /**
     * The type of the profile.
     * @type {string}
     * @memberof C4f8RoOSPredefinedProfile
     */
    type?: C4f8RoOSPredefinedProfileTypeEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum C4f8RoOSPredefinedProfileTypeEnum {
    Predefined = 'predefined'
}

