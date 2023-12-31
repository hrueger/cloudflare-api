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
import { InlineResponse4xx39 } from '../models';
import { InlineResponse4xx40 } from '../models';
import { InlineResponse4xx41 } from '../models';
import { PrefixIdentifierDelegationsBody } from '../models';
import { VmrjA5DJDelegationIdentifier } from '../models';
import { VmrjA5DJIdResponse } from '../models';
import { VmrjA5DJIdentifier } from '../models';
import { VmrjA5DJSchemasResponseCollection } from '../models';
import { VmrjA5DJSchemasSingleResponse } from '../models';
/**
 * IPAddressManagementPrefixDelegationApi - axios parameter creator
 * @export
 */
export const IPAddressManagementPrefixDelegationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new account delegation for a given IP prefix.
         * @summary Create Prefix Delegation
         * @param {PrefixIdentifierDelegationsBody} body 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipAddressManagementPrefixDelegationCreatePrefixDelegation: async (body: PrefixIdentifierDelegationsBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling ipAddressManagementPrefixDelegationCreatePrefixDelegation.');
            }
            // verify required parameter 'prefixIdentifier' is not null or undefined
            if (prefixIdentifier === null || prefixIdentifier === undefined) {
                throw new RequiredError('prefixIdentifier','Required parameter prefixIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationCreatePrefixDelegation.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationCreatePrefixDelegation.');
            }
            const localVarPath = `/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations`
                .replace(`{${"prefix_identifier"}}`, encodeURIComponent(String(prefixIdentifier)))
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
        /**
         * Delete an account delegation for a given IP prefix.
         * @summary Delete Prefix Delegation
         * @param {VmrjA5DJDelegationIdentifier} delegationIdentifier 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipAddressManagementPrefixDelegationDeletePrefixDelegation: async (delegationIdentifier: VmrjA5DJDelegationIdentifier, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'delegationIdentifier' is not null or undefined
            if (delegationIdentifier === null || delegationIdentifier === undefined) {
                throw new RequiredError('delegationIdentifier','Required parameter delegationIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationDeletePrefixDelegation.');
            }
            // verify required parameter 'prefixIdentifier' is not null or undefined
            if (prefixIdentifier === null || prefixIdentifier === undefined) {
                throw new RequiredError('prefixIdentifier','Required parameter prefixIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationDeletePrefixDelegation.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationDeletePrefixDelegation.');
            }
            const localVarPath = `/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations/{delegation_identifier}`
                .replace(`{${"delegation_identifier"}}`, encodeURIComponent(String(delegationIdentifier)))
                .replace(`{${"prefix_identifier"}}`, encodeURIComponent(String(prefixIdentifier)))
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
         * List all delegations for a given account IP prefix.
         * @summary List Prefix Delegations
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipAddressManagementPrefixDelegationListPrefixDelegations: async (prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'prefixIdentifier' is not null or undefined
            if (prefixIdentifier === null || prefixIdentifier === undefined) {
                throw new RequiredError('prefixIdentifier','Required parameter prefixIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationListPrefixDelegations.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling ipAddressManagementPrefixDelegationListPrefixDelegations.');
            }
            const localVarPath = `/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/delegations`
                .replace(`{${"prefix_identifier"}}`, encodeURIComponent(String(prefixIdentifier)))
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
    }
};

/**
 * IPAddressManagementPrefixDelegationApi - functional programming interface
 * @export
 */
export const IPAddressManagementPrefixDelegationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a new account delegation for a given IP prefix.
         * @summary Create Prefix Delegation
         * @param {PrefixIdentifierDelegationsBody} body 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementPrefixDelegationCreatePrefixDelegation(body: PrefixIdentifierDelegationsBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VmrjA5DJSchemasSingleResponse>>> {
            const localVarAxiosArgs = await IPAddressManagementPrefixDelegationApiAxiosParamCreator(configuration).ipAddressManagementPrefixDelegationCreatePrefixDelegation(body, prefixIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete an account delegation for a given IP prefix.
         * @summary Delete Prefix Delegation
         * @param {VmrjA5DJDelegationIdentifier} delegationIdentifier 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementPrefixDelegationDeletePrefixDelegation(delegationIdentifier: VmrjA5DJDelegationIdentifier, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VmrjA5DJIdResponse>>> {
            const localVarAxiosArgs = await IPAddressManagementPrefixDelegationApiAxiosParamCreator(configuration).ipAddressManagementPrefixDelegationDeletePrefixDelegation(delegationIdentifier, prefixIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List all delegations for a given account IP prefix.
         * @summary List Prefix Delegations
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementPrefixDelegationListPrefixDelegations(prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VmrjA5DJSchemasResponseCollection>>> {
            const localVarAxiosArgs = await IPAddressManagementPrefixDelegationApiAxiosParamCreator(configuration).ipAddressManagementPrefixDelegationListPrefixDelegations(prefixIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * IPAddressManagementPrefixDelegationApi - factory interface
 * @export
 */
export const IPAddressManagementPrefixDelegationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a new account delegation for a given IP prefix.
         * @summary Create Prefix Delegation
         * @param {PrefixIdentifierDelegationsBody} body 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementPrefixDelegationCreatePrefixDelegation(body: PrefixIdentifierDelegationsBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<VmrjA5DJSchemasSingleResponse>> {
            return IPAddressManagementPrefixDelegationApiFp(configuration).ipAddressManagementPrefixDelegationCreatePrefixDelegation(body, prefixIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete an account delegation for a given IP prefix.
         * @summary Delete Prefix Delegation
         * @param {VmrjA5DJDelegationIdentifier} delegationIdentifier 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementPrefixDelegationDeletePrefixDelegation(delegationIdentifier: VmrjA5DJDelegationIdentifier, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<VmrjA5DJIdResponse>> {
            return IPAddressManagementPrefixDelegationApiFp(configuration).ipAddressManagementPrefixDelegationDeletePrefixDelegation(delegationIdentifier, prefixIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * List all delegations for a given account IP prefix.
         * @summary List Prefix Delegations
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementPrefixDelegationListPrefixDelegations(prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<VmrjA5DJSchemasResponseCollection>> {
            return IPAddressManagementPrefixDelegationApiFp(configuration).ipAddressManagementPrefixDelegationListPrefixDelegations(prefixIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IPAddressManagementPrefixDelegationApi - object-oriented interface
 * @export
 * @class IPAddressManagementPrefixDelegationApi
 * @extends {BaseAPI}
 */
export class IPAddressManagementPrefixDelegationApi extends BaseAPI {
    /**
     * Create a new account delegation for a given IP prefix.
     * @summary Create Prefix Delegation
     * @param {PrefixIdentifierDelegationsBody} body 
     * @param {VmrjA5DJIdentifier} prefixIdentifier 
     * @param {VmrjA5DJIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressManagementPrefixDelegationApi
     */
    public async ipAddressManagementPrefixDelegationCreatePrefixDelegation(body: PrefixIdentifierDelegationsBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<VmrjA5DJSchemasSingleResponse>> {
        return IPAddressManagementPrefixDelegationApiFp(this.configuration).ipAddressManagementPrefixDelegationCreatePrefixDelegation(body, prefixIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete an account delegation for a given IP prefix.
     * @summary Delete Prefix Delegation
     * @param {VmrjA5DJDelegationIdentifier} delegationIdentifier 
     * @param {VmrjA5DJIdentifier} prefixIdentifier 
     * @param {VmrjA5DJIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressManagementPrefixDelegationApi
     */
    public async ipAddressManagementPrefixDelegationDeletePrefixDelegation(delegationIdentifier: VmrjA5DJDelegationIdentifier, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<VmrjA5DJIdResponse>> {
        return IPAddressManagementPrefixDelegationApiFp(this.configuration).ipAddressManagementPrefixDelegationDeletePrefixDelegation(delegationIdentifier, prefixIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List all delegations for a given account IP prefix.
     * @summary List Prefix Delegations
     * @param {VmrjA5DJIdentifier} prefixIdentifier 
     * @param {VmrjA5DJIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressManagementPrefixDelegationApi
     */
    public async ipAddressManagementPrefixDelegationListPrefixDelegations(prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<VmrjA5DJSchemasResponseCollection>> {
        return IPAddressManagementPrefixDelegationApiFp(this.configuration).ipAddressManagementPrefixDelegationListPrefixDelegations(prefixIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
