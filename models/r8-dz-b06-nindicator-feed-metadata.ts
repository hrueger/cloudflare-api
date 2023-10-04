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
import { R8DzB06NDescription } from './r8-dz-b06-ndescription';
import { R8DzB06NId } from './r8-dz-b06-nid';
import { R8DzB06NName } from './r8-dz-b06-nname';
/**
 * 
 * @export
 * @interface R8DzB06NIndicatorFeedMetadata
 */
export interface R8DzB06NIndicatorFeedMetadata {
    /**
     * The date and time when the data entry was created
     * @type {Date}
     * @memberof R8DzB06NIndicatorFeedMetadata
     */
    createdOn?: Date;
    /**
     * 
     * @type {R8DzB06NDescription}
     * @memberof R8DzB06NIndicatorFeedMetadata
     */
    description?: R8DzB06NDescription;
    /**
     * 
     * @type {R8DzB06NId}
     * @memberof R8DzB06NIndicatorFeedMetadata
     */
    id?: R8DzB06NId;
    /**
     * Status of the latest snapshot uploaded
     * @type {string}
     * @memberof R8DzB06NIndicatorFeedMetadata
     */
    latestUploadStatus?: R8DzB06NIndicatorFeedMetadataLatestUploadStatusEnum;
    /**
     * The date and time when the data entry was last modified
     * @type {Date}
     * @memberof R8DzB06NIndicatorFeedMetadata
     */
    modifiedOn?: Date;
    /**
     * 
     * @type {R8DzB06NName}
     * @memberof R8DzB06NIndicatorFeedMetadata
     */
    name?: R8DzB06NName;
}

/**
    * @export
    * @enum {string}
    */
export enum R8DzB06NIndicatorFeedMetadataLatestUploadStatusEnum {
    Mirroring = 'Mirroring',
    Unifying = 'Unifying',
    Loading = 'Loading',
    Provisioning = 'Provisioning',
    Complete = 'Complete',
    Error = 'Error'
}

