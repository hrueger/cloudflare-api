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
import { Tm1HTKEcAppsComponentsSchemasName } from './tm1-htkec-apps-components-schemas-name';
import { Tm1HTKEcLogoUrl } from './tm1-htkec-logo-url';
import { Tm1HTKEcTags } from './tm1-htkec-tags';
/**
 * 
 * @export
 * @interface Tm1HTKEcBookmarkProps
 */
export interface Tm1HTKEcBookmarkProps {
    /**
     * 
     * @type {any}
     * @memberof Tm1HTKEcBookmarkProps
     */
    appLauncherVisible?: any;
    /**
     * The URL or domain of the bookmark.
     * @type {any}
     * @memberof Tm1HTKEcBookmarkProps
     */
    domain?: any;
    /**
     * 
     * @type {Tm1HTKEcLogoUrl}
     * @memberof Tm1HTKEcBookmarkProps
     */
    logoUrl?: Tm1HTKEcLogoUrl;
    /**
     * 
     * @type {Tm1HTKEcAppsComponentsSchemasName}
     * @memberof Tm1HTKEcBookmarkProps
     */
    name?: Tm1HTKEcAppsComponentsSchemasName;
    /**
     * 
     * @type {Tm1HTKEcTags}
     * @memberof Tm1HTKEcBookmarkProps
     */
    tags?: Tm1HTKEcTags;
    /**
     * The application type.
     * @type {string}
     * @memberof Tm1HTKEcBookmarkProps
     */
    type?: string;
}
