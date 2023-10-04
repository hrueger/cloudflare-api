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
import { C4f8RoOSAllowInsecure } from './c4f8-ro-osallow-insecure';
import { C4f8RoOSComponentsSchemasPort } from './c4f8-ro-oscomponents-schemas-port';
import { C4f8RoOSConsecutiveDown } from './c4f8-ro-osconsecutive-down';
import { C4f8RoOSConsecutiveUp } from './c4f8-ro-osconsecutive-up';
import { C4f8RoOSExpectedBody } from './c4f8-ro-osexpected-body';
import { C4f8RoOSFollowRedirects } from './c4f8-ro-osfollow-redirects';
import { C4f8RoOSHeader } from './c4f8-ro-osheader';
import { C4f8RoOSInterval } from './c4f8-ro-osinterval';
import { C4f8RoOSMonitorComponentsSchemasDescription } from './c4f8-ro-osmonitor-components-schemas-description';
import { C4f8RoOSMonitorComponentsSchemasIdentifier } from './c4f8-ro-osmonitor-components-schemas-identifier';
import { C4f8RoOSMonitorComponentsSchemasType } from './c4f8-ro-osmonitor-components-schemas-type';
import { C4f8RoOSPath } from './c4f8-ro-ospath';
import { C4f8RoOSProbeZone } from './c4f8-ro-osprobe-zone';
import { C4f8RoOSRetries } from './c4f8-ro-osretries';
import { C4f8RoOSSchemasExpectedCodes } from './c4f8-ro-osschemas-expected-codes';
import { C4f8RoOSSchemasMethod } from './c4f8-ro-osschemas-method';
import { C4f8RoOSSchemasTimeout } from './c4f8-ro-osschemas-timeout';
import { C4f8RoOSTimestamp } from './c4f8-ro-ostimestamp';
/**
 * 
 * @export
 * @interface C4f8RoOSComponentsSchemasMonitor
 */
export interface C4f8RoOSComponentsSchemasMonitor {
    /**
     * 
     * @type {C4f8RoOSAllowInsecure}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    allowInsecure?: C4f8RoOSAllowInsecure;
    /**
     * 
     * @type {C4f8RoOSConsecutiveDown}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    consecutiveDown?: C4f8RoOSConsecutiveDown;
    /**
     * 
     * @type {C4f8RoOSConsecutiveUp}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    consecutiveUp?: C4f8RoOSConsecutiveUp;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    createdOn?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSMonitorComponentsSchemasDescription}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    description?: C4f8RoOSMonitorComponentsSchemasDescription;
    /**
     * 
     * @type {C4f8RoOSExpectedBody}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    expectedBody?: C4f8RoOSExpectedBody;
    /**
     * 
     * @type {C4f8RoOSSchemasExpectedCodes}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    expectedCodes?: C4f8RoOSSchemasExpectedCodes;
    /**
     * 
     * @type {C4f8RoOSFollowRedirects}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    followRedirects?: C4f8RoOSFollowRedirects;
    /**
     * 
     * @type {C4f8RoOSHeader}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    header?: C4f8RoOSHeader;
    /**
     * 
     * @type {C4f8RoOSMonitorComponentsSchemasIdentifier}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    id?: C4f8RoOSMonitorComponentsSchemasIdentifier;
    /**
     * 
     * @type {C4f8RoOSInterval}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    interval?: C4f8RoOSInterval;
    /**
     * 
     * @type {C4f8RoOSSchemasMethod}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    method?: C4f8RoOSSchemasMethod;
    /**
     * 
     * @type {C4f8RoOSTimestamp}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    modifiedOn?: C4f8RoOSTimestamp;
    /**
     * 
     * @type {C4f8RoOSPath}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    path?: C4f8RoOSPath;
    /**
     * 
     * @type {C4f8RoOSComponentsSchemasPort}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    port?: C4f8RoOSComponentsSchemasPort;
    /**
     * 
     * @type {C4f8RoOSProbeZone}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    probeZone?: C4f8RoOSProbeZone;
    /**
     * 
     * @type {C4f8RoOSRetries}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    retries?: C4f8RoOSRetries;
    /**
     * 
     * @type {C4f8RoOSSchemasTimeout}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    timeout?: C4f8RoOSSchemasTimeout;
    /**
     * 
     * @type {C4f8RoOSMonitorComponentsSchemasType}
     * @memberof C4f8RoOSComponentsSchemasMonitor
     */
    type?: C4f8RoOSMonitorComponentsSchemasType;
}