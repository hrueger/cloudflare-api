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
import { AJ99RMSzColo } from './aj99-rmsz-colo';
import { AJ99RMSzError } from './aj99-rmsz-error';
import { AJ99RMSzHopResult } from './aj99-rmsz-hop-result';
import { AJ99RMSzTargetSummary } from './aj99-rmsz-target-summary';
import { AJ99RMSzTracerouteTimeMs } from './aj99-rmsz-traceroute-time-ms';
/**
 * 
 * @export
 * @interface AJ99RMSzColoResult
 */
export interface AJ99RMSzColoResult {
    /**
     * 
     * @type {AJ99RMSzColo}
     * @memberof AJ99RMSzColoResult
     */
    colo?: AJ99RMSzColo;
    /**
     * 
     * @type {AJ99RMSzError}
     * @memberof AJ99RMSzColoResult
     */
    error?: AJ99RMSzError;
    /**
     * 
     * @type {Array<AJ99RMSzHopResult>}
     * @memberof AJ99RMSzColoResult
     */
    hops?: Array<AJ99RMSzHopResult>;
    /**
     * 
     * @type {AJ99RMSzTargetSummary}
     * @memberof AJ99RMSzColoResult
     */
    targetSummary?: AJ99RMSzTargetSummary;
    /**
     * 
     * @type {AJ99RMSzTracerouteTimeMs}
     * @memberof AJ99RMSzColoResult
     */
    tracerouteTimeMs?: AJ99RMSzTracerouteTimeMs;
}
