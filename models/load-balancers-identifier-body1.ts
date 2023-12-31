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
import { VXFDQCwXTtl } from './vxfdqcw-xttl';
/**
 * 
 * @export
 * @interface LoadBalancersIdentifierBody1
 */
export interface LoadBalancersIdentifierBody1 {
    /**
     * 
     * @type {VXFDQCwXAdaptiveRouting}
     * @memberof LoadBalancersIdentifierBody1
     */
    adaptiveRouting?: VXFDQCwXAdaptiveRouting;
    /**
     * 
     * @type {VXFDQCwXCountryPools}
     * @memberof LoadBalancersIdentifierBody1
     */
    countryPools?: VXFDQCwXCountryPools;
    /**
     * 
     * @type {VXFDQCwXDefaultPools}
     * @memberof LoadBalancersIdentifierBody1
     */
    defaultPools?: VXFDQCwXDefaultPools;
    /**
     * 
     * @type {VXFDQCwXComponentsSchemasDescription}
     * @memberof LoadBalancersIdentifierBody1
     */
    description?: VXFDQCwXComponentsSchemasDescription;
    /**
     * 
     * @type {VXFDQCwXComponentsSchemasEnabled}
     * @memberof LoadBalancersIdentifierBody1
     */
    enabled?: VXFDQCwXComponentsSchemasEnabled;
    /**
     * 
     * @type {VXFDQCwXFallbackPool}
     * @memberof LoadBalancersIdentifierBody1
     */
    fallbackPool?: VXFDQCwXFallbackPool;
    /**
     * 
     * @type {VXFDQCwXLocationStrategy}
     * @memberof LoadBalancersIdentifierBody1
     */
    locationStrategy?: VXFDQCwXLocationStrategy;
    /**
     * 
     * @type {VXFDQCwXComponentsSchemasName}
     * @memberof LoadBalancersIdentifierBody1
     */
    name?: VXFDQCwXComponentsSchemasName;
    /**
     * 
     * @type {VXFDQCwXPopPools}
     * @memberof LoadBalancersIdentifierBody1
     */
    popPools?: VXFDQCwXPopPools;
    /**
     * 
     * @type {VXFDQCwXProxied}
     * @memberof LoadBalancersIdentifierBody1
     */
    proxied?: VXFDQCwXProxied;
    /**
     * 
     * @type {VXFDQCwXRandomSteering}
     * @memberof LoadBalancersIdentifierBody1
     */
    randomSteering?: VXFDQCwXRandomSteering;
    /**
     * 
     * @type {VXFDQCwXRegionPools}
     * @memberof LoadBalancersIdentifierBody1
     */
    regionPools?: VXFDQCwXRegionPools;
    /**
     * 
     * @type {VXFDQCwXRules}
     * @memberof LoadBalancersIdentifierBody1
     */
    rules?: VXFDQCwXRules;
    /**
     * 
     * @type {VXFDQCwXSessionAffinity}
     * @memberof LoadBalancersIdentifierBody1
     */
    sessionAffinity?: VXFDQCwXSessionAffinity;
    /**
     * 
     * @type {VXFDQCwXSessionAffinityAttributes}
     * @memberof LoadBalancersIdentifierBody1
     */
    sessionAffinityAttributes?: VXFDQCwXSessionAffinityAttributes;
    /**
     * 
     * @type {VXFDQCwXSessionAffinityTtl}
     * @memberof LoadBalancersIdentifierBody1
     */
    sessionAffinityTtl?: VXFDQCwXSessionAffinityTtl;
    /**
     * 
     * @type {VXFDQCwXSteeringPolicy}
     * @memberof LoadBalancersIdentifierBody1
     */
    steeringPolicy?: VXFDQCwXSteeringPolicy;
    /**
     * 
     * @type {VXFDQCwXTtl}
     * @memberof LoadBalancersIdentifierBody1
     */
    ttl?: VXFDQCwXTtl;
}
