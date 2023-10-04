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
import { MepUEAgcCreatedOn } from './mep-ueagc-created-on';
import { MepUEAgcEtag } from './mep-ueagc-etag';
import { MepUEAgcLogpush } from './mep-ueagc-logpush';
import { MepUEAgcModifiedOn } from './mep-ueagc-modified-on';
import { MepUEAgcPipelineHash } from './mep-ueagc-pipeline-hash';
import { MepUEAgcPlacementMode } from './mep-ueagc-placement-mode';
import { MepUEAgcTailConsumers } from './mep-ueagc-tail-consumers';
import { MepUEAgcUsageModel } from './mep-ueagc-usage-model';
/**
 * 
 * @export
 * @interface MepUEAgcScriptResponse
 */
export interface MepUEAgcScriptResponse {
    /**
     * 
     * @type {MepUEAgcCreatedOn}
     * @memberof MepUEAgcScriptResponse
     */
    createdOn?: MepUEAgcCreatedOn;
    /**
     * 
     * @type {MepUEAgcEtag}
     * @memberof MepUEAgcScriptResponse
     */
    etag?: MepUEAgcEtag;
    /**
     * The id of the script in the Workers system. Usually the script name.
     * @type {string}
     * @memberof MepUEAgcScriptResponse
     */
    id?: string;
    /**
     * 
     * @type {MepUEAgcLogpush}
     * @memberof MepUEAgcScriptResponse
     */
    logpush?: MepUEAgcLogpush;
    /**
     * 
     * @type {MepUEAgcModifiedOn}
     * @memberof MepUEAgcScriptResponse
     */
    modifiedOn?: MepUEAgcModifiedOn;
    /**
     * 
     * @type {MepUEAgcPipelineHash}
     * @memberof MepUEAgcScriptResponse
     */
    pipelineHash?: MepUEAgcPipelineHash;
    /**
     * 
     * @type {MepUEAgcPlacementMode}
     * @memberof MepUEAgcScriptResponse
     */
    placementMode?: MepUEAgcPlacementMode;
    /**
     * 
     * @type {MepUEAgcTailConsumers}
     * @memberof MepUEAgcScriptResponse
     */
    tailConsumers?: MepUEAgcTailConsumers;
    /**
     * 
     * @type {MepUEAgcUsageModel}
     * @memberof MepUEAgcScriptResponse
     */
    usageModel?: MepUEAgcUsageModel;
}
