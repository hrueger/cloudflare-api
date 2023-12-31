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
import { InlineResponse4xx47 } from '../models';
import { InlineResponse4xx48 } from '../models';
import { InlineResponse4xx49 } from '../models';
import { InlineResponse4xx50 } from '../models';
import { Mpo6O2coComponentsSchemasModifiedTunnelsCollectionResponse } from '../models';
import { Mpo6O2coComponentsSchemasTunnelModifiedResponse } from '../models';
import { Mpo6O2coComponentsSchemasTunnelSingleResponse } from '../models';
import { Mpo6O2coComponentsSchemasTunnelUpdateRequest } from '../models';
import { Mpo6O2coComponentsSchemasTunnelsCollectionResponse } from '../models';
import { Mpo6O2coIdentifier } from '../models';
/**
 * MagicInterconnectsApi - axios parameter creator
 * @export
 */
export const MagicInterconnectsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Lists details for a specific interconnect.
         * @summary List interconnect Details
         * @param {Mpo6O2coIdentifier} tunnelIdentifier 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        magicInterconnectsListInterconnectDetails: async (tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'tunnelIdentifier' is not null or undefined
            if (tunnelIdentifier === null || tunnelIdentifier === undefined) {
                throw new RequiredError('tunnelIdentifier','Required parameter tunnelIdentifier was null or undefined when calling magicInterconnectsListInterconnectDetails.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling magicInterconnectsListInterconnectDetails.');
            }
            const localVarPath = `/accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}`
                .replace(`{${"tunnel_identifier"}}`, encodeURIComponent(String(tunnelIdentifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Lists interconnects associated with an account.
         * @summary List interconnects
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        magicInterconnectsListInterconnects: async (accountIdentifier: Mpo6O2coIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling magicInterconnectsListInterconnects.');
            }
            const localVarPath = `/accounts/{account_identifier}/magic/cf_interconnects`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
         * @summary Update interconnect
         * @param {Mpo6O2coComponentsSchemasTunnelUpdateRequest} body 
         * @param {Mpo6O2coIdentifier} tunnelIdentifier 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        magicInterconnectsUpdateInterconnect: async (body: Mpo6O2coComponentsSchemasTunnelUpdateRequest, tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling magicInterconnectsUpdateInterconnect.');
            }
            // verify required parameter 'tunnelIdentifier' is not null or undefined
            if (tunnelIdentifier === null || tunnelIdentifier === undefined) {
                throw new RequiredError('tunnelIdentifier','Required parameter tunnelIdentifier was null or undefined when calling magicInterconnectsUpdateInterconnect.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling magicInterconnectsUpdateInterconnect.');
            }
            const localVarPath = `/accounts/{account_identifier}/magic/cf_interconnects/{tunnel_identifier}`
                .replace(`{${"tunnel_identifier"}}`, encodeURIComponent(String(tunnelIdentifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
        /**
         * Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
         * @summary Update multiple interconnects
         * @param {any} body 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        magicInterconnectsUpdateMultipleInterconnects: async (body: any, accountIdentifier: Mpo6O2coIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling magicInterconnectsUpdateMultipleInterconnects.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling magicInterconnectsUpdateMultipleInterconnects.');
            }
            const localVarPath = `/accounts/{account_identifier}/magic/cf_interconnects`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
 * MagicInterconnectsApi - functional programming interface
 * @export
 */
export const MagicInterconnectsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Lists details for a specific interconnect.
         * @summary List interconnect Details
         * @param {Mpo6O2coIdentifier} tunnelIdentifier 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsListInterconnectDetails(tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelSingleResponse>>> {
            const localVarAxiosArgs = await MagicInterconnectsApiAxiosParamCreator(configuration).magicInterconnectsListInterconnectDetails(tunnelIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists interconnects associated with an account.
         * @summary List interconnects
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsListInterconnects(accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelsCollectionResponse>>> {
            const localVarAxiosArgs = await MagicInterconnectsApiAxiosParamCreator(configuration).magicInterconnectsListInterconnects(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
         * @summary Update interconnect
         * @param {Mpo6O2coComponentsSchemasTunnelUpdateRequest} body 
         * @param {Mpo6O2coIdentifier} tunnelIdentifier 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsUpdateInterconnect(body: Mpo6O2coComponentsSchemasTunnelUpdateRequest, tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelModifiedResponse>>> {
            const localVarAxiosArgs = await MagicInterconnectsApiAxiosParamCreator(configuration).magicInterconnectsUpdateInterconnect(body, tunnelIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
         * @summary Update multiple interconnects
         * @param {any} body 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsUpdateMultipleInterconnects(body: any, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Mpo6O2coComponentsSchemasModifiedTunnelsCollectionResponse>>> {
            const localVarAxiosArgs = await MagicInterconnectsApiAxiosParamCreator(configuration).magicInterconnectsUpdateMultipleInterconnects(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * MagicInterconnectsApi - factory interface
 * @export
 */
export const MagicInterconnectsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Lists details for a specific interconnect.
         * @summary List interconnect Details
         * @param {Mpo6O2coIdentifier} tunnelIdentifier 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsListInterconnectDetails(tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelSingleResponse>> {
            return MagicInterconnectsApiFp(configuration).magicInterconnectsListInterconnectDetails(tunnelIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists interconnects associated with an account.
         * @summary List interconnects
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsListInterconnects(accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelsCollectionResponse>> {
            return MagicInterconnectsApiFp(configuration).magicInterconnectsListInterconnects(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
         * @summary Update interconnect
         * @param {Mpo6O2coComponentsSchemasTunnelUpdateRequest} body 
         * @param {Mpo6O2coIdentifier} tunnelIdentifier 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsUpdateInterconnect(body: Mpo6O2coComponentsSchemasTunnelUpdateRequest, tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelModifiedResponse>> {
            return MagicInterconnectsApiFp(configuration).magicInterconnectsUpdateInterconnect(body, tunnelIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
         * @summary Update multiple interconnects
         * @param {any} body 
         * @param {Mpo6O2coIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async magicInterconnectsUpdateMultipleInterconnects(body: any, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Mpo6O2coComponentsSchemasModifiedTunnelsCollectionResponse>> {
            return MagicInterconnectsApiFp(configuration).magicInterconnectsUpdateMultipleInterconnects(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MagicInterconnectsApi - object-oriented interface
 * @export
 * @class MagicInterconnectsApi
 * @extends {BaseAPI}
 */
export class MagicInterconnectsApi extends BaseAPI {
    /**
     * Lists details for a specific interconnect.
     * @summary List interconnect Details
     * @param {Mpo6O2coIdentifier} tunnelIdentifier 
     * @param {Mpo6O2coIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MagicInterconnectsApi
     */
    public async magicInterconnectsListInterconnectDetails(tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelSingleResponse>> {
        return MagicInterconnectsApiFp(this.configuration).magicInterconnectsListInterconnectDetails(tunnelIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists interconnects associated with an account.
     * @summary List interconnects
     * @param {Mpo6O2coIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MagicInterconnectsApi
     */
    public async magicInterconnectsListInterconnects(accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelsCollectionResponse>> {
        return MagicInterconnectsApiFp(this.configuration).magicInterconnectsListInterconnects(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates a specific interconnect associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @summary Update interconnect
     * @param {Mpo6O2coComponentsSchemasTunnelUpdateRequest} body 
     * @param {Mpo6O2coIdentifier} tunnelIdentifier 
     * @param {Mpo6O2coIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MagicInterconnectsApi
     */
    public async magicInterconnectsUpdateInterconnect(body: Mpo6O2coComponentsSchemasTunnelUpdateRequest, tunnelIdentifier: Mpo6O2coIdentifier, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Mpo6O2coComponentsSchemasTunnelModifiedResponse>> {
        return MagicInterconnectsApiFp(this.configuration).magicInterconnectsUpdateInterconnect(body, tunnelIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates multiple interconnects associated with an account. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
     * @summary Update multiple interconnects
     * @param {any} body 
     * @param {Mpo6O2coIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MagicInterconnectsApi
     */
    public async magicInterconnectsUpdateMultipleInterconnects(body: any, accountIdentifier: Mpo6O2coIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Mpo6O2coComponentsSchemasModifiedTunnelsCollectionResponse>> {
        return MagicInterconnectsApiFp(this.configuration).magicInterconnectsUpdateMultipleInterconnects(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
