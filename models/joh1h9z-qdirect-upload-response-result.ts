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
import { JOh1h9zQIdentifier } from './joh1h9z-qidentifier';
import { JOh1h9zQScheduledDeletion } from './joh1h9z-qscheduled-deletion';
import { JOh1h9zQWatermarks } from './joh1h9z-qwatermarks';
/**
 * 
 * @export
 * @interface JOh1h9zQDirectUploadResponseResult
 */
export interface JOh1h9zQDirectUploadResponseResult {
    /**
     * 
     * @type {JOh1h9zQScheduledDeletion}
     * @memberof JOh1h9zQDirectUploadResponseResult
     */
    scheduledDeletion?: JOh1h9zQScheduledDeletion;
    /**
     * 
     * @type {JOh1h9zQIdentifier}
     * @memberof JOh1h9zQDirectUploadResponseResult
     */
    uid?: JOh1h9zQIdentifier;
    /**
     * The URL an unauthenticated upload can use for a single `HTTP POST multipart/form-data` request.
     * @type {string}
     * @memberof JOh1h9zQDirectUploadResponseResult
     */
    uploadURL?: string;
    /**
     * 
     * @type {JOh1h9zQWatermarks}
     * @memberof JOh1h9zQDirectUploadResponseResult
     */
    watermark?: JOh1h9zQWatermarks;
}