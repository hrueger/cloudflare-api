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
import { Tm1HTKEcResultInfo } from './tm1-htkec-result-info';
import { Tm1HTKEcSchemasAzureAD } from './tm1-htkec-schemas-azure-ad';
import { Tm1HTKEcSchemasCentrify } from './tm1-htkec-schemas-centrify';
import { Tm1HTKEcSchemasFacebook } from './tm1-htkec-schemas-facebook';
import { Tm1HTKEcSchemasGithub } from './tm1-htkec-schemas-github';
import { Tm1HTKEcSchemasGoogle } from './tm1-htkec-schemas-google';
import { Tm1HTKEcSchemasGoogleApps } from './tm1-htkec-schemas-google-apps';
import { Tm1HTKEcSchemasLinkedin } from './tm1-htkec-schemas-linkedin';
import { Tm1HTKEcSchemasOidc } from './tm1-htkec-schemas-oidc';
import { Tm1HTKEcSchemasOkta } from './tm1-htkec-schemas-okta';
import { Tm1HTKEcSchemasOnelogin } from './tm1-htkec-schemas-onelogin';
import { Tm1HTKEcSchemasPingone } from './tm1-htkec-schemas-pingone';
import { Tm1HTKEcSchemasSaml } from './tm1-htkec-schemas-saml';
import { Tm1HTKEcSchemasYandex } from './tm1-htkec-schemas-yandex';
/**
 * 
 * @export
 * @interface Tm1HTKEcIdentityProvidersComponentsSchemasResponseCollection
 */
export interface Tm1HTKEcIdentityProvidersComponentsSchemasResponseCollection extends Tm1HTKEcApiResponseCollection {
    /**
     * 
     * @type {Array<Tm1HTKEcSchemasAzureAD | Tm1HTKEcSchemasCentrify | Tm1HTKEcSchemasFacebook | Tm1HTKEcSchemasGithub | Tm1HTKEcSchemasGoogle | Tm1HTKEcSchemasGoogleApps | Tm1HTKEcSchemasLinkedin | Tm1HTKEcSchemasOidc | Tm1HTKEcSchemasOkta | Tm1HTKEcSchemasOnelogin | Tm1HTKEcSchemasPingone | Tm1HTKEcSchemasSaml | Tm1HTKEcSchemasYandex>}
     * @memberof Tm1HTKEcIdentityProvidersComponentsSchemasResponseCollection
     */
    result?: Array<Tm1HTKEcSchemasAzureAD | Tm1HTKEcSchemasCentrify | Tm1HTKEcSchemasFacebook | Tm1HTKEcSchemasGithub | Tm1HTKEcSchemasGoogle | Tm1HTKEcSchemasGoogleApps | Tm1HTKEcSchemasLinkedin | Tm1HTKEcSchemasOidc | Tm1HTKEcSchemasOkta | Tm1HTKEcSchemasOnelogin | Tm1HTKEcSchemasPingone | Tm1HTKEcSchemasSaml | Tm1HTKEcSchemasYandex>;
}
