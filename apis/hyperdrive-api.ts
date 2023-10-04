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
import { HyperdriveHyperdriveWithPassword } from '../models';
import { HyperdriveIdentifier } from '../models';
import { InlineResponse20033 } from '../models';
import { InlineResponse20034 } from '../models';
import { InlineResponse20035 } from '../models';
import { InlineResponse4XX156 } from '../models';
/**
 * HyperdriveApi - axios parameter creator
 * @export
 */
export const HyperdriveApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates and returns a new Hyperdrive configuration.
         * @summary Create Hyperdrive
         * @param {HyperdriveHyperdriveWithPassword} body 
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createHyperdrive: async (body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling createHyperdrive.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling createHyperdrive.');
            }
            const localVarPath = `/accounts/{account_identifier}/hyperdrive/configs`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Deletes the specified Hyperdrive.
         * @summary Delete Hyperdrive
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteHyperdrive: async (accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling deleteHyperdrive.');
            }
            // verify required parameter 'hyperdriveIdentifier' is not null or undefined
            if (hyperdriveIdentifier === null || hyperdriveIdentifier === undefined) {
                throw new RequiredError('hyperdriveIdentifier','Required parameter hyperdriveIdentifier was null or undefined when calling deleteHyperdrive.');
            }
            const localVarPath = `/accounts/{account_identifier}/hyperdrive/configs/{hyperdrive_identifier}`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
                .replace(`{${"hyperdrive_identifier"}}`, encodeURIComponent(String(hyperdriveIdentifier)));
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Returns the specified Hyperdrive configuration.
         * @summary Get Hyperdrive
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getHyperdrive: async (accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling getHyperdrive.');
            }
            // verify required parameter 'hyperdriveIdentifier' is not null or undefined
            if (hyperdriveIdentifier === null || hyperdriveIdentifier === undefined) {
                throw new RequiredError('hyperdriveIdentifier','Required parameter hyperdriveIdentifier was null or undefined when calling getHyperdrive.');
            }
            const localVarPath = `/accounts/{account_identifier}/hyperdrive/configs/{hyperdrive_identifier}`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
                .replace(`{${"hyperdrive_identifier"}}`, encodeURIComponent(String(hyperdriveIdentifier)));
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Returns a list of Hyperdrives
         * @summary List Hyperdrives
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHyperdrive: async (accountIdentifier: HyperdriveIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling listHyperdrive.');
            }
            const localVarPath = `/accounts/{account_identifier}/hyperdrive/configs`
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
         * Updates and returns the specified Hyperdrive configuration.
         * @summary Update Hyperdrive
         * @param {HyperdriveHyperdriveWithPassword} body 
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateHyperdrive: async (body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling updateHyperdrive.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling updateHyperdrive.');
            }
            // verify required parameter 'hyperdriveIdentifier' is not null or undefined
            if (hyperdriveIdentifier === null || hyperdriveIdentifier === undefined) {
                throw new RequiredError('hyperdriveIdentifier','Required parameter hyperdriveIdentifier was null or undefined when calling updateHyperdrive.');
            }
            const localVarPath = `/accounts/{account_identifier}/hyperdrive/configs/{hyperdrive_identifier}`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)))
                .replace(`{${"hyperdrive_identifier"}}`, encodeURIComponent(String(hyperdriveIdentifier)));
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
 * HyperdriveApi - functional programming interface
 * @export
 */
export const HyperdriveApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Creates and returns a new Hyperdrive configuration.
         * @summary Create Hyperdrive
         * @param {HyperdriveHyperdriveWithPassword} body 
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createHyperdrive(body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20034>>> {
            const localVarAxiosArgs = await HyperdriveApiAxiosParamCreator(configuration).createHyperdrive(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Deletes the specified Hyperdrive.
         * @summary Delete Hyperdrive
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteHyperdrive(accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20035>>> {
            const localVarAxiosArgs = await HyperdriveApiAxiosParamCreator(configuration).deleteHyperdrive(accountIdentifier, hyperdriveIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns the specified Hyperdrive configuration.
         * @summary Get Hyperdrive
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHyperdrive(accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20034>>> {
            const localVarAxiosArgs = await HyperdriveApiAxiosParamCreator(configuration).getHyperdrive(accountIdentifier, hyperdriveIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Returns a list of Hyperdrives
         * @summary List Hyperdrives
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listHyperdrive(accountIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20033>>> {
            const localVarAxiosArgs = await HyperdriveApiAxiosParamCreator(configuration).listHyperdrive(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates and returns the specified Hyperdrive configuration.
         * @summary Update Hyperdrive
         * @param {HyperdriveHyperdriveWithPassword} body 
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateHyperdrive(body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20034>>> {
            const localVarAxiosArgs = await HyperdriveApiAxiosParamCreator(configuration).updateHyperdrive(body, accountIdentifier, hyperdriveIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * HyperdriveApi - factory interface
 * @export
 */
export const HyperdriveApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Creates and returns a new Hyperdrive configuration.
         * @summary Create Hyperdrive
         * @param {HyperdriveHyperdriveWithPassword} body 
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createHyperdrive(body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20034>> {
            return HyperdriveApiFp(configuration).createHyperdrive(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified Hyperdrive.
         * @summary Delete Hyperdrive
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteHyperdrive(accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20035>> {
            return HyperdriveApiFp(configuration).deleteHyperdrive(accountIdentifier, hyperdriveIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns the specified Hyperdrive configuration.
         * @summary Get Hyperdrive
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getHyperdrive(accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20034>> {
            return HyperdriveApiFp(configuration).getHyperdrive(accountIdentifier, hyperdriveIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of Hyperdrives
         * @summary List Hyperdrives
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listHyperdrive(accountIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20033>> {
            return HyperdriveApiFp(configuration).listHyperdrive(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates and returns the specified Hyperdrive configuration.
         * @summary Update Hyperdrive
         * @param {HyperdriveHyperdriveWithPassword} body 
         * @param {HyperdriveIdentifier} accountIdentifier 
         * @param {HyperdriveIdentifier} hyperdriveIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateHyperdrive(body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20034>> {
            return HyperdriveApiFp(configuration).updateHyperdrive(body, accountIdentifier, hyperdriveIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * HyperdriveApi - object-oriented interface
 * @export
 * @class HyperdriveApi
 * @extends {BaseAPI}
 */
export class HyperdriveApi extends BaseAPI {
    /**
     * Creates and returns a new Hyperdrive configuration.
     * @summary Create Hyperdrive
     * @param {HyperdriveHyperdriveWithPassword} body 
     * @param {HyperdriveIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HyperdriveApi
     */
    public async createHyperdrive(body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20034>> {
        return HyperdriveApiFp(this.configuration).createHyperdrive(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Deletes the specified Hyperdrive.
     * @summary Delete Hyperdrive
     * @param {HyperdriveIdentifier} accountIdentifier 
     * @param {HyperdriveIdentifier} hyperdriveIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HyperdriveApi
     */
    public async deleteHyperdrive(accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20035>> {
        return HyperdriveApiFp(this.configuration).deleteHyperdrive(accountIdentifier, hyperdriveIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns the specified Hyperdrive configuration.
     * @summary Get Hyperdrive
     * @param {HyperdriveIdentifier} accountIdentifier 
     * @param {HyperdriveIdentifier} hyperdriveIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HyperdriveApi
     */
    public async getHyperdrive(accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20034>> {
        return HyperdriveApiFp(this.configuration).getHyperdrive(accountIdentifier, hyperdriveIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Returns a list of Hyperdrives
     * @summary List Hyperdrives
     * @param {HyperdriveIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HyperdriveApi
     */
    public async listHyperdrive(accountIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20033>> {
        return HyperdriveApiFp(this.configuration).listHyperdrive(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates and returns the specified Hyperdrive configuration.
     * @summary Update Hyperdrive
     * @param {HyperdriveHyperdriveWithPassword} body 
     * @param {HyperdriveIdentifier} accountIdentifier 
     * @param {HyperdriveIdentifier} hyperdriveIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HyperdriveApi
     */
    public async updateHyperdrive(body: HyperdriveHyperdriveWithPassword, accountIdentifier: HyperdriveIdentifier, hyperdriveIdentifier: HyperdriveIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20034>> {
        return HyperdriveApiFp(this.configuration).updateHyperdrive(body, accountIdentifier, hyperdriveIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
