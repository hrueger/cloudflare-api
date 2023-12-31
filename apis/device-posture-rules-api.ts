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
import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { DevicesPostureBody } from '../models';
import { InlineResponse4XX136 } from '../models';
import { InlineResponse4XX137 } from '../models';
import { InlineResponse4XX138 } from '../models';
import { PostureUuidBody } from '../models';
import { ZzQH0lDwIdResponse } from '../models';
import { ZzQH0lDwIdentifier } from '../models';
import { ZzQH0lDwResponseCollection } from '../models';
import { ZzQH0lDwSingleResponse } from '../models';
import { ZzQH0lDwUuid } from '../models';
/**
 * DevicePostureRulesApi - axios parameter creator
 * @export
 */
export const DevicePostureRulesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a new device posture rule.
         * @summary Create a device posture rule
         * @param {DevicesPostureBody} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicePostureRulesCreateDevicePostureRule: async (body: DevicesPostureBody, identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling devicePostureRulesCreateDevicePostureRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling devicePostureRulesCreateDevicePostureRule.');
            }
            const localVarPath = `/accounts/{identifier}/devices/posture`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes a device posture rule.
         * @summary Delete a device posture rule
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicePostureRulesDeleteDevicePostureRule: async (uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling devicePostureRulesDeleteDevicePostureRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling devicePostureRulesDeleteDevicePostureRule.');
            }
            const localVarPath = `/accounts/{identifier}/devices/posture/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches a single device posture rule.
         * @summary Get device posture rule details
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicePostureRulesDevicePostureRulesDetails: async (uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling devicePostureRulesDevicePostureRulesDetails.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling devicePostureRulesDevicePostureRulesDetails.');
            }
            const localVarPath = `/accounts/{identifier}/devices/posture/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Fetches device posture rules for a Zero Trust account.
         * @summary List device posture rules
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicePostureRulesListDevicePostureRules: async (identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling devicePostureRulesListDevicePostureRules.');
            }
            const localVarPath = `/accounts/{identifier}/devices/posture`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a device posture rule.
         * @summary Update a device posture rule
         * @param {PostureUuidBody} body 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        devicePostureRulesUpdateDevicePostureRule: async (body: PostureUuidBody, uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling devicePostureRulesUpdateDevicePostureRule.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling devicePostureRulesUpdateDevicePostureRule.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling devicePostureRulesUpdateDevicePostureRule.');
            }
            const localVarPath = `/accounts/{identifier}/devices/posture/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication api_email required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Email")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Email"] = localVarApiKeyValue;
            }

            // authentication api_key required
            if (configuration && configuration.apiKey) {
                const localVarApiKeyValue = typeof configuration.apiKey === 'function'
                    ? await configuration.apiKey("X-Auth-Key")
                    : await configuration.apiKey;
                localVarHeaderParameter["X-Auth-Key"] = localVarApiKeyValue;
            }

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DevicePostureRulesApi - functional programming interface
 * @export
 */
export const DevicePostureRulesApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates a new device posture rule.
         * @summary Create a device posture rule
         * @param {DevicesPostureBody} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesCreateDevicePostureRule(body: DevicesPostureBody, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwSingleResponse>>> {
            const localVarAxiosArgs = await DevicePostureRulesApiAxiosParamCreator(configuration).devicePostureRulesCreateDevicePostureRule(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes a device posture rule.
         * @summary Delete a device posture rule
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesDeleteDevicePostureRule(uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwIdResponse>>> {
            const localVarAxiosArgs = await DevicePostureRulesApiAxiosParamCreator(configuration).devicePostureRulesDeleteDevicePostureRule(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches a single device posture rule.
         * @summary Get device posture rule details
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesDevicePostureRulesDetails(uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwSingleResponse>>> {
            const localVarAxiosArgs = await DevicePostureRulesApiAxiosParamCreator(configuration).devicePostureRulesDevicePostureRulesDetails(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches device posture rules for a Zero Trust account.
         * @summary List device posture rules
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesListDevicePostureRules(identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwResponseCollection>>> {
            const localVarAxiosArgs = await DevicePostureRulesApiAxiosParamCreator(configuration).devicePostureRulesListDevicePostureRules(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a device posture rule.
         * @summary Update a device posture rule
         * @param {PostureUuidBody} body 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesUpdateDevicePostureRule(body: PostureUuidBody, uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwSingleResponse>>> {
            const localVarAxiosArgs = await DevicePostureRulesApiAxiosParamCreator(configuration).devicePostureRulesUpdateDevicePostureRule(body, uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DevicePostureRulesApi - factory interface
 * @export
 */
export const DevicePostureRulesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates a new device posture rule.
         * @summary Create a device posture rule
         * @param {DevicesPostureBody} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesCreateDevicePostureRule(body: DevicesPostureBody, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwSingleResponse>> {
            return DevicePostureRulesApiFp(configuration).devicePostureRulesCreateDevicePostureRule(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a device posture rule.
         * @summary Delete a device posture rule
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesDeleteDevicePostureRule(uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwIdResponse>> {
            return DevicePostureRulesApiFp(configuration).devicePostureRulesDeleteDevicePostureRule(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches a single device posture rule.
         * @summary Get device posture rule details
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesDevicePostureRulesDetails(uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwSingleResponse>> {
            return DevicePostureRulesApiFp(configuration).devicePostureRulesDevicePostureRulesDetails(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches device posture rules for a Zero Trust account.
         * @summary List device posture rules
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesListDevicePostureRules(identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwResponseCollection>> {
            return DevicePostureRulesApiFp(configuration).devicePostureRulesListDevicePostureRules(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a device posture rule.
         * @summary Update a device posture rule
         * @param {PostureUuidBody} body 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async devicePostureRulesUpdateDevicePostureRule(body: PostureUuidBody, uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwSingleResponse>> {
            return DevicePostureRulesApiFp(configuration).devicePostureRulesUpdateDevicePostureRule(body, uuid, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DevicePostureRulesApi - object-oriented interface
 * @export
 * @class DevicePostureRulesApi
 * @extends {BaseAPI}
 */
export class DevicePostureRulesApi extends BaseAPI {
    /**
     * Creates a new device posture rule.
     * @summary Create a device posture rule
     * @param {DevicesPostureBody} body 
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePostureRulesApi
     */
    public async devicePostureRulesCreateDevicePostureRule(body: DevicesPostureBody, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwSingleResponse>> {
        return DevicePostureRulesApiFp(this.configuration).devicePostureRulesCreateDevicePostureRule(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a device posture rule.
     * @summary Delete a device posture rule
     * @param {ZzQH0lDwUuid} uuid 
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePostureRulesApi
     */
    public async devicePostureRulesDeleteDevicePostureRule(uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwIdResponse>> {
        return DevicePostureRulesApiFp(this.configuration).devicePostureRulesDeleteDevicePostureRule(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches a single device posture rule.
     * @summary Get device posture rule details
     * @param {ZzQH0lDwUuid} uuid 
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePostureRulesApi
     */
    public async devicePostureRulesDevicePostureRulesDetails(uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwSingleResponse>> {
        return DevicePostureRulesApiFp(this.configuration).devicePostureRulesDevicePostureRulesDetails(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches device posture rules for a Zero Trust account.
     * @summary List device posture rules
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePostureRulesApi
     */
    public async devicePostureRulesListDevicePostureRules(identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwResponseCollection>> {
        return DevicePostureRulesApiFp(this.configuration).devicePostureRulesListDevicePostureRules(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a device posture rule.
     * @summary Update a device posture rule
     * @param {PostureUuidBody} body 
     * @param {ZzQH0lDwUuid} uuid 
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DevicePostureRulesApi
     */
    public async devicePostureRulesUpdateDevicePostureRule(body: PostureUuidBody, uuid: ZzQH0lDwUuid, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwSingleResponse>> {
        return DevicePostureRulesApiFp(this.configuration).devicePostureRulesUpdateDevicePostureRule(body, uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}
