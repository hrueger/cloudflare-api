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
import { Tm1HTKEcComponentsSchemasName } from './tm1-htkec-components-schemas-name';
import { Tm1HTKEcExclude } from './tm1-htkec-exclude';
import { Tm1HTKEcInclude } from './tm1-htkec-include';
import { Tm1HTKEcRequire } from './tm1-htkec-require';
/**
 * 
 * @export
 * @interface AccessGroupsBody1
 */
export interface AccessGroupsBody1 {
    /**
     * 
     * @type {Tm1HTKEcExclude}
     * @memberof AccessGroupsBody1
     */
    exclude?: Tm1HTKEcExclude;
    /**
     * 
     * @type {Tm1HTKEcInclude}
     * @memberof AccessGroupsBody1
     */
    include: Tm1HTKEcInclude;
    /**
     * 
     * @type {Tm1HTKEcComponentsSchemasName}
     * @memberof AccessGroupsBody1
     */
    name: Tm1HTKEcComponentsSchemasName;
    /**
     * 
     * @type {Tm1HTKEcRequire}
     * @memberof AccessGroupsBody1
     */
    require?: Tm1HTKEcRequire;
}
