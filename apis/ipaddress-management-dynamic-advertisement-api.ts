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
import { BgpStatusBody } from '../models';
import { InlineResponse4xx38 } from '../models';
import { VmrjA5DJAdvertisedResponse } from '../models';
import { VmrjA5DJIdentifier } from '../models';
/**
 * IPAddressManagementDynamicAdvertisementApi - axios parameter creator
 * @export
 */
export const IPAddressManagementDynamicAdvertisementApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List the current advertisement state for a prefix.
         * @summary Get Advertisement Status
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipAddressManagementDynamicAdvertisementGetAdvertisementStatus: async (prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'prefixIdentifier' is not null or undefined
            if (prefixIdentifier === null || prefixIdentifier === undefined) {
                throw new RequiredError('prefixIdentifier','Required parameter prefixIdentifier was null or undefined when calling ipAddressManagementDynamicAdvertisementGetAdvertisementStatus.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling ipAddressManagementDynamicAdvertisementGetAdvertisementStatus.');
            }
            const localVarPath = `/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/status`
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
        /**
         * Advertise or withdraw BGP route for a prefix.
         * @summary Update Prefix Dynamic Advertisement Status
         * @param {BgpStatusBody} body 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus: async (body: BgpStatusBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus.');
            }
            // verify required parameter 'prefixIdentifier' is not null or undefined
            if (prefixIdentifier === null || prefixIdentifier === undefined) {
                throw new RequiredError('prefixIdentifier','Required parameter prefixIdentifier was null or undefined when calling ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus.');
            }
            const localVarPath = `/accounts/{account_identifier}/addressing/prefixes/{prefix_identifier}/bgp/status`
                .replace(`{${"prefix_identifier"}}`, encodeURIComponent(String(prefixIdentifier)))
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
 * IPAddressManagementDynamicAdvertisementApi - functional programming interface
 * @export
 */
export const IPAddressManagementDynamicAdvertisementApiFp = function(configuration?: Configuration) {
    return {
        /**
         * List the current advertisement state for a prefix.
         * @summary Get Advertisement Status
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VmrjA5DJAdvertisedResponse>>> {
            const localVarAxiosArgs = await IPAddressManagementDynamicAdvertisementApiAxiosParamCreator(configuration).ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(prefixIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Advertise or withdraw BGP route for a prefix.
         * @summary Update Prefix Dynamic Advertisement Status
         * @param {BgpStatusBody} body 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(body: BgpStatusBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VmrjA5DJAdvertisedResponse>>> {
            const localVarAxiosArgs = await IPAddressManagementDynamicAdvertisementApiAxiosParamCreator(configuration).ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(body, prefixIdentifier, accountIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * IPAddressManagementDynamicAdvertisementApi - factory interface
 * @export
 */
export const IPAddressManagementDynamicAdvertisementApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * List the current advertisement state for a prefix.
         * @summary Get Advertisement Status
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<VmrjA5DJAdvertisedResponse>> {
            return IPAddressManagementDynamicAdvertisementApiFp(configuration).ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(prefixIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Advertise or withdraw BGP route for a prefix.
         * @summary Update Prefix Dynamic Advertisement Status
         * @param {BgpStatusBody} body 
         * @param {VmrjA5DJIdentifier} prefixIdentifier 
         * @param {VmrjA5DJIdentifier} accountIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(body: BgpStatusBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<VmrjA5DJAdvertisedResponse>> {
            return IPAddressManagementDynamicAdvertisementApiFp(configuration).ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(body, prefixIdentifier, accountIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * IPAddressManagementDynamicAdvertisementApi - object-oriented interface
 * @export
 * @class IPAddressManagementDynamicAdvertisementApi
 * @extends {BaseAPI}
 */
export class IPAddressManagementDynamicAdvertisementApi extends BaseAPI {
    /**
     * List the current advertisement state for a prefix.
     * @summary Get Advertisement Status
     * @param {VmrjA5DJIdentifier} prefixIdentifier 
     * @param {VmrjA5DJIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressManagementDynamicAdvertisementApi
     */
    public async ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<VmrjA5DJAdvertisedResponse>> {
        return IPAddressManagementDynamicAdvertisementApiFp(this.configuration).ipAddressManagementDynamicAdvertisementGetAdvertisementStatus(prefixIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Advertise or withdraw BGP route for a prefix.
     * @summary Update Prefix Dynamic Advertisement Status
     * @param {BgpStatusBody} body 
     * @param {VmrjA5DJIdentifier} prefixIdentifier 
     * @param {VmrjA5DJIdentifier} accountIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof IPAddressManagementDynamicAdvertisementApi
     */
    public async ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(body: BgpStatusBody, prefixIdentifier: VmrjA5DJIdentifier, accountIdentifier: VmrjA5DJIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<VmrjA5DJAdvertisedResponse>> {
        return IPAddressManagementDynamicAdvertisementApiFp(this.configuration).ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus(body, prefixIdentifier, accountIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
