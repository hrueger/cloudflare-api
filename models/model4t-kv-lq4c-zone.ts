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
import { Model4tKvLQ4cIdentifier } from './model4t-kv-lq4c-identifier';
import { Model4tKvLQ4cZoneAccount } from './model4t-kv-lq4c-zone-account';
import { Model4tKvLQ4cZoneMeta } from './model4t-kv-lq4c-zone-meta';
import { Model4tKvLQ4cZoneOwner } from './model4t-kv-lq4c-zone-owner';
/**
 * 
 * @export
 * @interface Model4tKvLQ4cZone
 */
export interface Model4tKvLQ4cZone {
    /**
     * 
     * @type {Model4tKvLQ4cZoneAccount}
     * @memberof Model4tKvLQ4cZone
     */
    account: Model4tKvLQ4cZoneAccount;
    /**
     * The last time proof of ownership was detected and the zone was made active
     * @type {Date}
     * @memberof Model4tKvLQ4cZone
     */
    activatedOn: Date | null;
    /**
     * When the zone was created
     * @type {Date}
     * @memberof Model4tKvLQ4cZone
     */
    createdOn: Date;
    /**
     * The interval (in seconds) from when development mode expires (positive integer) or last expired (negative integer) for the domain. If development mode has never been enabled, this value is 0.
     * @type {number}
     * @memberof Model4tKvLQ4cZone
     */
    developmentMode: number;
    /**
     * 
     * @type {Model4tKvLQ4cIdentifier}
     * @memberof Model4tKvLQ4cZone
     */
    id: Model4tKvLQ4cIdentifier;
    /**
     * 
     * @type {Model4tKvLQ4cZoneMeta}
     * @memberof Model4tKvLQ4cZone
     */
    meta: Model4tKvLQ4cZoneMeta;
    /**
     * When the zone was last modified
     * @type {Date}
     * @memberof Model4tKvLQ4cZone
     */
    modifiedOn: Date;
    /**
     * The domain name
     * @type {string}
     * @memberof Model4tKvLQ4cZone
     */
    name: string;
    /**
     * DNS host at the time of switching to Cloudflare
     * @type {string}
     * @memberof Model4tKvLQ4cZone
     */
    originalDnshost: string | null;
    /**
     * Original name servers before moving to Cloudflare Notes: Is this only available for full zones?
     * @type {Array<string>}
     * @memberof Model4tKvLQ4cZone
     */
    originalNameServers: Array<string> | null;
    /**
     * Registrar for the domain at the time of switching to Cloudflare
     * @type {string}
     * @memberof Model4tKvLQ4cZone
     */
    originalRegistrar: string | null;
    /**
     * 
     * @type {Model4tKvLQ4cZoneOwner}
     * @memberof Model4tKvLQ4cZone
     */
    owner: Model4tKvLQ4cZoneOwner;
    /**
     * An array of domains used for custom name servers. This is only available for Business and Enterprise plans.
     * @type {Array<string>}
     * @memberof Model4tKvLQ4cZone
     */
    vanityNameServers?: Array<string>;
}
