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
import { NAx036G7TestsResponseHttpResults } from './nax036-g7-tests-response-http-results';
import { NAx036G7TestsResponseHttpResultsByColo } from './nax036-g7-tests-response-http-results-by-colo';
import { NAx036G7TestsResponseTracerouteResults } from './nax036-g7-tests-response-traceroute-results';
import { NAx036G7TestsResponseTracerouteResultsByColo } from './nax036-g7-tests-response-traceroute-results-by-colo';
import { NAx036G7Uuid } from './nax036-g7-uuid';
/**
 * 
 * @export
 * @interface NAx036G7TestsResponseTests
 */
export interface NAx036G7TestsResponseTests {
    /**
     * date the test was created.
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    created: string;
    /**
     * the test description defined during configuration
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    description: string;
    /**
     * if true, then the test will run on targeted devices. Else, the test will not run.
     * @type {boolean}
     * @memberof NAx036G7TestsResponseTests
     */
    enabled: boolean;
    /**
     * 
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    host: string;
    /**
     * 
     * @type {NAx036G7TestsResponseHttpResults}
     * @memberof NAx036G7TestsResponseTests
     */
    httpResults?: NAx036G7TestsResponseHttpResults;
    /**
     * 
     * @type {Array<NAx036G7TestsResponseHttpResultsByColo>}
     * @memberof NAx036G7TestsResponseTests
     */
    httpResultsByColo?: Array<NAx036G7TestsResponseHttpResultsByColo>;
    /**
     * 
     * @type {NAx036G7Uuid}
     * @memberof NAx036G7TestsResponseTests
     */
    id: NAx036G7Uuid;
    /**
     * The interval at which the synthetic application test is set to run.
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    interval: string;
    /**
     * test type, http or traceroute
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    kind: NAx036G7TestsResponseTestsKindEnum;
    /**
     * for HTTP, the method to use when running the test
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    method?: string;
    /**
     * name given to this test
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    name: string;
    /**
     * 
     * @type {NAx036G7TestsResponseTracerouteResults}
     * @memberof NAx036G7TestsResponseTests
     */
    tracerouteResults?: NAx036G7TestsResponseTracerouteResults;
    /**
     * 
     * @type {Array<NAx036G7TestsResponseTracerouteResultsByColo>}
     * @memberof NAx036G7TestsResponseTests
     */
    tracerouteResultsByColo?: Array<NAx036G7TestsResponseTracerouteResultsByColo>;
    /**
     * 
     * @type {string}
     * @memberof NAx036G7TestsResponseTests
     */
    updated: string;
}

/**
    * @export
    * @enum {string}
    */
export enum NAx036G7TestsResponseTestsKindEnum {
    Http = 'http',
    Traceroute = 'traceroute'
}

