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
import { Tm1HTKEcAllowAllHeaders } from './tm1-htkec-allow-all-headers';
import { Tm1HTKEcAllowAllMethods } from './tm1-htkec-allow-all-methods';
import { Tm1HTKEcAllowAllOrigins } from './tm1-htkec-allow-all-origins';
import { Tm1HTKEcAllowCredentials } from './tm1-htkec-allow-credentials';
import { Tm1HTKEcAllowedHeaders } from './tm1-htkec-allowed-headers';
import { Tm1HTKEcAllowedMethods } from './tm1-htkec-allowed-methods';
import { Tm1HTKEcAllowedOrigins } from './tm1-htkec-allowed-origins';
import { Tm1HTKEcMaxAge } from './tm1-htkec-max-age';
/**
 * 
 * @export
 * @interface Tm1HTKEcCorsHeaders
 */
export interface Tm1HTKEcCorsHeaders {
    /**
     * 
     * @type {Tm1HTKEcAllowAllHeaders}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowAllHeaders?: Tm1HTKEcAllowAllHeaders;
    /**
     * 
     * @type {Tm1HTKEcAllowAllMethods}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowAllMethods?: Tm1HTKEcAllowAllMethods;
    /**
     * 
     * @type {Tm1HTKEcAllowAllOrigins}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowAllOrigins?: Tm1HTKEcAllowAllOrigins;
    /**
     * 
     * @type {Tm1HTKEcAllowCredentials}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowCredentials?: Tm1HTKEcAllowCredentials;
    /**
     * 
     * @type {Tm1HTKEcAllowedHeaders}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowedHeaders?: Tm1HTKEcAllowedHeaders;
    /**
     * 
     * @type {Tm1HTKEcAllowedMethods}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowedMethods?: Tm1HTKEcAllowedMethods;
    /**
     * 
     * @type {Tm1HTKEcAllowedOrigins}
     * @memberof Tm1HTKEcCorsHeaders
     */
    allowedOrigins?: Tm1HTKEcAllowedOrigins;
    /**
     * 
     * @type {Tm1HTKEcMaxAge}
     * @memberof Tm1HTKEcCorsHeaders
     */
    maxAge?: Tm1HTKEcMaxAge;
}