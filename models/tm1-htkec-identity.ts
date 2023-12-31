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
import { Tm1HTKEcDevicePostureRule } from './tm1-htkec-device-posture-rule';
import { Tm1HTKEcGeo } from './tm1-htkec-geo';
import { Tm1HTKEcIdentityIdp } from './tm1-htkec-identity-idp';
import { Tm1HTKEcIdentityMtlsAuth } from './tm1-htkec-identity-mtls-auth';
import { Tm1HTKEcStringKeyMapDeviceSession } from './tm1-htkec-string-key-map-device-session';
/**
 * 
 * @export
 * @interface Tm1HTKEcIdentity
 */
export interface Tm1HTKEcIdentity {
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    accountId?: string;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    authStatus?: string;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    commonName?: string;
    /**
     * 
     * @type {{ [key: string]: Tm1HTKEcDevicePostureRule; }}
     * @memberof Tm1HTKEcIdentity
     */
    devicePosture?: { [key: string]: Tm1HTKEcDevicePostureRule; };
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    deviceId?: string;
    /**
     * 
     * @type {Tm1HTKEcStringKeyMapDeviceSession}
     * @memberof Tm1HTKEcIdentity
     */
    deviceSessions?: Tm1HTKEcStringKeyMapDeviceSession;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    email?: string;
    /**
     * 
     * @type {Tm1HTKEcGeo}
     * @memberof Tm1HTKEcIdentity
     */
    geo?: Tm1HTKEcGeo;
    /**
     * 
     * @type {number}
     * @memberof Tm1HTKEcIdentity
     */
    iat?: number;
    /**
     * 
     * @type {Tm1HTKEcIdentityIdp}
     * @memberof Tm1HTKEcIdentity
     */
    idp?: Tm1HTKEcIdentityIdp;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    ip?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Tm1HTKEcIdentity
     */
    isGateway?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Tm1HTKEcIdentity
     */
    isWarp?: boolean;
    /**
     * 
     * @type {Tm1HTKEcIdentityMtlsAuth}
     * @memberof Tm1HTKEcIdentity
     */
    mtlsAuth?: Tm1HTKEcIdentityMtlsAuth;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    serviceTokenId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Tm1HTKEcIdentity
     */
    serviceTokenStatus?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Tm1HTKEcIdentity
     */
    userUuid?: string;
    /**
     * 
     * @type {number}
     * @memberof Tm1HTKEcIdentity
     */
    version?: number;
}
