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
import { InlineResponse200168ResultScanMetaProcessorsCategories1 } from './inline-response200168-result-scan-meta-processors-categories1';
import { InlineResponse200168ResultScanMetaProcessorsEvidence } from './inline-response200168-result-scan-meta-processors-evidence';
/**
 * 
 * @export
 * @interface InlineResponse200168ResultScanMetaProcessorsTech
 */
export interface InlineResponse200168ResultScanMetaProcessorsTech {
    /**
     * 
     * @type {Array<InlineResponse200168ResultScanMetaProcessorsCategories1>}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    categories: Array<InlineResponse200168ResultScanMetaProcessorsCategories1>;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    confidence: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    description?: string;
    /**
     * 
     * @type {InlineResponse200168ResultScanMetaProcessorsEvidence}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    evidence: InlineResponse200168ResultScanMetaProcessorsEvidence;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    icon: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanMetaProcessorsTech
     */
    website: string;
}
