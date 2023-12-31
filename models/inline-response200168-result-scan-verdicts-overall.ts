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
import { InlineResponse200168ResultScanVerdictsOverallCategories } from './inline-response200168-result-scan-verdicts-overall-categories';
/**
 * 
 * @export
 * @interface InlineResponse200168ResultScanVerdictsOverall
 */
export interface InlineResponse200168ResultScanVerdictsOverall {
    /**
     * 
     * @type {Array<InlineResponse200168ResultScanVerdictsOverallCategories>}
     * @memberof InlineResponse200168ResultScanVerdictsOverall
     */
    categories: Array<InlineResponse200168ResultScanVerdictsOverallCategories>;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse200168ResultScanVerdictsOverall
     */
    gsbThreatTypes: Array<string>;
    /**
     * At least one of our subsystems marked the site as potentially malicious at the time of the scan.
     * @type {boolean}
     * @memberof InlineResponse200168ResultScanVerdictsOverall
     */
    malicious: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof InlineResponse200168ResultScanVerdictsOverall
     */
    phishing: Array<string>;
}
