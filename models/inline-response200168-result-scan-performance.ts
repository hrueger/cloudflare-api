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
/**
 * 
 * @export
 * @interface InlineResponse200168ResultScanPerformance
 */
export interface InlineResponse200168ResultScanPerformance {
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    connectEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    connectStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    decodedBodySize: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    domComplete: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    domContentLoadedEventEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    domContentLoadedEventStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    domInteractive: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    domainLookupEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    domainLookupStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    duration: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    encodedBodySize: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    entryType: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    fetchStart: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    initiatorType: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    loadEventEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    loadEventStart: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    nextHopProtocol: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    redirectCount: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    redirectEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    redirectStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    requestStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    responseEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    responseStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    secureConnectionStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    startTime: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    transferSize: number;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    type: string;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    unloadEventEnd: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    unloadEventStart: number;
    /**
     * 
     * @type {number}
     * @memberof InlineResponse200168ResultScanPerformance
     */
    workerStart: number;
}