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
import { Model8INyb3jSAttackMitigation } from './model8-inyb3j-sattack-mitigation';
import { Model8INyb3jSDeprecateAnyRequests } from './model8-inyb3j-sdeprecate-any-requests';
import { Model8INyb3jSEcsFallback } from './model8-inyb3j-secs-fallback';
import { Model8INyb3jSMaximumCacheTtl } from './model8-inyb3j-smaximum-cache-ttl';
import { Model8INyb3jSMinimumCacheTtl } from './model8-inyb3j-sminimum-cache-ttl';
import { Model8INyb3jSName } from './model8-inyb3j-sname';
import { Model8INyb3jSNegativeCacheTtl } from './model8-inyb3j-snegative-cache-ttl';
import { Model8INyb3jSRatelimit } from './model8-inyb3j-sratelimit';
import { Model8INyb3jSRetries } from './model8-inyb3j-sretries';
import { Model8INyb3jSUpstreamIps } from './model8-inyb3j-supstream-ips';
/**
 * 
 * @export
 * @interface AccountIdentifierDnsFirewallBody
 */
export interface AccountIdentifierDnsFirewallBody {
    /**
     * 
     * @type {Model8INyb3jSAttackMitigation}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    attackMitigation?: Model8INyb3jSAttackMitigation;
    /**
     * 
     * @type {Model8INyb3jSDeprecateAnyRequests}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    deprecateAnyRequests?: Model8INyb3jSDeprecateAnyRequests;
    /**
     * 
     * @type {Model8INyb3jSEcsFallback}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    ecsFallback?: Model8INyb3jSEcsFallback;
    /**
     * 
     * @type {Model8INyb3jSMaximumCacheTtl}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    maximumCacheTtl?: Model8INyb3jSMaximumCacheTtl;
    /**
     * 
     * @type {Model8INyb3jSMinimumCacheTtl}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    minimumCacheTtl?: Model8INyb3jSMinimumCacheTtl;
    /**
     * 
     * @type {Model8INyb3jSName}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    name: Model8INyb3jSName;
    /**
     * 
     * @type {Model8INyb3jSNegativeCacheTtl}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    negativeCacheTtl?: Model8INyb3jSNegativeCacheTtl;
    /**
     * Deprecated alias for \"upstream_ips\".
     * @type {any}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    originIps?: any;
    /**
     * 
     * @type {Model8INyb3jSRatelimit}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    ratelimit?: Model8INyb3jSRatelimit;
    /**
     * 
     * @type {Model8INyb3jSRetries}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    retries?: Model8INyb3jSRetries;
    /**
     * 
     * @type {Model8INyb3jSUpstreamIps}
     * @memberof AccountIdentifierDnsFirewallBody
     */
    upstreamIps: Model8INyb3jSUpstreamIps;
}