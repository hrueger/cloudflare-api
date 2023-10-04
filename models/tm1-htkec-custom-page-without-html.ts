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
import { Tm1HTKEcAppCount } from './tm1-htkec-app-count';
import { Tm1HTKEcCustomPagesComponentsSchemasName } from './tm1-htkec-custom-pages-components-schemas-name';
import { Tm1HTKEcSchemasType } from './tm1-htkec-schemas-type';
import { Tm1HTKEcTimestamp } from './tm1-htkec-timestamp';
import { Tm1HTKEcUuid } from './tm1-htkec-uuid';
/**
 * 
 * @export
 * @interface Tm1HTKEcCustomPageWithoutHtml
 */
export interface Tm1HTKEcCustomPageWithoutHtml {
    /**
     * 
     * @type {Tm1HTKEcAppCount}
     * @memberof Tm1HTKEcCustomPageWithoutHtml
     */
    appCount?: Tm1HTKEcAppCount;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcCustomPageWithoutHtml
     */
    createdAt?: Tm1HTKEcTimestamp;
    /**
     * 
     * @type {Tm1HTKEcCustomPagesComponentsSchemasName}
     * @memberof Tm1HTKEcCustomPageWithoutHtml
     */
    name: Tm1HTKEcCustomPagesComponentsSchemasName;
    /**
     * 
     * @type {Tm1HTKEcSchemasType}
     * @memberof Tm1HTKEcCustomPageWithoutHtml
     */
    type: Tm1HTKEcSchemasType;
    /**
     * 
     * @type {Tm1HTKEcUuid}
     * @memberof Tm1HTKEcCustomPageWithoutHtml
     */
    uid?: Tm1HTKEcUuid;
    /**
     * 
     * @type {Tm1HTKEcTimestamp}
     * @memberof Tm1HTKEcCustomPageWithoutHtml
     */
    updatedAt?: Tm1HTKEcTimestamp;
}
