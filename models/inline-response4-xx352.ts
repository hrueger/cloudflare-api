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
import { Ir4bTFI2ApiResponseCommonFailure } from './ir4b-tfi2-api-response-common-failure';
import { Ir4bTFI2GatewayAccountLoggingSettingsResponse } from './ir4b-tfi2-gateway-account-logging-settings-response';
import { Ir4bTFI2Messages } from './ir4b-tfi2-messages';
/**
 * 
 * @export
 * @interface InlineResponse4XX352
 */
export interface InlineResponse4XX352 extends Ir4bTFI2GatewayAccountLoggingSettingsResponse {
    /**
     * 
     * @type {Ir4bTFI2Messages}
     * @memberof InlineResponse4XX352
     */
    errors: Ir4bTFI2Messages;
    /**
     * 
     * @type {Ir4bTFI2Messages}
     * @memberof InlineResponse4XX352
     */
    messages: Ir4bTFI2Messages;
    /**
     * 
     * @type {any}
     * @memberof InlineResponse4XX352
     */
    result: any | null;
    /**
     * Whether the API call was successful
     * @type {boolean}
     * @memberof InlineResponse4XX352
     */
    success: boolean;
}
