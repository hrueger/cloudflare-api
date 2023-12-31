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
import { Cb6wd4cIBaseConfig } from './cb6wd4c-ibase-config';
import { Cb6wd4cIOptimizeWordpress } from './cb6wd4c-ioptimize-wordpress';
import { Cb6wd4cISbfmDefinitelyAutomated } from './cb6wd4c-isbfm-definitely-automated';
import { Cb6wd4cISbfmStaticResourceProtection } from './cb6wd4c-isbfm-static-resource-protection';
import { Cb6wd4cISbfmVerifiedBots } from './cb6wd4c-isbfm-verified-bots';
/**
 * 
 * @export
 * @interface Cb6wd4cISbfmDefinitelyConfig
 */
export interface Cb6wd4cISbfmDefinitelyConfig extends Cb6wd4cIBaseConfig {
    /**
     * 
     * @type {Cb6wd4cIOptimizeWordpress}
     * @memberof Cb6wd4cISbfmDefinitelyConfig
     */
    optimizeWordpress?: Cb6wd4cIOptimizeWordpress;
    /**
     * 
     * @type {Cb6wd4cISbfmDefinitelyAutomated}
     * @memberof Cb6wd4cISbfmDefinitelyConfig
     */
    sbfmDefinitelyAutomated?: Cb6wd4cISbfmDefinitelyAutomated;
    /**
     * 
     * @type {Cb6wd4cISbfmStaticResourceProtection}
     * @memberof Cb6wd4cISbfmDefinitelyConfig
     */
    sbfmStaticResourceProtection?: Cb6wd4cISbfmStaticResourceProtection;
    /**
     * 
     * @type {Cb6wd4cISbfmVerifiedBots}
     * @memberof Cb6wd4cISbfmDefinitelyConfig
     */
    sbfmVerifiedBots?: Cb6wd4cISbfmVerifiedBots;
}
