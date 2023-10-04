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
import { JOh1h9zQJwk } from './joh1h9z-qjwk';
import { JOh1h9zQPem } from './joh1h9z-qpem';
import { JOh1h9zQSchemasIdentifier } from './joh1h9z-qschemas-identifier';
import { JOh1h9zQSigningKeyCreated } from './joh1h9z-qsigning-key-created';
/**
 * 
 * @export
 * @interface JOh1h9zQKeys
 */
export interface JOh1h9zQKeys {
    /**
     * 
     * @type {JOh1h9zQSigningKeyCreated}
     * @memberof JOh1h9zQKeys
     */
    created?: JOh1h9zQSigningKeyCreated;
    /**
     * 
     * @type {JOh1h9zQSchemasIdentifier}
     * @memberof JOh1h9zQKeys
     */
    id?: JOh1h9zQSchemasIdentifier;
    /**
     * 
     * @type {JOh1h9zQJwk}
     * @memberof JOh1h9zQKeys
     */
    jwk?: JOh1h9zQJwk;
    /**
     * 
     * @type {JOh1h9zQPem}
     * @memberof JOh1h9zQKeys
     */
    pem?: JOh1h9zQPem;
}