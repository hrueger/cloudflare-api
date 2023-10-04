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
import { C4f8RoOSKind } from './c4f8-ro-oskind';
import { C4f8RoOSListId } from './c4f8-ro-oslist-id';
import { C4f8RoOSListsComponentsSchemasDescription } from './c4f8-ro-oslists-components-schemas-description';
import { C4f8RoOSListsComponentsSchemasModifiedOn } from './c4f8-ro-oslists-components-schemas-modified-on';
import { C4f8RoOSListsComponentsSchemasName } from './c4f8-ro-oslists-components-schemas-name';
import { C4f8RoOSNumItems } from './c4f8-ro-osnum-items';
import { C4f8RoOSNumReferencingFilters } from './c4f8-ro-osnum-referencing-filters';
import { C4f8RoOSSchemasCreatedOn } from './c4f8-ro-osschemas-created-on';
/**
 * 
 * @export
 * @interface C4f8RoOSList
 */
export interface C4f8RoOSList {
    /**
     * 
     * @type {C4f8RoOSSchemasCreatedOn}
     * @memberof C4f8RoOSList
     */
    createdOn?: C4f8RoOSSchemasCreatedOn;
    /**
     * 
     * @type {C4f8RoOSListsComponentsSchemasDescription}
     * @memberof C4f8RoOSList
     */
    description?: C4f8RoOSListsComponentsSchemasDescription;
    /**
     * 
     * @type {C4f8RoOSListId}
     * @memberof C4f8RoOSList
     */
    id?: C4f8RoOSListId;
    /**
     * 
     * @type {C4f8RoOSKind}
     * @memberof C4f8RoOSList
     */
    kind?: C4f8RoOSKind;
    /**
     * 
     * @type {C4f8RoOSListsComponentsSchemasModifiedOn}
     * @memberof C4f8RoOSList
     */
    modifiedOn?: C4f8RoOSListsComponentsSchemasModifiedOn;
    /**
     * 
     * @type {C4f8RoOSListsComponentsSchemasName}
     * @memberof C4f8RoOSList
     */
    name?: C4f8RoOSListsComponentsSchemasName;
    /**
     * 
     * @type {C4f8RoOSNumItems}
     * @memberof C4f8RoOSList
     */
    numItems?: C4f8RoOSNumItems;
    /**
     * 
     * @type {C4f8RoOSNumReferencingFilters}
     * @memberof C4f8RoOSList
     */
    numReferencingFilters?: C4f8RoOSNumReferencingFilters;
}
