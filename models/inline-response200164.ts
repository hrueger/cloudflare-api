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
import { Jds9UiCvApiResponseCommon } from './jds9-ui-cv-api-response-common';
import { Jds9UiCvMessages } from './jds9-ui-cv-messages';
import { Jds9UiCvResultInfo } from './jds9-ui-cv-result-info';
import { Jds9UiCvWidgetDetail } from './jds9-ui-cv-widget-detail';
/**
 * 
 * @export
 * @interface InlineResponse200164
 */
export interface InlineResponse200164 extends Jds9UiCvApiResponseCommon {
    /**
     * 
     * @type {Jds9UiCvResultInfo}
     * @memberof InlineResponse200164
     */
    resultInfo?: Jds9UiCvResultInfo;
    /**
     * 
     * @type {Jds9UiCvWidgetDetail}
     * @memberof InlineResponse200164
     */
    result?: Jds9UiCvWidgetDetail;
}
