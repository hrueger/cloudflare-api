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
import { VXFDQCwXEnabled } from './vxfdqcw-xenabled';
import { VXFDQCwXLatitude } from './vxfdqcw-xlatitude';
import { VXFDQCwXLoadShedding } from './vxfdqcw-xload-shedding';
import { VXFDQCwXLongitude } from './vxfdqcw-xlongitude';
import { VXFDQCwXMinimumOrigins } from './vxfdqcw-xminimum-origins';
import { VXFDQCwXMonitorId } from './vxfdqcw-xmonitor-id';
import { VXFDQCwXName } from './vxfdqcw-xname';
import { VXFDQCwXNotificationEmail } from './vxfdqcw-xnotification-email';
import { VXFDQCwXNotificationFilter } from './vxfdqcw-xnotification-filter';
import { VXFDQCwXOriginSteering } from './vxfdqcw-xorigin-steering';
import { VXFDQCwXOrigins } from './vxfdqcw-xorigins';
import { VXFDQCwXSchemasDescription } from './vxfdqcw-xschemas-description';
/**
 * 
 * @export
 * @interface LoadBalancersPoolsBody
 */
export interface LoadBalancersPoolsBody {
    /**
     * 
     * @type {VXFDQCwXSchemasDescription}
     * @memberof LoadBalancersPoolsBody
     */
    description?: VXFDQCwXSchemasDescription;
    /**
     * 
     * @type {VXFDQCwXEnabled}
     * @memberof LoadBalancersPoolsBody
     */
    enabled?: VXFDQCwXEnabled;
    /**
     * 
     * @type {VXFDQCwXLatitude}
     * @memberof LoadBalancersPoolsBody
     */
    latitude?: VXFDQCwXLatitude;
    /**
     * 
     * @type {VXFDQCwXLoadShedding}
     * @memberof LoadBalancersPoolsBody
     */
    loadShedding?: VXFDQCwXLoadShedding;
    /**
     * 
     * @type {VXFDQCwXLongitude}
     * @memberof LoadBalancersPoolsBody
     */
    longitude?: VXFDQCwXLongitude;
    /**
     * 
     * @type {VXFDQCwXMinimumOrigins}
     * @memberof LoadBalancersPoolsBody
     */
    minimumOrigins?: VXFDQCwXMinimumOrigins;
    /**
     * 
     * @type {VXFDQCwXMonitorId}
     * @memberof LoadBalancersPoolsBody
     */
    monitor?: VXFDQCwXMonitorId;
    /**
     * 
     * @type {VXFDQCwXName}
     * @memberof LoadBalancersPoolsBody
     */
    name: VXFDQCwXName;
    /**
     * 
     * @type {VXFDQCwXNotificationEmail}
     * @memberof LoadBalancersPoolsBody
     */
    notificationEmail?: VXFDQCwXNotificationEmail;
    /**
     * 
     * @type {VXFDQCwXNotificationFilter}
     * @memberof LoadBalancersPoolsBody
     */
    notificationFilter?: VXFDQCwXNotificationFilter;
    /**
     * 
     * @type {VXFDQCwXOriginSteering}
     * @memberof LoadBalancersPoolsBody
     */
    originSteering?: VXFDQCwXOriginSteering;
    /**
     * 
     * @type {VXFDQCwXOrigins}
     * @memberof LoadBalancersPoolsBody
     */
    origins: VXFDQCwXOrigins;
}
