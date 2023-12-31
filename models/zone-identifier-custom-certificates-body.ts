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
import { KNYM3FIhBundleMethod } from './knym3-fih-bundle-method';
import { KNYM3FIhCertificate } from './knym3-fih-certificate';
import { KNYM3FIhGeoRestrictions } from './knym3-fih-geo-restrictions';
import { KNYM3FIhPolicy } from './knym3-fih-policy';
import { KNYM3FIhPrivateKey } from './knym3-fih-private-key';
import { KNYM3FIhType } from './knym3-fih-type';
/**
 * 
 * @export
 * @interface ZoneIdentifierCustomCertificatesBody
 */
export interface ZoneIdentifierCustomCertificatesBody {
    /**
     * 
     * @type {KNYM3FIhBundleMethod}
     * @memberof ZoneIdentifierCustomCertificatesBody
     */
    bundleMethod?: KNYM3FIhBundleMethod;
    /**
     * 
     * @type {KNYM3FIhCertificate}
     * @memberof ZoneIdentifierCustomCertificatesBody
     */
    certificate: KNYM3FIhCertificate;
    /**
     * 
     * @type {KNYM3FIhGeoRestrictions}
     * @memberof ZoneIdentifierCustomCertificatesBody
     */
    geoRestrictions?: KNYM3FIhGeoRestrictions;
    /**
     * 
     * @type {KNYM3FIhPolicy}
     * @memberof ZoneIdentifierCustomCertificatesBody
     */
    policy?: KNYM3FIhPolicy;
    /**
     * 
     * @type {KNYM3FIhPrivateKey}
     * @memberof ZoneIdentifierCustomCertificatesBody
     */
    privateKey: KNYM3FIhPrivateKey;
    /**
     * 
     * @type {KNYM3FIhType}
     * @memberof ZoneIdentifierCustomCertificatesBody
     */
    type?: KNYM3FIhType;
}
