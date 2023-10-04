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
import { C4f8RoOSCommonComponentsSchemasIdentifier } from './c4f8-ro-oscommon-components-schemas-identifier';
import { C4f8RoOSContentListEntryContent } from './c4f8-ro-oscontent-list-entry-content';
import { C4f8RoOSContentListEntryDescription } from './c4f8-ro-oscontent-list-entry-description';
import { C4f8RoOSContentListEntryType } from './c4f8-ro-oscontent-list-entry-type';
import { C4f8RoOSTimestamp } from './c4f8-ro-ostimestamp';
/**
 * Content list entry to be blocked.
 * @export
 * @interface C4f8RoOSContentListEntry
 */
export interface C4f8RoOSContentListEntry {
    /**
     * 
     * @type {C4f8RoOSContentListEntryContent}
     * @memberof C4f8RoOSContentListEntry
     */
    content?: C4f8RoOSContentListEntryContent;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSContentListEntry
     */
    createdOn?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSContentListEntryDescription}
     * @memberof C4f8RoOSContentListEntry
     */
    description?: C4f8RoOSContentListEntryDescription;
    /**
     * 
     * @type {C4f8RoOSCommonComponentsSchemasIdentifier}
     * @memberof C4f8RoOSContentListEntry
     */
    id?: C4f8RoOSCommonComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSContentListEntry
     */
    modifiedOn?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSContentListEntryType}
     * @memberof C4f8RoOSContentListEntry
     */
    type?: C4f8RoOSContentListEntryType;
}