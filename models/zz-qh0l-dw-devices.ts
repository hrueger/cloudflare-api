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
import { ZzQH0lDwCreated } from './zz-qh0l-dw-created';
import { ZzQH0lDwDeleted } from './zz-qh0l-dw-deleted';
import { ZzQH0lDwIp } from './zz-qh0l-dw-ip';
import { ZzQH0lDwKey } from './zz-qh0l-dw-key';
import { ZzQH0lDwLastSeen } from './zz-qh0l-dw-last-seen';
import { ZzQH0lDwMacAddress } from './zz-qh0l-dw-mac-address';
import { ZzQH0lDwManufacturer } from './zz-qh0l-dw-manufacturer';
import { ZzQH0lDwModel } from './zz-qh0l-dw-model';
import { ZzQH0lDwOsDistroName } from './zz-qh0l-dw-os-distro-name';
import { ZzQH0lDwOsDistroRevision } from './zz-qh0l-dw-os-distro-revision';
import { ZzQH0lDwOsVersion } from './zz-qh0l-dw-os-version';
import { ZzQH0lDwOsVersionExtra } from './zz-qh0l-dw-os-version-extra';
import { ZzQH0lDwPlatform } from './zz-qh0l-dw-platform';
import { ZzQH0lDwRevokedAt } from './zz-qh0l-dw-revoked-at';
import { ZzQH0lDwSchemasName } from './zz-qh0l-dw-schemas-name';
import { ZzQH0lDwSchemasUuid } from './zz-qh0l-dw-schemas-uuid';
import { ZzQH0lDwSerialNumber } from './zz-qh0l-dw-serial-number';
import { ZzQH0lDwUpdated } from './zz-qh0l-dw-updated';
import { ZzQH0lDwUser } from './zz-qh0l-dw-user';
import { ZzQH0lDwVersion } from './zz-qh0l-dw-version';
/**
 * 
 * @export
 * @interface ZzQH0lDwDevices
 */
export interface ZzQH0lDwDevices {
    /**
     * 
     * @type {ZzQH0lDwCreated}
     * @memberof ZzQH0lDwDevices
     */
    created?: ZzQH0lDwCreated;
    /**
     * 
     * @type {ZzQH0lDwDeleted}
     * @memberof ZzQH0lDwDevices
     */
    deleted?: ZzQH0lDwDeleted;
    /**
     * 
     * @type {ZzQH0lDwPlatform}
     * @memberof ZzQH0lDwDevices
     */
    deviceType?: ZzQH0lDwPlatform;
    /**
     * 
     * @type {ZzQH0lDwSchemasUuid}
     * @memberof ZzQH0lDwDevices
     */
    id?: ZzQH0lDwSchemasUuid;
    /**
     * 
     * @type {ZzQH0lDwIp}
     * @memberof ZzQH0lDwDevices
     */
    ip?: ZzQH0lDwIp;
    /**
     * 
     * @type {ZzQH0lDwKey}
     * @memberof ZzQH0lDwDevices
     */
    key?: ZzQH0lDwKey;
    /**
     * 
     * @type {ZzQH0lDwLastSeen}
     * @memberof ZzQH0lDwDevices
     */
    lastSeen?: ZzQH0lDwLastSeen;
    /**
     * 
     * @type {ZzQH0lDwMacAddress}
     * @memberof ZzQH0lDwDevices
     */
    macAddress?: ZzQH0lDwMacAddress;
    /**
     * 
     * @type {ZzQH0lDwManufacturer}
     * @memberof ZzQH0lDwDevices
     */
    manufacturer?: ZzQH0lDwManufacturer;
    /**
     * 
     * @type {ZzQH0lDwModel}
     * @memberof ZzQH0lDwDevices
     */
    model?: ZzQH0lDwModel;
    /**
     * 
     * @type {ZzQH0lDwSchemasName}
     * @memberof ZzQH0lDwDevices
     */
    name?: ZzQH0lDwSchemasName;
    /**
     * 
     * @type {ZzQH0lDwOsDistroName}
     * @memberof ZzQH0lDwDevices
     */
    osDistroName?: ZzQH0lDwOsDistroName;
    /**
     * 
     * @type {ZzQH0lDwOsDistroRevision}
     * @memberof ZzQH0lDwDevices
     */
    osDistroRevision?: ZzQH0lDwOsDistroRevision;
    /**
     * 
     * @type {ZzQH0lDwOsVersion}
     * @memberof ZzQH0lDwDevices
     */
    osVersion?: ZzQH0lDwOsVersion;
    /**
     * 
     * @type {ZzQH0lDwOsVersionExtra}
     * @memberof ZzQH0lDwDevices
     */
    osVersionExtra?: ZzQH0lDwOsVersionExtra;
    /**
     * 
     * @type {ZzQH0lDwRevokedAt}
     * @memberof ZzQH0lDwDevices
     */
    revokedAt?: ZzQH0lDwRevokedAt;
    /**
     * 
     * @type {ZzQH0lDwSerialNumber}
     * @memberof ZzQH0lDwDevices
     */
    serialNumber?: ZzQH0lDwSerialNumber;
    /**
     * 
     * @type {ZzQH0lDwUpdated}
     * @memberof ZzQH0lDwDevices
     */
    updated?: ZzQH0lDwUpdated;
    /**
     * 
     * @type {ZzQH0lDwUser}
     * @memberof ZzQH0lDwDevices
     */
    user?: ZzQH0lDwUser;
    /**
     * 
     * @type {ZzQH0lDwVersion}
     * @memberof ZzQH0lDwDevices
     */
    version?: ZzQH0lDwVersion;
}
