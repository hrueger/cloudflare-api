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
import { Vtu2C1rMBandwidth } from './vtu2-c1r-mbandwidth';
import { Vtu2C1rMPageviews } from './vtu2-c1r-mpageviews';
import { Vtu2C1rMRequests } from './vtu2-c1r-mrequests';
import { Vtu2C1rMSince } from './vtu2-c1r-msince';
import { Vtu2C1rMThreats } from './vtu2-c1r-mthreats';
import { Vtu2C1rMUniques } from './vtu2-c1r-muniques';
import { Vtu2C1rMUntil } from './vtu2-c1r-muntil';
/**
 * 
 * @export
 * @interface Vtu2C1rMTimeseriesInner
 */
export interface Vtu2C1rMTimeseriesInner {
    /**
     * 
     * @type {Vtu2C1rMBandwidth}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    bandwidth?: Vtu2C1rMBandwidth;
    /**
     * 
     * @type {Vtu2C1rMPageviews}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    pageviews?: Vtu2C1rMPageviews;
    /**
     * 
     * @type {Vtu2C1rMRequests}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    requests?: Vtu2C1rMRequests;
    /**
     * 
     * @type {Vtu2C1rMSince}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    since?: Vtu2C1rMSince;
    /**
     * 
     * @type {Vtu2C1rMThreats}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    threats?: Vtu2C1rMThreats;
    /**
     * 
     * @type {Vtu2C1rMUniques}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    uniques?: Vtu2C1rMUniques;
    /**
     * 
     * @type {Vtu2C1rMUntil}
     * @memberof Vtu2C1rMTimeseriesInner
     */
    until?: Vtu2C1rMUntil;
}
