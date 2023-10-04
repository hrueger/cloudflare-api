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
import { LzX4rxF4Base } from './lz-x4rx-f4-base';
import { LzX4rxF4BaseMeta } from './lz-x4rx-f4-base-meta';
import { LzX4rxF4Comment } from './lz-x4rx-f4-comment';
import { LzX4rxF4Identifier } from './lz-x4rx-f4-identifier';
import { LzX4rxF4Tags } from './lz-x4rx-f4-tags';
import { LzX4rxF4Ttl } from './lz-x4rx-f4-ttl';
/**
 * 
 * @export
 * @interface LzX4rxF4NAPTRRecord
 */
export interface LzX4rxF4NAPTRRecord {
    /**
     * 
     * @type {LzX4rxF4Comment}
     * @memberof LzX4rxF4NAPTRRecord
     */
    comment?: LzX4rxF4Comment;
    /**
     * When the record was created.
     * @type {Date}
     * @memberof LzX4rxF4NAPTRRecord
     */
    createdOn?: Date;
    /**
     * 
     * @type {LzX4rxF4Identifier}
     * @memberof LzX4rxF4NAPTRRecord
     */
    id?: LzX4rxF4Identifier;
    /**
     * Whether this record can be modified/deleted (true means it's managed by Cloudflare).
     * @type {boolean}
     * @memberof LzX4rxF4NAPTRRecord
     */
    locked?: boolean;
    /**
     * 
     * @type {LzX4rxF4BaseMeta}
     * @memberof LzX4rxF4NAPTRRecord
     */
    meta?: LzX4rxF4BaseMeta;
    /**
     * When the record was last modified.
     * @type {Date}
     * @memberof LzX4rxF4NAPTRRecord
     */
    modifiedOn?: Date;
    /**
     * Whether the record can be proxied by Cloudflare or not.
     * @type {boolean}
     * @memberof LzX4rxF4NAPTRRecord
     */
    proxiable?: boolean;
    /**
     * 
     * @type {LzX4rxF4Tags}
     * @memberof LzX4rxF4NAPTRRecord
     */
    tags?: LzX4rxF4Tags;
    /**
     * 
     * @type {LzX4rxF4Ttl}
     * @memberof LzX4rxF4NAPTRRecord
     */
    ttl?: LzX4rxF4Ttl;
    /**
     * 
     * @type {LzX4rxF4Identifier}
     * @memberof LzX4rxF4NAPTRRecord
     */
    zoneId?: LzX4rxF4Identifier;
    /**
     * The domain of the record.
     * @type {string}
     * @memberof LzX4rxF4NAPTRRecord
     */
    zoneName?: string;
}
