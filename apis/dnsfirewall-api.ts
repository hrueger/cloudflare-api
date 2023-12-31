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
import { AccountIdentifierDnsFirewallBody } from '../models';
import { InlineResponse20029 } from '../models';
import { InlineResponse4XX123 } from '../models';
import { InlineResponse4XX124 } from '../models';
import { InlineResponse4XX125 } from '../models';
import { Model8INyb3jSDnsFirewallResponseCollection } from '../models';
import { Model8INyb3jSDnsFirewallSingleResponse } from '../models';
import { Model8INyb3jSIdentifier } from '../models';
import { Model8INyb3jSSchemasDnsFirewall } from '../models';
/**
 * DNSFirewallApi - axios parameter creator
 * @export
 */
export const DNSFirewallApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a configured DNS Firewall Cluster.
         * @summary Create DNS Firewall Cluster
         * @param {AccountIdentifierDnsFirewallBody} body 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallCreateDnsFirewallCluster: async (body: AccountIdentifierDnsFirewallBody, accountIdentifier: Model8INyb3jSIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling dnsFirewallCreateDnsFirewallCluster.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallCreateDnsFirewallCluster.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall`
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
         * Delete a configured DNS Firewall Cluster.
         * @summary Delete DNS Firewall Cluster
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallDeleteDnsFirewallCluster: async (identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling dnsFirewallDeleteDnsFirewallCluster.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallDeleteDnsFirewallCluster.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
         * Show a single configured DNS Firewall cluster for an account.
         * @summary DNS Firewall Cluster Details
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallDnsFirewallClusterDetails: async (identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling dnsFirewallDnsFirewallClusterDetails.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallDnsFirewallClusterDetails.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
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
         * List configured DNS Firewall clusters for an account.
         * @summary List DNS Firewall Clusters
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallListDnsFirewallClusters: async (accountIdentifier: Model8INyb3jSIdentifier, page?: number, perPage?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallListDnsFirewallClusters.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall`
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

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (perPage !== undefined) {
                localVarQueryParameter['per_page'] = perPage;
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
         * Modify a DNS Firewall Cluster configuration.
         * @summary Update DNS Firewall Cluster
         * @param {Model8INyb3jSSchemasDnsFirewall} body 
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallUpdateDnsFirewallCluster: async (body: Model8INyb3jSSchemasDnsFirewall, identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling dnsFirewallUpdateDnsFirewallCluster.');
            }
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling dnsFirewallUpdateDnsFirewallCluster.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallUpdateDnsFirewallCluster.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall/{identifier}`
                .replace(`{${"identifier"}}`, encodeURIComponent(String(identifier)))
                .replace(`{${"account_identifier"}}`, encodeURIComponent(String(accountIdentifier)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
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
 * DNSFirewallApi - functional programming interface
 * @export
 */
export const DNSFirewallApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Create a configured DNS Firewall Cluster.
         * @summary Create DNS Firewall Cluster
         * @param {AccountIdentifierDnsFirewallBody} body 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallCreateDnsFirewallCluster(body: AccountIdentifierDnsFirewallBody, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>>> {
            const localVarAxiosArgs = await DNSFirewallApiAxiosParamCreator(configuration).dnsFirewallCreateDnsFirewallCluster(body, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Delete a configured DNS Firewall Cluster.
         * @summary Delete DNS Firewall Cluster
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallDeleteDnsFirewallCluster(identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20029>>> {
            const localVarAxiosArgs = await DNSFirewallApiAxiosParamCreator(configuration).dnsFirewallDeleteDnsFirewallCluster(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Show a single configured DNS Firewall cluster for an account.
         * @summary DNS Firewall Cluster Details
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallDnsFirewallClusterDetails(identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>>> {
            const localVarAxiosArgs = await DNSFirewallApiAxiosParamCreator(configuration).dnsFirewallDnsFirewallClusterDetails(identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * List configured DNS Firewall clusters for an account.
         * @summary List DNS Firewall Clusters
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallListDnsFirewallClusters(accountIdentifier: Model8INyb3jSIdentifier, page?: number, perPage?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model8INyb3jSDnsFirewallResponseCollection>>> {
            const localVarAxiosArgs = await DNSFirewallApiAxiosParamCreator(configuration).dnsFirewallListDnsFirewallClusters(accountIdentifier, page, perPage, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Modify a DNS Firewall Cluster configuration.
         * @summary Update DNS Firewall Cluster
         * @param {Model8INyb3jSSchemasDnsFirewall} body 
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallUpdateDnsFirewallCluster(body: Model8INyb3jSSchemasDnsFirewall, identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>>> {
            const localVarAxiosArgs = await DNSFirewallApiAxiosParamCreator(configuration).dnsFirewallUpdateDnsFirewallCluster(body, identifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DNSFirewallApi - factory interface
 * @export
 */
export const DNSFirewallApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Create a configured DNS Firewall Cluster.
         * @summary Create DNS Firewall Cluster
         * @param {AccountIdentifierDnsFirewallBody} body 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallCreateDnsFirewallCluster(body: AccountIdentifierDnsFirewallBody, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>> {
            return DNSFirewallApiFp(configuration).dnsFirewallCreateDnsFirewallCluster(body, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Delete a configured DNS Firewall Cluster.
         * @summary Delete DNS Firewall Cluster
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallDeleteDnsFirewallCluster(identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20029>> {
            return DNSFirewallApiFp(configuration).dnsFirewallDeleteDnsFirewallCluster(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Show a single configured DNS Firewall cluster for an account.
         * @summary DNS Firewall Cluster Details
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallDnsFirewallClusterDetails(identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>> {
            return DNSFirewallApiFp(configuration).dnsFirewallDnsFirewallClusterDetails(identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * List configured DNS Firewall clusters for an account.
         * @summary List DNS Firewall Clusters
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {number} [page] 
         * @param {number} [perPage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallListDnsFirewallClusters(accountIdentifier: Model8INyb3jSIdentifier, page?: number, perPage?: number, options?: AxiosRequestConfig): Promise<AxiosResponse<Model8INyb3jSDnsFirewallResponseCollection>> {
            return DNSFirewallApiFp(configuration).dnsFirewallListDnsFirewallClusters(accountIdentifier, page, perPage, options).then((request) => request(axios, basePath));
        },
        /**
         * Modify a DNS Firewall Cluster configuration.
         * @summary Update DNS Firewall Cluster
         * @param {Model8INyb3jSSchemasDnsFirewall} body 
         * @param {Model8INyb3jSIdentifier} identifier 
         * @param {Model8INyb3jSIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallUpdateDnsFirewallCluster(body: Model8INyb3jSSchemasDnsFirewall, identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>> {
            return DNSFirewallApiFp(configuration).dnsFirewallUpdateDnsFirewallCluster(body, identifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DNSFirewallApi - object-oriented interface
 * @export
 * @class DNSFirewallApi
 * @extends {BaseAPI}
 */
export class DNSFirewallApi extends BaseAPI {
    /**
     * Create a configured DNS Firewall Cluster.
     * @summary Create DNS Firewall Cluster
     * @param {AccountIdentifierDnsFirewallBody} body 
     * @param {Model8INyb3jSIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallApi
     */
    public async dnsFirewallCreateDnsFirewallCluster(body: AccountIdentifierDnsFirewallBody, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>> {
        return DNSFirewallApiFp(this.configuration).dnsFirewallCreateDnsFirewallCluster(body, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Delete a configured DNS Firewall Cluster.
     * @summary Delete DNS Firewall Cluster
     * @param {Model8INyb3jSIdentifier} identifier 
     * @param {Model8INyb3jSIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallApi
     */
    public async dnsFirewallDeleteDnsFirewallCluster(identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20029>> {
        return DNSFirewallApiFp(this.configuration).dnsFirewallDeleteDnsFirewallCluster(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Show a single configured DNS Firewall cluster for an account.
     * @summary DNS Firewall Cluster Details
     * @param {Model8INyb3jSIdentifier} identifier 
     * @param {Model8INyb3jSIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallApi
     */
    public async dnsFirewallDnsFirewallClusterDetails(identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>> {
        return DNSFirewallApiFp(this.configuration).dnsFirewallDnsFirewallClusterDetails(identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * List configured DNS Firewall clusters for an account.
     * @summary List DNS Firewall Clusters
     * @param {Model8INyb3jSIdentifier} accountIdentifier 
     * @param {number} [page] 
     * @param {number} [perPage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallApi
     */
    public async dnsFirewallListDnsFirewallClusters(accountIdentifier: Model8INyb3jSIdentifier, page?: number, perPage?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model8INyb3jSDnsFirewallResponseCollection>> {
        return DNSFirewallApiFp(this.configuration).dnsFirewallListDnsFirewallClusters(accountIdentifier, page, perPage, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Modify a DNS Firewall Cluster configuration.
     * @summary Update DNS Firewall Cluster
     * @param {Model8INyb3jSSchemasDnsFirewall} body 
     * @param {Model8INyb3jSIdentifier} identifier 
     * @param {Model8INyb3jSIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallApi
     */
    public async dnsFirewallUpdateDnsFirewallCluster(body: Model8INyb3jSSchemasDnsFirewall, identifier: Model8INyb3jSIdentifier, accountIdentifier: Model8INyb3jSIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<Model8INyb3jSDnsFirewallSingleResponse>> {
        return DNSFirewallApiFp(this.configuration).dnsFirewallUpdateDnsFirewallCluster(body, identifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
