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
import { Tm1HTKEcApiResponseCollection } from './tm1-htkec-api-response-collection';
import { Tm1HTKEcAzureAD } from './tm1-htkec-azure-ad';
import { Tm1HTKEcCentrify } from './tm1-htkec-centrify';
import { Tm1HTKEcFacebook } from './tm1-htkec-facebook';
import { Tm1HTKEcGithub } from './tm1-htkec-github';
import { Tm1HTKEcGoogle } from './tm1-htkec-google';
import { Tm1HTKEcGoogleApps } from './tm1-htkec-google-apps';
import { Tm1HTKEcLinkedin } from './tm1-htkec-linkedin';
import { Tm1HTKEcOidc } from './tm1-htkec-oidc';
import { Tm1HTKEcOkta } from './tm1-htkec-okta';
import { Tm1HTKEcOnelogin } from './tm1-htkec-onelogin';
import { Tm1HTKEcPingone } from './tm1-htkec-pingone';
import { Tm1HTKEcResultInfo } from './tm1-htkec-result-info';
import { Tm1HTKEcSaml } from './tm1-htkec-saml';
import { Tm1HTKEcYandex } from './tm1-htkec-yandex';
/**
 * 
 * @export
 * @interface Tm1HTKEcResponseCollection
 */
export interface Tm1HTKEcResponseCollection extends Tm1HTKEcApiResponseCollection {
    /**
     * 
     * @type {Array<Tm1HTKEcAzureAD | Tm1HTKEcCentrify | Tm1HTKEcFacebook | Tm1HTKEcGithub | Tm1HTKEcGoogle | Tm1HTKEcGoogleApps | Tm1HTKEcLinkedin | Tm1HTKEcOidc | Tm1HTKEcOkta | Tm1HTKEcOnelogin | Tm1HTKEcPingone | Tm1HTKEcSaml | Tm1HTKEcYandex>}
     * @memberof Tm1HTKEcResponseCollection
     */
    result?: Array<Tm1HTKEcAzureAD | Tm1HTKEcCentrify | Tm1HTKEcFacebook | Tm1HTKEcGithub | Tm1HTKEcGoogle | Tm1HTKEcGoogleApps | Tm1HTKEcLinkedin | Tm1HTKEcOidc | Tm1HTKEcOkta | Tm1HTKEcOnelogin | Tm1HTKEcPingone | Tm1HTKEcSaml | Tm1HTKEcYandex>;
}
