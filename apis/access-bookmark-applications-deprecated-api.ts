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
import { InlineResponse4XX10 } from '../models';
import { InlineResponse4XX11 } from '../models';
import { InlineResponse4XX9 } from '../models';
import { Tm1HTKEcBookmarksComponentsSchemasResponseCollection } from '../models';
import { Tm1HTKEcBookmarksComponentsSchemasSingleResponse } from '../models';
import { Tm1HTKEcComponentsSchemasIdResponse } from '../models';
import { Tm1HTKEcIdentifier } from '../models';
import { Tm1HTKEcUuid } from '../models';
/**
 * AccessBookmarkApplicationsDeprecatedApi - axios parameter creator
 * @export
 */
export const AccessBookmarkApplicationsDeprecatedApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new Bookmark application.
         * @summary Create a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessBookmarkApplicationsDeprecatedCreateABookmarkApplication: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessBookmarkApplicationsDeprecatedCreateABookmarkApplication.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessBookmarkApplicationsDeprecatedCreateABookmarkApplication.');
            }
            const localVarPath = `/accounts/{identifier}/access/bookmarks/{uuid}`
                .replace(`{${"uuid"}}`, encodeURIComponent(String(uuid)))
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
         * Deletes a Bookmark application.
         * @summary Delete a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication.');
            }
            const localVarPath = `/accounts/{identifier}/access/bookmarks/{uuid}`
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
         * Fetches a single Bookmark application.
         * @summary Get a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessBookmarkApplicationsDeprecatedGetABookmarkApplication: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessBookmarkApplicationsDeprecatedGetABookmarkApplication.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessBookmarkApplicationsDeprecatedGetABookmarkApplication.');
            }
            const localVarPath = `/accounts/{identifier}/access/bookmarks/{uuid}`
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
         * Lists Bookmark applications.
         * @summary List Bookmark applications
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessBookmarkApplicationsDeprecatedListBookmarkApplications: async (identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessBookmarkApplicationsDeprecatedListBookmarkApplications.');
            }
            const localVarPath = `/accounts/{identifier}/access/bookmarks`
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
         * Updates a configured Bookmark application.
         * @summary Update a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication: async (uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'uuid' is not null or undefined
            if (uuid === null || uuid === undefined) {
                throw new RequiredError('uuid','Required parameter uuid was null or undefined when calling accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication.');
            }
            const localVarPath = `/accounts/{identifier}/access/bookmarks/{uuid}`
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
    }
};

/**
 * AccessBookmarkApplicationsDeprecatedApi - functional programming interface
 * @export
 */
export const AccessBookmarkApplicationsDeprecatedApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new Bookmark application.
         * @summary Create a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessBookmarkApplicationsDeprecatedApiAxiosParamCreator(configuration).accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes a Bookmark application.
         * @summary Delete a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcComponentsSchemasIdResponse>>> {
            const localVarAxiosArgs = await AccessBookmarkApplicationsDeprecatedApiAxiosParamCreator(configuration).accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Fetches a single Bookmark application.
         * @summary Get a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedGetABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessBookmarkApplicationsDeprecatedApiAxiosParamCreator(configuration).accessBookmarkApplicationsDeprecatedGetABookmarkApplication(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists Bookmark applications.
         * @summary List Bookmark applications
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedListBookmarkApplications(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await AccessBookmarkApplicationsDeprecatedApiAxiosParamCreator(configuration).accessBookmarkApplicationsDeprecatedListBookmarkApplications(identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a configured Bookmark application.
         * @summary Update a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>>> {
            const localVarAxiosArgs = await AccessBookmarkApplicationsDeprecatedApiAxiosParamCreator(configuration).accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(uuid, identifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * AccessBookmarkApplicationsDeprecatedApi - factory interface
 * @export
 */
export const AccessBookmarkApplicationsDeprecatedApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new Bookmark application.
         * @summary Create a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>> {
            return AccessBookmarkApplicationsDeprecatedApiFp(configuration).accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a Bookmark application.
         * @summary Delete a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcComponentsSchemasIdResponse>> {
            return AccessBookmarkApplicationsDeprecatedApiFp(configuration).accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Fetches a single Bookmark application.
         * @summary Get a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedGetABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>> {
            return AccessBookmarkApplicationsDeprecatedApiFp(configuration).accessBookmarkApplicationsDeprecatedGetABookmarkApplication(uuid, identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists Bookmark applications.
         * @summary List Bookmark applications
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedListBookmarkApplications(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasResponseCollection>> {
            return AccessBookmarkApplicationsDeprecatedApiFp(configuration).accessBookmarkApplicationsDeprecatedListBookmarkApplications(identifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a configured Bookmark application.
         * @summary Update a Bookmark application
         * @param {Tm1HTKEcUuid} uuid 
         * @param {Tm1HTKEcIdentifier} identifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>> {
            return AccessBookmarkApplicationsDeprecatedApiFp(configuration).accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(uuid, identifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AccessBookmarkApplicationsDeprecatedApi - object-oriented interface
 * @export
 * @class AccessBookmarkApplicationsDeprecatedApi
 * @extends {BaseAPI}
 */
export class AccessBookmarkApplicationsDeprecatedApi extends BaseAPI {
    /**
     * Create a new Bookmark application.
     * @summary Create a Bookmark application
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessBookmarkApplicationsDeprecatedApi
     */
    public async accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>> {
        return AccessBookmarkApplicationsDeprecatedApiFp(this.configuration).accessBookmarkApplicationsDeprecatedCreateABookmarkApplication(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes a Bookmark application.
     * @summary Delete a Bookmark application
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessBookmarkApplicationsDeprecatedApi
     */
    public async accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcComponentsSchemasIdResponse>> {
        return AccessBookmarkApplicationsDeprecatedApiFp(this.configuration).accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Fetches a single Bookmark application.
     * @summary Get a Bookmark application
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessBookmarkApplicationsDeprecatedApi
     */
    public async accessBookmarkApplicationsDeprecatedGetABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>> {
        return AccessBookmarkApplicationsDeprecatedApiFp(this.configuration).accessBookmarkApplicationsDeprecatedGetABookmarkApplication(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists Bookmark applications.
     * @summary List Bookmark applications
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessBookmarkApplicationsDeprecatedApi
     */
    public async accessBookmarkApplicationsDeprecatedListBookmarkApplications(identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasResponseCollection>> {
        return AccessBookmarkApplicationsDeprecatedApiFp(this.configuration).accessBookmarkApplicationsDeprecatedListBookmarkApplications(identifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a configured Bookmark application.
     * @summary Update a Bookmark application
     * @param {Tm1HTKEcUuid} uuid 
     * @param {Tm1HTKEcIdentifier} identifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccessBookmarkApplicationsDeprecatedApi
     */
    public async accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(uuid: Tm1HTKEcUuid, identifier: Tm1HTKEcIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Tm1HTKEcBookmarksComponentsSchemasSingleResponse>> {
        return AccessBookmarkApplicationsDeprecatedApiFp(this.configuration).accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication(uuid, identifier, options).then((request) => request(this.axios, this.basePath));
    }
}