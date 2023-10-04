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
import { JOh1h9zQLiveInputDefaultCreator } from './joh1h9z-qlive-input-default-creator';
import { JOh1h9zQLiveInputMetadata } from './joh1h9z-qlive-input-metadata';
import { JOh1h9zQLiveInputRecordingDeletion } from './joh1h9z-qlive-input-recording-deletion';
import { JOh1h9zQLiveInputRecordingSettings } from './joh1h9z-qlive-input-recording-settings';
/**
 * 
 * @export
 * @interface JOh1h9zQUpdateInputRequest
 */
export interface JOh1h9zQUpdateInputRequest {
    /**
     * 
     * @type {JOh1h9zQLiveInputDefaultCreator}
     * @memberof JOh1h9zQUpdateInputRequest
     */
    defaultCreator?: JOh1h9zQLiveInputDefaultCreator;
    /**
     * 
     * @type {JOh1h9zQLiveInputRecordingDeletion}
     * @memberof JOh1h9zQUpdateInputRequest
     */
    deleteRecordingAfterDays?: JOh1h9zQLiveInputRecordingDeletion;
    /**
     * 
     * @type {JOh1h9zQLiveInputMetadata}
     * @memberof JOh1h9zQUpdateInputRequest
     */
    meta?: JOh1h9zQLiveInputMetadata;
    /**
     * 
     * @type {JOh1h9zQLiveInputRecordingSettings}
     * @memberof JOh1h9zQUpdateInputRequest
     */
    recording?: JOh1h9zQLiveInputRecordingSettings;
}