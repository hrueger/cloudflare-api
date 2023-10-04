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
import { InlineResponse200189 } from '../models';
import { InlineResponse4XX339 } from '../models';
import { Query1 } from '../models';
import { WorkersKvIdentifier } from '../models';
/**
 * WorkersKVStoredDataAnalyticsApi - axios parameter creator
 * @export
 */
export const WorkersKVStoredDataAnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves Workers KV stored data metrics for the given account.
         * @summary Query Stored Data Analytics
         * @param {WorkersKvIdentifier} accountIdentifier 
         * @param {Query1} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        workersKvStoredDataAnalyticsQueryStoredDataAnalytics: async (accountIdentifier: WorkersKvIdentifier, query?: Query1, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling workersKvStoredDataAnalyticsQueryStoredDataAnalytics.');
            }
            const localVarPath = `/accounts/{account_identifier}/storage/analytics/stored`
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

            if (query !== undefined) {
                localVarQueryParameter['query'] = query;
            }

            const q = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                q.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                q.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(q)).toString();
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
 * WorkersKVStoredDataAnalyticsApi - functional programming interface
 * @export
 */
export const WorkersKVStoredDataAnalyticsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves Workers KV stored data metrics for the given account.
         * @summary Query Stored Data Analytics
         * @param {WorkersKvIdentifier} accountIdentifier 
         * @param {Query1} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workersKvStoredDataAnalyticsQueryStoredDataAnalytics(accountIdentifier: WorkersKvIdentifier, query?: Query1, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200189>>> {
            const localVarAxiosArgs = await WorkersKVStoredDataAnalyticsApiAxiosParamCreator(configuration).workersKvStoredDataAnalyticsQueryStoredDataAnalytics(accountIdentifier, query, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * WorkersKVStoredDataAnalyticsApi - factory interface
 * @export
 */
export const WorkersKVStoredDataAnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves Workers KV stored data metrics for the given account.
         * @summary Query Stored Data Analytics
         * @param {WorkersKvIdentifier} accountIdentifier 
         * @param {Query1} [query] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async workersKvStoredDataAnalyticsQueryStoredDataAnalytics(accountIdentifier: WorkersKvIdentifier, query?: Query1, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200189>> {
            return WorkersKVStoredDataAnalyticsApiFp(configuration).workersKvStoredDataAnalyticsQueryStoredDataAnalytics(accountIdentifier, query, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WorkersKVStoredDataAnalyticsApi - object-oriented interface
 * @export
 * @class WorkersKVStoredDataAnalyticsApi
 * @extends {BaseAPI}
 */
export class WorkersKVStoredDataAnalyticsApi extends BaseAPI {
    /**
     * Retrieves Workers KV stored data metrics for the given account.
     * @summary Query Stored Data Analytics
     * @param {WorkersKvIdentifier} accountIdentifier 
     * @param {Query1} [query] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WorkersKVStoredDataAnalyticsApi
     */
    public async workersKvStoredDataAnalyticsQueryStoredDataAnalytics(accountIdentifier: WorkersKvIdentifier, query?: Query1, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200189>> {
        return WorkersKVStoredDataAnalyticsApiFp(this.configuration).workersKvStoredDataAnalyticsQueryStoredDataAnalytics(accountIdentifier, query, options).then((request) => request(this.axios, this.basePath));
    }
}
