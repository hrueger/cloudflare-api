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
import { VXFDQCwXAdaptiveRouting } from './vxfdqcw-xadaptive-routing';
import { VXFDQCwXComponentsSchemasDescription } from './vxfdqcw-xcomponents-schemas-description';
import { VXFDQCwXComponentsSchemasEnabled } from './vxfdqcw-xcomponents-schemas-enabled';
import { VXFDQCwXComponentsSchemasName } from './vxfdqcw-xcomponents-schemas-name';
import { VXFDQCwXCountryPools } from './vxfdqcw-xcountry-pools';
import { VXFDQCwXDefaultPools } from './vxfdqcw-xdefault-pools';
import { VXFDQCwXFallbackPool } from './vxfdqcw-xfallback-pool';
import { VXFDQCwXLoadBalancerComponentsSchemasIdentifier } from './vxfdqcw-xload-balancer-components-schemas-identifier';
import { VXFDQCwXLocationStrategy } from './vxfdqcw-xlocation-strategy';
import { VXFDQCwXPopPools } from './vxfdqcw-xpop-pools';
import { VXFDQCwXProxied } from './vxfdqcw-xproxied';
import { VXFDQCwXRandomSteering } from './vxfdqcw-xrandom-steering';
import { VXFDQCwXRegionPools } from './vxfdqcw-xregion-pools';
import { VXFDQCwXRules } from './vxfdqcw-xrules';
import { VXFDQCwXSessionAffinity } from './vxfdqcw-xsession-affinity';
import { VXFDQCwXSessionAffinityAttributes } from './vxfdqcw-xsession-affinity-attributes';
import { VXFDQCwXSessionAffinityTtl } from './vxfdqcw-xsession-affinity-ttl';
import { VXFDQCwXSteeringPolicy } from './vxfdqcw-xsteering-policy';
import { VXFDQCwXTimestamp } from './vxfdqcw-xtimestamp';
import { VXFDQCwXTtl } from './vxfdqcw-xttl';
/**
 * 
 * @export
 * @interface VXFDQCwXLoadBalancer
 */
export interface VXFDQCwXLoadBalancer {
    /**
     * 
     * @type {VXFDQCwXAdaptiveRouting}
     * @memberof VXFDQCwXLoadBalancer
     */
    adaptiveRouting?: VXFDQCwXAdaptiveRouting;
    /**
     * 
     * @type {VXFDQCwXCountryPools}
     * @memberof VXFDQCwXLoadBalancer
     */
    countryPools?: VXFDQCwXCountryPools;
    /**
     * 
     * @type {VXFDQCwXTimestamp}
     * @memberof VXFDQCwXLoadBalancer
     */
    createdOn?: VXFDQCwXTimestamp;
    /**
     * 
     * @type {VXFDQCwXDefaultPools}
     * @memberof VXFDQCwXLoadBalancer
     */
    defaultPools?: VXFDQCwXDefaultPools;
    /**
     * 
     * @type {VXFDQCwXComponentsSchemasDescription}
     * @memberof VXFDQCwXLoadBalancer
     */
    description?: VXFDQCwXComponentsSchemasDescription;
    /**
     * 
     * @type {VXFDQCwXComponentsSchemasEnabled}
     * @memberof VXFDQCwXLoadBalancer
     */
    enabled?: VXFDQCwXComponentsSchemasEnabled;
    /**
     * 
     * @type {VXFDQCwXFallbackPool}
     * @memberof VXFDQCwXLoadBalancer
     */
    fallbackPool?: VXFDQCwXFallbackPool;
    /**
     * 
     * @type {VXFDQCwXLoadBalancerComponentsSchemasIdentifier}
     * @memberof VXFDQCwXLoadBalancer
     */
    id?: VXFDQCwXLoadBalancerComponentsSchemasIdentifier;
    /**
     * 
     * @type {VXFDQCwXLocationStrategy}
     * @memberof VXFDQCwXLoadBalancer
     */
    locationStrategy?: VXFDQCwXLocationStrategy;
    /**
     * 
     * @type {VXFDQCwXTimestamp}
     * @memberof VXFDQCwXLoadBalancer
     */
    modifiedOn?: VXFDQCwXTimestamp;
    /**
     * 
     * @type {VXFDQCwXComponentsSchemasName}
     * @memberof VXFDQCwXLoadBalancer
     */
    name?: VXFDQCwXComponentsSchemasName;
    /**
     * 
     * @type {VXFDQCwXPopPools}
     * @memberof VXFDQCwXLoadBalancer
     */
    popPools?: VXFDQCwXPopPools;
    /**
     * 
     * @type {VXFDQCwXProxied}
     * @memberof VXFDQCwXLoadBalancer
     */
    proxied?: VXFDQCwXProxied;
    /**
     * 
     * @type {VXFDQCwXRandomSteering}
     * @memberof VXFDQCwXLoadBalancer
     */
    randomSteering?: VXFDQCwXRandomSteering;
    /**
     * 
     * @type {VXFDQCwXRegionPools}
     * @memberof VXFDQCwXLoadBalancer
     */
    regionPools?: VXFDQCwXRegionPools;
    /**
     * 
     * @type {VXFDQCwXRules}
     * @memberof VXFDQCwXLoadBalancer
     */
    rules?: VXFDQCwXRules;
    /**
     * 
     * @type {VXFDQCwXSessionAffinity}
     * @memberof VXFDQCwXLoadBalancer
     */
    sessionAffinity?: VXFDQCwXSessionAffinity;
    /**
     * 
     * @type {VXFDQCwXSessionAffinityAttributes}
     * @memberof VXFDQCwXLoadBalancer
     */
    sessionAffinityAttributes?: VXFDQCwXSessionAffinityAttributes;
    /**
     * 
     * @type {VXFDQCwXSessionAffinityTtl}
     * @memberof VXFDQCwXLoadBalancer
     */
    sessionAffinityTtl?: VXFDQCwXSessionAffinityTtl;
    /**
     * 
     * @type {VXFDQCwXSteeringPolicy}
     * @memberof VXFDQCwXLoadBalancer
     */
    steeringPolicy?: VXFDQCwXSteeringPolicy;
    /**
     * 
     * @type {VXFDQCwXTtl}
     * @memberof VXFDQCwXLoadBalancer
     */
    ttl?: VXFDQCwXTtl;
}
