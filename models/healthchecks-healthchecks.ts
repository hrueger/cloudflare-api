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
import { HealthchecksAddress } from './healthchecks-address';
import { HealthchecksCheckRegions } from './healthchecks-check-regions';
import { HealthchecksConsecutiveFails } from './healthchecks-consecutive-fails';
import { HealthchecksConsecutiveSuccesses } from './healthchecks-consecutive-successes';
import { HealthchecksDescription } from './healthchecks-description';
import { HealthchecksFailureReason } from './healthchecks-failure-reason';
import { HealthchecksHttpConfig } from './healthchecks-http-config';
import { HealthchecksIdentifier } from './healthchecks-identifier';
import { HealthchecksInterval } from './healthchecks-interval';
import { HealthchecksName } from './healthchecks-name';
import { HealthchecksRetries } from './healthchecks-retries';
import { HealthchecksStatus } from './healthchecks-status';
import { HealthchecksSuspended } from './healthchecks-suspended';
import { HealthchecksTcpConfig } from './healthchecks-tcp-config';
import { HealthchecksTimeout } from './healthchecks-timeout';
import { HealthchecksTimestamp } from './healthchecks-timestamp';
import { HealthchecksType } from './healthchecks-type';
/**
 * 
 * @export
 * @interface HealthchecksHealthchecks
 */
export interface HealthchecksHealthchecks {
    /**
     * 
     * @type {HealthchecksAddress}
     * @memberof HealthchecksHealthchecks
     */
    address?: HealthchecksAddress;
    /**
     * 
     * @type {HealthchecksCheckRegions}
     * @memberof HealthchecksHealthchecks
     */
    checkRegions?: HealthchecksCheckRegions;
    /**
     * 
     * @type {HealthchecksConsecutiveFails}
     * @memberof HealthchecksHealthchecks
     */
    consecutiveFails?: HealthchecksConsecutiveFails;
    /**
     * 
     * @type {HealthchecksConsecutiveSuccesses}
     * @memberof HealthchecksHealthchecks
     */
    consecutiveSuccesses?: HealthchecksConsecutiveSuccesses;
    /**
     * 
     * @type {HealthchecksTimestamp}
     * @memberof HealthchecksHealthchecks
     */
    createdOn?: HealthchecksTimestamp;
    /**
     * 
     * @type {HealthchecksDescription}
     * @memberof HealthchecksHealthchecks
     */
    description?: HealthchecksDescription;
    /**
     * 
     * @type {HealthchecksFailureReason}
     * @memberof HealthchecksHealthchecks
     */
    failureReason?: HealthchecksFailureReason;
    /**
     * 
     * @type {HealthchecksHttpConfig}
     * @memberof HealthchecksHealthchecks
     */
    httpConfig?: HealthchecksHttpConfig;
    /**
     * 
     * @type {HealthchecksIdentifier}
     * @memberof HealthchecksHealthchecks
     */
    id?: HealthchecksIdentifier;
    /**
     * 
     * @type {HealthchecksInterval}
     * @memberof HealthchecksHealthchecks
     */
    interval?: HealthchecksInterval;
    /**
     * 
     * @type {HealthchecksTimestamp}
     * @memberof HealthchecksHealthchecks
     */
    modifiedOn?: HealthchecksTimestamp;
    /**
     * 
     * @type {HealthchecksName}
     * @memberof HealthchecksHealthchecks
     */
    name?: HealthchecksName;
    /**
     * 
     * @type {HealthchecksRetries}
     * @memberof HealthchecksHealthchecks
     */
    retries?: HealthchecksRetries;
    /**
     * 
     * @type {HealthchecksStatus}
     * @memberof HealthchecksHealthchecks
     */
    status?: HealthchecksStatus;
    /**
     * 
     * @type {HealthchecksSuspended}
     * @memberof HealthchecksHealthchecks
     */
    suspended?: HealthchecksSuspended;
    /**
     * 
     * @type {HealthchecksTcpConfig}
     * @memberof HealthchecksHealthchecks
     */
    tcpConfig?: HealthchecksTcpConfig;
    /**
     * 
     * @type {HealthchecksTimeout}
     * @memberof HealthchecksHealthchecks
     */
    timeout?: HealthchecksTimeout;
    /**
     * 
     * @type {HealthchecksType}
     * @memberof HealthchecksHealthchecks
     */
    type?: HealthchecksType;
}
