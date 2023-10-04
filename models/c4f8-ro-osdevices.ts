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
import { C4f8RoOSComponentsSchemasIp } from './c4f8-ro-oscomponents-schemas-ip';
import { C4f8RoOSComponentsSchemasSerialNumber } from './c4f8-ro-oscomponents-schemas-serial-number';
import { C4f8RoOSDevicesComponentsSchemasName } from './c4f8-ro-osdevices-components-schemas-name';
import { C4f8RoOSDevicesComponentsSchemasUuid } from './c4f8-ro-osdevices-components-schemas-uuid';
import { C4f8RoOSDevicesComponentsSchemasVersion } from './c4f8-ro-osdevices-components-schemas-version';
import { C4f8RoOSLastSeen } from './c4f8-ro-oslast-seen';
import { C4f8RoOSMacAddress } from './c4f8-ro-osmac-address';
import { C4f8RoOSManufacturer } from './c4f8-ro-osmanufacturer';
import { C4f8RoOSModel } from './c4f8-ro-osmodel';
import { C4f8RoOSOsDistroName } from './c4f8-ro-osos-distro-name';
import { C4f8RoOSOsDistroRevision } from './c4f8-ro-osos-distro-revision';
import { C4f8RoOSOsVersion } from './c4f8-ro-osos-version';
import { C4f8RoOSPlatform } from './c4f8-ro-osplatform';
import { C4f8RoOSRevokedAt } from './c4f8-ro-osrevoked-at';
import { C4f8RoOSSchemasCreated } from './c4f8-ro-osschemas-created';
import { C4f8RoOSSchemasDeleted } from './c4f8-ro-osschemas-deleted';
import { C4f8RoOSSchemasKey } from './c4f8-ro-osschemas-key';
import { C4f8RoOSUpdated } from './c4f8-ro-osupdated';
import { C4f8RoOSUser } from './c4f8-ro-osuser';
/**
 * 
 * @export
 * @interface C4f8RoOSDevices
 */
export interface C4f8RoOSDevices {
    /**
     * 
     * @type {C4f8RoOSSchemasCreated}
     * @memberof C4f8RoOSDevices
     */
    created?: C4f8RoOSSchemasCreated;
    /**
     * 
     * @type {C4f8RoOSSchemasDeleted}
     * @memberof C4f8RoOSDevices
     */
    deleted?: C4f8RoOSSchemasDeleted;
    /**
     * 
     * @type {C4f8RoOSPlatform}
     * @memberof C4f8RoOSDevices
     */
    deviceType?: C4f8RoOSPlatform;
    /**
     * 
     * @type {C4f8RoOSDevicesComponentsSchemasUuid}
     * @memberof C4f8RoOSDevices
     */
    id?: C4f8RoOSDevicesComponentsSchemasUuid;
    /**
     * 
     * @type {C4f8RoOSComponentsSchemasIp}
     * @memberof C4f8RoOSDevices
     */
    ip?: C4f8RoOSComponentsSchemasIp;
    /**
     * 
     * @type {C4f8RoOSSchemasKey}
     * @memberof C4f8RoOSDevices
     */
    key?: C4f8RoOSSchemasKey;
    /**
     * 
     * @type {C4f8RoOSLastSeen}
     * @memberof C4f8RoOSDevices
     */
    lastSeen?: C4f8RoOSLastSeen;
    /**
     * 
     * @type {C4f8RoOSMacAddress}
     * @memberof C4f8RoOSDevices
     */
    macAddress?: C4f8RoOSMacAddress;
    /**
     * 
     * @type {C4f8RoOSManufacturer}
     * @memberof C4f8RoOSDevices
     */
    manufacturer?: C4f8RoOSManufacturer;
    /**
     * 
     * @type {C4f8RoOSModel}
     * @memberof C4f8RoOSDevices
     */
    model?: C4f8RoOSModel;
    /**
     * 
     * @type {C4f8RoOSDevicesComponentsSchemasName}
     * @memberof C4f8RoOSDevices
     */
    name?: C4f8RoOSDevicesComponentsSchemasName;
    /**
     * 
     * @type {C4f8RoOSOsDistroName}
     * @memberof C4f8RoOSDevices
     */
    osDistroName?: C4f8RoOSOsDistroName;
    /**
     * 
     * @type {C4f8RoOSOsDistroRevision}
     * @memberof C4f8RoOSDevices
     */
    osDistroRevision?: C4f8RoOSOsDistroRevision;
    /**
     * 
     * @type {C4f8RoOSOsVersion}
     * @memberof C4f8RoOSDevices
     */
    osVersion?: C4f8RoOSOsVersion;
    /**
     * 
     * @type {C4f8RoOSRevokedAt}
     * @memberof C4f8RoOSDevices
     */
    revokedAt?: C4f8RoOSRevokedAt;
    /**
     * 
     * @type {C4f8RoOSComponentsSchemasSerialNumber}
     * @memberof C4f8RoOSDevices
     */
    serialNumber?: C4f8RoOSComponentsSchemasSerialNumber;
    /**
     * 
     * @type {C4f8RoOSUpdated}
     * @memberof C4f8RoOSDevices
     */
    updated?: C4f8RoOSUpdated;
    /**
     * 
     * @type {C4f8RoOSUser}
     * @memberof C4f8RoOSDevices
     */
    user?: C4f8RoOSUser;
    /**
     * 
     * @type {C4f8RoOSDevicesComponentsSchemasVersion}
     * @memberof C4f8RoOSDevices
     */
    version?: C4f8RoOSDevicesComponentsSchemasVersion;
}
