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
import { InlineResponse20038 } from '../models';
import { InlineResponse4XX181 } from '../models';
import { InlineResponse4XX182 } from '../models';
import { ZyjrtQ9zCmbConfig } from '../models';
import { ZyjrtQ9zCmbConfigResponseSingle } from '../models';
import { ZyjrtQ9zIdentifier } from '../models';
/**
 * LogcontrolCMBConfigForAnAccountApi - axios parameter creator
 * @export
 */
export const LogcontrolCMBConfigForAnAccountApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes CMB config.
         * @summary Delete CMB config
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteAccountsAccountIdentifierLogsControlCmbConfig: async (accountIdentifier: ZyjrtQ9zIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling deleteAccountsAccountIdentifierLogsControlCmbConfig.');
            }
            const localVarPath = `/accounts/{account_identifier}/logs/control/cmb/config`
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
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
         * Gets CMB config.
         * @summary Get CMB config
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAccountsAccountIdentifierLogsControlCmbConfig: async (accountIdentifier: ZyjrtQ9zIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling getAccountsAccountIdentifierLogsControlCmbConfig.');
            }
            const localVarPath = `/accounts/{account_identifier}/logs/control/cmb/config`
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
         * Updates CMB config.
         * @summary Update CMB config
         * @param {ZyjrtQ9zCmbConfig} body 
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        putAccountsAccountIdentifierLogsControlCmbConfig: async (body: ZyjrtQ9zCmbConfig, accountIdentifier: ZyjrtQ9zIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling putAccountsAccountIdentifierLogsControlCmbConfig.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling putAccountsAccountIdentifierLogsControlCmbConfig.');
            }
            const localVarPath = `/accounts/{account_identifier}/logs/control/cmb/config`
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
 * LogcontrolCMBConfigForAnAccountApi - functional programming interface
 * @export
 */
export const LogcontrolCMBConfigForAnAccountApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes CMB config.
         * @summary Delete CMB config
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20038>>> {
            const localVarAxiosArgs = await LogcontrolCMBConfigForAnAccountApiAxiosParamCreator(configuration).deleteAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets CMB config.
         * @summary Get CMB config
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZyjrtQ9zCmbConfigResponseSingle>>> {
            const localVarAxiosArgs = await LogcontrolCMBConfigForAnAccountApiAxiosParamCreator(configuration).getAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates CMB config.
         * @summary Update CMB config
         * @param {ZyjrtQ9zCmbConfig} body 
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putAccountsAccountIdentifierLogsControlCmbConfig(body: ZyjrtQ9zCmbConfig, accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ZyjrtQ9zCmbConfigResponseSingle>>> {
            const localVarAxiosArgs = await LogcontrolCMBConfigForAnAccountApiAxiosParamCreator(configuration).putAccountsAccountIdentifierLogsControlCmbConfig(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LogcontrolCMBConfigForAnAccountApi - factory interface
 * @export
 */
export const LogcontrolCMBConfigForAnAccountApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes CMB config.
         * @summary Delete CMB config
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20038>> {
            return LogcontrolCMBConfigForAnAccountApiFp(configuration).deleteAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets CMB config.
         * @summary Get CMB config
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZyjrtQ9zCmbConfigResponseSingle>> {
            return LogcontrolCMBConfigForAnAccountApiFp(configuration).getAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates CMB config.
         * @summary Update CMB config
         * @param {ZyjrtQ9zCmbConfig} body 
         * @param {ZyjrtQ9zIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async putAccountsAccountIdentifierLogsControlCmbConfig(body: ZyjrtQ9zCmbConfig, accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ZyjrtQ9zCmbConfigResponseSingle>> {
            return LogcontrolCMBConfigForAnAccountApiFp(configuration).putAccountsAccountIdentifierLogsControlCmbConfig(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LogcontrolCMBConfigForAnAccountApi - object-oriented interface
 * @export
 * @class LogcontrolCMBConfigForAnAccountApi
 * @extends {BaseAPI}
 */
export class LogcontrolCMBConfigForAnAccountApi extends BaseAPI {
    /**
     * Deletes CMB config.
     * @summary Delete CMB config
     * @param {ZyjrtQ9zIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogcontrolCMBConfigForAnAccountApi
     */
    public async deleteAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20038>> {
        return LogcontrolCMBConfigForAnAccountApiFp(this.configuration).deleteAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets CMB config.
     * @summary Get CMB config
     * @param {ZyjrtQ9zIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogcontrolCMBConfigForAnAccountApi
     */
    public async getAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZyjrtQ9zCmbConfigResponseSingle>> {
        return LogcontrolCMBConfigForAnAccountApiFp(this.configuration).getAccountsAccountIdentifierLogsControlCmbConfig(accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates CMB config.
     * @summary Update CMB config
     * @param {ZyjrtQ9zCmbConfig} body 
     * @param {ZyjrtQ9zIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LogcontrolCMBConfigForAnAccountApi
     */
    public async putAccountsAccountIdentifierLogsControlCmbConfig(body: ZyjrtQ9zCmbConfig, accountIdentifier: ZyjrtQ9zIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ZyjrtQ9zCmbConfigResponseSingle>> {
        return LogcontrolCMBConfigForAnAccountApiFp(this.configuration).putAccountsAccountIdentifierLogsControlCmbConfig(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
