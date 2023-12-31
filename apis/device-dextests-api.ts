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
import { InlineResponse4XX129 } from '../models';
import { InlineResponse4XX130 } from '../models';
import { ZzQH0lDwDeviceDexTestSchemasHttp } from '../models';
import { ZzQH0lDwDexResponseCollection } from '../models';
import { ZzQH0lDwDexSingleResponse } from '../models';
import { ZzQH0lDwIdentifier } from '../models';
import { ZzQH0lDwUuid } from '../models';
/**
 * DeviceDEXTestsApi - axios parameter creator
 * @export
 */
export const DeviceDEXTestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a DEX test.
         * @summary Create Device DEX test
         * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deviceDexTestCreateDeviceDexTest: async (body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling deviceDexTestCreateDeviceDexTest.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling deviceDexTestCreateDeviceDexTest.');
            }
            const localVarPath = `/accounts/{identifier}/devices/dex_tests`
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
         * Delete a Device DEX test. Returns the remaining device dex tests for the account.
         * @summary Delete Device DEX test
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deviceDexTestDeleteDeviceDexTest: async (identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling deviceDexTestDeleteDeviceDexTest.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling deviceDexTestDeleteDeviceDexTest.');
            }
            const localVarPath = `/accounts/{identifier}/devices/dex_tests/{uuid}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
         * Fetch all DEX tests.
         * @summary List Device DEX tests
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deviceDexTestDetails: async (identifier: ZzQH0lDwIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling deviceDexTestDetails.');
            }
            const localVarPath = `/accounts/{identifier}/devices/dex_tests`
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
         * Fetch a single DEX test.
         * @summary Get Device DEX test
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deviceDexTestGetDeviceDexTest: async (identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling deviceDexTestGetDeviceDexTest.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling deviceDexTestGetDeviceDexTest.');
            }
            const localVarPath = `/accounts/{identifier}/devices/dex_tests/{uuid}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
         * Update a DEX test.
         * @summary Update Device DEX test
         * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deviceDexTestUpdateDeviceDexTest: async (body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling deviceDexTestUpdateDeviceDexTest.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling deviceDexTestUpdateDeviceDexTest.');
            }
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling deviceDexTestUpdateDeviceDexTest.');
            }
            const localVarPath = `/accounts/{identifier}/devices/dex_tests/{uuid}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)));
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
 * DeviceDEXTestsApi - functional programming interface
 * @export
 */
export const DeviceDEXTestsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a DEX test.
         * @summary Create Device DEX test
         * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestCreateDeviceDexTest(body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>>> {
            const localVarAxiosArgs = await DeviceDEXTestsApiAxiosParamCreator(configuration).deviceDexTestCreateDeviceDexTest(body, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a Device DEX test. Returns the remaining device dex tests for the account.
         * @summary Delete Device DEX test
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestDeleteDeviceDexTest(identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwDexResponseCollection>>> {
            const localVarAxiosArgs = await DeviceDEXTestsApiAxiosParamCreator(configuration).deviceDexTestDeleteDeviceDexTest(identifier, uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetch all DEX tests.
         * @summary List Device DEX tests
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestDetails(identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwDexResponseCollection>>> {
            const localVarAxiosArgs = await DeviceDEXTestsApiAxiosParamCreator(configuration).deviceDexTestDetails(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetch a single DEX test.
         * @summary Get Device DEX test
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestGetDeviceDexTest(identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>>> {
            const localVarAxiosArgs = await DeviceDEXTestsApiAxiosParamCreator(configuration).deviceDexTestGetDeviceDexTest(identifier, uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Update a DEX test.
         * @summary Update Device DEX test
         * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestUpdateDeviceDexTest(body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>>> {
            const localVarAxiosArgs = await DeviceDEXTestsApiAxiosParamCreator(configuration).deviceDexTestUpdateDeviceDexTest(body, identifier, uuid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DeviceDEXTestsApi - factory interface
 * @export
 */
export const DeviceDEXTestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a DEX test.
         * @summary Create Device DEX test
         * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestCreateDeviceDexTest(body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>> {
            return DeviceDEXTestsApiFp(configuration).deviceDexTestCreateDeviceDexTest(body, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a Device DEX test. Returns the remaining device dex tests for the account.
         * @summary Delete Device DEX test
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestDeleteDeviceDexTest(identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwDexResponseCollection>> {
            return DeviceDEXTestsApiFp(configuration).deviceDexTestDeleteDeviceDexTest(identifier, uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch all DEX tests.
         * @summary List Device DEX tests
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestDetails(identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwDexResponseCollection>> {
            return DeviceDEXTestsApiFp(configuration).deviceDexTestDetails(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetch a single DEX test.
         * @summary Get Device DEX test
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestGetDeviceDexTest(identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>> {
            return DeviceDEXTestsApiFp(configuration).deviceDexTestGetDeviceDexTest(identifier, uuid, options).then((request) => request(axios, basePath));
        },
        /**
         * Update a DEX test.
         * @summary Update Device DEX test
         * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
         * @param {ZzQH0lDwIdentifier} identifier 
         * @param {ZzQH0lDwUuid} uuid 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deviceDexTestUpdateDeviceDexTest(body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig): Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>> {
            return DeviceDEXTestsApiFp(configuration).deviceDexTestUpdateDeviceDexTest(body, identifier, uuid, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DeviceDEXTestsApi - object-oriented interface
 * @export
 * @class DeviceDEXTestsApi
 * @extends {BaseAPI}
 */
export class DeviceDEXTestsApi extends BaseAPI {
    /**
     * Create a DEX test.
     * @summary Create Device DEX test
     * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceDEXTestsApi
     */
    public async deviceDexTestCreateDeviceDexTest(body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>> {
        return DeviceDEXTestsApiFp(this.configuration).deviceDexTestCreateDeviceDexTest(body, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a Device DEX test. Returns the remaining device dex tests for the account.
     * @summary Delete Device DEX test
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {ZzQH0lDwUuid} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceDEXTestsApi
     */
    public async deviceDexTestDeleteDeviceDexTest(identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwDexResponseCollection>> {
        return DeviceDEXTestsApiFp(this.configuration).deviceDexTestDeleteDeviceDexTest(identifier, uuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetch all DEX tests.
     * @summary List Device DEX tests
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceDEXTestsApi
     */
    public async deviceDexTestDetails(identifier: ZzQH0lDwIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwDexResponseCollection>> {
        return DeviceDEXTestsApiFp(this.configuration).deviceDexTestDetails(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetch a single DEX test.
     * @summary Get Device DEX test
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {ZzQH0lDwUuid} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceDEXTestsApi
     */
    public async deviceDexTestGetDeviceDexTest(identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>> {
        return DeviceDEXTestsApiFp(this.configuration).deviceDexTestGetDeviceDexTest(identifier, uuid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update a DEX test.
     * @summary Update Device DEX test
     * @param {ZzQH0lDwDeviceDexTestSchemasHttp} body 
     * @param {ZzQH0lDwIdentifier} identifier 
     * @param {ZzQH0lDwUuid} uuid 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DeviceDEXTestsApi
     */
    public async deviceDexTestUpdateDeviceDexTest(body: ZzQH0lDwDeviceDexTestSchemasHttp, identifier: ZzQH0lDwIdentifier, uuid: ZzQH0lDwUuid, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZzQH0lDwDexSingleResponse>> {
        return DeviceDEXTestsApiFp(this.configuration).deviceDexTestUpdateDeviceDexTest(body, identifier, uuid, options).then((request) => request(this.axios, this.basePath));
    }
}
