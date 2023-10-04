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
import { JOh1h9zQAudioLabel } from './joh1h9z-qaudio-label';
/**
 * 
 * @export
 * @interface JOh1h9zQCopyAudioTrack
 */
export interface JOh1h9zQCopyAudioTrack {
    /**
     * 
     * @type {JOh1h9zQAudioLabel}
     * @memberof JOh1h9zQCopyAudioTrack
     */
    label: JOh1h9zQAudioLabel;
    /**
     * An audio track URL. The server must be publicly routable and support `HTTP HEAD` requests and `HTTP GET` range requests. The server should respond to `HTTP HEAD` requests with a `content-range` header that includes the size of the file.
     * @type {string}
     * @memberof JOh1h9zQCopyAudioTrack
     */
    url?: string;
}
