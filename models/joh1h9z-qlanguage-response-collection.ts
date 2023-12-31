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
import { JOh1h9zQApiResponseCommon } from './joh1h9z-qapi-response-common';
import { JOh1h9zQCaptions } from './joh1h9z-qcaptions';
import { JOh1h9zQMessages } from './joh1h9z-qmessages';
/**
 * 
 * @export
 * @interface JOh1h9zQLanguageResponseCollection
 */
export interface JOh1h9zQLanguageResponseCollection extends JOh1h9zQApiResponseCommon {
    /**
     * 
     * @type {Array<JOh1h9zQCaptions>}
     * @memberof JOh1h9zQLanguageResponseCollection
     */
    result?: Array<JOh1h9zQCaptions>;
}
