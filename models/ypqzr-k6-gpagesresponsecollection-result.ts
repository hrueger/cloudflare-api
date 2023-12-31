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
import { YPqzrK6GLabeledRegion } from './ypqzr-k6-glabeled-region';
import { YPqzrK6GPageTest } from './ypqzr-k6-gpage-test';
import { YPqzrK6GScheduleFrequency } from './ypqzr-k6-gschedule-frequency';
import { YPqzrK6GUrl } from './ypqzr-k6-gurl';
/**
 * 
 * @export
 * @interface YPqzrK6GPagesresponsecollectionResult
 */
export interface YPqzrK6GPagesresponsecollectionResult {
    /**
     * 
     * @type {YPqzrK6GLabeledRegion}
     * @memberof YPqzrK6GPagesresponsecollectionResult
     */
    region?: YPqzrK6GLabeledRegion;
    /**
     * 
     * @type {YPqzrK6GScheduleFrequency}
     * @memberof YPqzrK6GPagesresponsecollectionResult
     */
    scheduleFrequency?: YPqzrK6GScheduleFrequency;
    /**
     * 
     * @type {Array<YPqzrK6GPageTest>}
     * @memberof YPqzrK6GPagesresponsecollectionResult
     */
    tests?: Array<YPqzrK6GPageTest>;
    /**
     * 
     * @type {YPqzrK6GUrl}
     * @memberof YPqzrK6GPagesresponsecollectionResult
     */
    url?: YPqzrK6GUrl;
}
