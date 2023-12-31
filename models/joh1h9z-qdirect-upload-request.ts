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
import { JOh1h9zQAllowedOrigins } from './joh1h9z-qallowed-origins';
import { JOh1h9zQCreator } from './joh1h9z-qcreator';
import { JOh1h9zQMaxDurationSeconds } from './joh1h9z-qmax-duration-seconds';
import { JOh1h9zQMediaMetadata } from './joh1h9z-qmedia-metadata';
import { JOh1h9zQRequireSignedURLs } from './joh1h9z-qrequire-signed-urls';
import { JOh1h9zQScheduledDeletion } from './joh1h9z-qscheduled-deletion';
import { JOh1h9zQThumbnailTimestampPct } from './joh1h9z-qthumbnail-timestamp-pct';
import { JOh1h9zQWatermarkAtUpload } from './joh1h9z-qwatermark-at-upload';
/**
 * 
 * @export
 * @interface JOh1h9zQDirectUploadRequest
 */
export interface JOh1h9zQDirectUploadRequest {
    /**
     * 
     * @type {JOh1h9zQAllowedOrigins}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    allowedOrigins?: JOh1h9zQAllowedOrigins;
    /**
     * 
     * @type {JOh1h9zQCreator}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    creator?: JOh1h9zQCreator;
    /**
     * The date and time after upload when videos will not be accepted.
     * @type {Date}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    expiry?: Date;
    /**
     * 
     * @type {JOh1h9zQMaxDurationSeconds}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    maxDurationSeconds: JOh1h9zQMaxDurationSeconds;
    /**
     * 
     * @type {JOh1h9zQMediaMetadata}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    meta?: JOh1h9zQMediaMetadata;
    /**
     * 
     * @type {JOh1h9zQRequireSignedURLs}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    requireSignedURLs?: JOh1h9zQRequireSignedURLs;
    /**
     * 
     * @type {JOh1h9zQScheduledDeletion}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    scheduledDeletion?: JOh1h9zQScheduledDeletion;
    /**
     * 
     * @type {JOh1h9zQThumbnailTimestampPct}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    thumbnailTimestampPct?: JOh1h9zQThumbnailTimestampPct;
    /**
     * 
     * @type {JOh1h9zQWatermarkAtUpload}
     * @memberof JOh1h9zQDirectUploadRequest
     */
    watermark?: JOh1h9zQWatermarkAtUpload;
}
