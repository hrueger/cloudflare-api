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
import { Tm1HTKEcAllowedIdps } from './tm1-htkec-allowed-idps';
import { Tm1HTKEcAppLauncherVisible } from './tm1-htkec-app-launcher-visible';
import { Tm1HTKEcAppsComponentsSchemasName } from './tm1-htkec-apps-components-schemas-name';
import { Tm1HTKEcLogoUrl } from './tm1-htkec-logo-url';
import { Tm1HTKEcSaasApp } from './tm1-htkec-saas-app';
import { Tm1HTKEcSchemasAutoRedirectToIdentity } from './tm1-htkec-schemas-auto-redirect-to-identity';
/**
 * 
 * @export
 * @interface Tm1HTKEcSchemasSaasProps
 */
export interface Tm1HTKEcSchemasSaasProps {
    /**
     * 
     * @type {Tm1HTKEcAllowedIdps}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    allowedIdps?: Tm1HTKEcAllowedIdps;
    /**
     * 
     * @type {Tm1HTKEcAppLauncherVisible}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    appLauncherVisible?: Tm1HTKEcAppLauncherVisible;
    /**
     * 
     * @type {Tm1HTKEcSchemasAutoRedirectToIdentity}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    autoRedirectToIdentity?: Tm1HTKEcSchemasAutoRedirectToIdentity;
    /**
     * 
     * @type {Tm1HTKEcLogoUrl}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    logoUrl?: Tm1HTKEcLogoUrl;
    /**
     * 
     * @type {Tm1HTKEcAppsComponentsSchemasName}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    name?: Tm1HTKEcAppsComponentsSchemasName;
    /**
     * 
     * @type {Tm1HTKEcSaasApp}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    saasApp?: Tm1HTKEcSaasApp;
    /**
     * The application type.
     * @type {string}
     * @memberof Tm1HTKEcSchemasSaasProps
     */
    type?: string;
}
