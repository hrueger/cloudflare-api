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
import { EfAwNWy9Dimensions } from '../models';
import { EfAwNWy9Filters } from '../models';
import { EfAwNWy9Identifier } from '../models';
import { EfAwNWy9Limit } from '../models';
import { EfAwNWy9Metrics } from '../models';
import { EfAwNWy9Since } from '../models';
import { EfAwNWy9Sort } from '../models';
import { EfAwNWy9TimeDelta } from '../models';
import { EfAwNWy9Until } from '../models';
import { InlineResponse20027 } from '../models';
import { InlineResponse20028 } from '../models';
import { InlineResponse4XX121 } from '../models';
import { InlineResponse4XX122 } from '../models';
/**
 * DNSFirewallAnalyticsApi - axios parameter creator
 * @export
 */
export const DNSFirewallAnalyticsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of aggregate metrics grouped by time interval.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
         * @summary By Time
         * @param {EfAwNWy9Identifier} identifier 
         * @param {EfAwNWy9Identifier} accountIdentifier 
         * @param {EfAwNWy9Metrics} [metrics] 
         * @param {EfAwNWy9Dimensions} [dimensions] 
         * @param {EfAwNWy9Since} [since] 
         * @param {EfAwNWy9Until} [until] 
         * @param {EfAwNWy9Limit} [limit] 
         * @param {EfAwNWy9Sort} [sort] 
         * @param {EfAwNWy9Filters} [filters] 
         * @param {EfAwNWy9TimeDelta} [timeDelta] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallAnalyticsByTime: async (identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, timeDelta?: EfAwNWy9TimeDelta, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling dnsFirewallAnalyticsByTime.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallAnalyticsByTime.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report/bytime`
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

            if (metrics !== undefined) {
                localVarQueryParameter['metrics'] = metrics;
            }

            if (dimensions !== undefined) {
                localVarQueryParameter['dimensions'] = dimensions;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = since;
            }

            if (until !== undefined) {
                localVarQueryParameter['until'] = until;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (timeDelta !== undefined) {
                localVarQueryParameter['time_delta'] = timeDelta;
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
         * Retrieves a list of summarised aggregate metrics over a given time period.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
         * @summary Table
         * @param {EfAwNWy9Identifier} identifier 
         * @param {EfAwNWy9Identifier} accountIdentifier 
         * @param {EfAwNWy9Metrics} [metrics] 
         * @param {EfAwNWy9Dimensions} [dimensions] 
         * @param {EfAwNWy9Since} [since] 
         * @param {EfAwNWy9Until} [until] 
         * @param {EfAwNWy9Limit} [limit] 
         * @param {EfAwNWy9Sort} [sort] 
         * @param {EfAwNWy9Filters} [filters] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        dnsFirewallAnalyticsTable: async (identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'identifier' is not null or undefined
            if (identifier === null || identifier === undefined) {
                throw new RequiredError('identifier','Required parameter identifier was null or undefined when calling dnsFirewallAnalyticsTable.');
            }
            // verify required parameter 'accountIdentifier' is not null or undefined
            if (accountIdentifier === null || accountIdentifier === undefined) {
                throw new RequiredError('accountIdentifier','Required parameter accountIdentifier was null or undefined when calling dnsFirewallAnalyticsTable.');
            }
            const localVarPath = `/accounts/{account_identifier}/dns_firewall/{identifier}/dns_analytics/report`
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

            if (metrics !== undefined) {
                localVarQueryParameter['metrics'] = metrics;
            }

            if (dimensions !== undefined) {
                localVarQueryParameter['dimensions'] = dimensions;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = since;
            }

            if (until !== undefined) {
                localVarQueryParameter['until'] = until;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
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
 * DNSFirewallAnalyticsApi - functional programming interface
 * @export
 */
export const DNSFirewallAnalyticsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of aggregate metrics grouped by time interval.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
         * @summary By Time
         * @param {EfAwNWy9Identifier} identifier 
         * @param {EfAwNWy9Identifier} accountIdentifier 
         * @param {EfAwNWy9Metrics} [metrics] 
         * @param {EfAwNWy9Dimensions} [dimensions] 
         * @param {EfAwNWy9Since} [since] 
         * @param {EfAwNWy9Until} [until] 
         * @param {EfAwNWy9Limit} [limit] 
         * @param {EfAwNWy9Sort} [sort] 
         * @param {EfAwNWy9Filters} [filters] 
         * @param {EfAwNWy9TimeDelta} [timeDelta] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallAnalyticsByTime(identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, timeDelta?: EfAwNWy9TimeDelta, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20028>>> {
            const localVarAxiosArgs = await DNSFirewallAnalyticsApiAxiosParamCreator(configuration).dnsFirewallAnalyticsByTime(identifier, accountIdentifier, metrics, dimensions, since, until, limit, sort, filters, timeDelta, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Retrieves a list of summarised aggregate metrics over a given time period.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
         * @summary Table
         * @param {EfAwNWy9Identifier} identifier 
         * @param {EfAwNWy9Identifier} accountIdentifier 
         * @param {EfAwNWy9Metrics} [metrics] 
         * @param {EfAwNWy9Dimensions} [dimensions] 
         * @param {EfAwNWy9Since} [since] 
         * @param {EfAwNWy9Until} [until] 
         * @param {EfAwNWy9Limit} [limit] 
         * @param {EfAwNWy9Sort} [sort] 
         * @param {EfAwNWy9Filters} [filters] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallAnalyticsTable(identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20027>>> {
            const localVarAxiosArgs = await DNSFirewallAnalyticsApiAxiosParamCreator(configuration).dnsFirewallAnalyticsTable(identifier, accountIdentifier, metrics, dimensions, since, until, limit, sort, filters, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DNSFirewallAnalyticsApi - factory interface
 * @export
 */
export const DNSFirewallAnalyticsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a list of aggregate metrics grouped by time interval.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
         * @summary By Time
         * @param {EfAwNWy9Identifier} identifier 
         * @param {EfAwNWy9Identifier} accountIdentifier 
         * @param {EfAwNWy9Metrics} [metrics] 
         * @param {EfAwNWy9Dimensions} [dimensions] 
         * @param {EfAwNWy9Since} [since] 
         * @param {EfAwNWy9Until} [until] 
         * @param {EfAwNWy9Limit} [limit] 
         * @param {EfAwNWy9Sort} [sort] 
         * @param {EfAwNWy9Filters} [filters] 
         * @param {EfAwNWy9TimeDelta} [timeDelta] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallAnalyticsByTime(identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, timeDelta?: EfAwNWy9TimeDelta, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20028>> {
            return DNSFirewallAnalyticsApiFp(configuration).dnsFirewallAnalyticsByTime(identifier, accountIdentifier, metrics, dimensions, since, until, limit, sort, filters, timeDelta, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a list of summarised aggregate metrics over a given time period.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
         * @summary Table
         * @param {EfAwNWy9Identifier} identifier 
         * @param {EfAwNWy9Identifier} accountIdentifier 
         * @param {EfAwNWy9Metrics} [metrics] 
         * @param {EfAwNWy9Dimensions} [dimensions] 
         * @param {EfAwNWy9Since} [since] 
         * @param {EfAwNWy9Until} [until] 
         * @param {EfAwNWy9Limit} [limit] 
         * @param {EfAwNWy9Sort} [sort] 
         * @param {EfAwNWy9Filters} [filters] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async dnsFirewallAnalyticsTable(identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20027>> {
            return DNSFirewallAnalyticsApiFp(configuration).dnsFirewallAnalyticsTable(identifier, accountIdentifier, metrics, dimensions, since, until, limit, sort, filters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DNSFirewallAnalyticsApi - object-oriented interface
 * @export
 * @class DNSFirewallAnalyticsApi
 * @extends {BaseAPI}
 */
export class DNSFirewallAnalyticsApi extends BaseAPI {
    /**
     * Retrieves a list of aggregate metrics grouped by time interval.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
     * @summary By Time
     * @param {EfAwNWy9Identifier} identifier 
     * @param {EfAwNWy9Identifier} accountIdentifier 
     * @param {EfAwNWy9Metrics} [metrics] 
     * @param {EfAwNWy9Dimensions} [dimensions] 
     * @param {EfAwNWy9Since} [since] 
     * @param {EfAwNWy9Until} [until] 
     * @param {EfAwNWy9Limit} [limit] 
     * @param {EfAwNWy9Sort} [sort] 
     * @param {EfAwNWy9Filters} [filters] 
     * @param {EfAwNWy9TimeDelta} [timeDelta] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallAnalyticsApi
     */
    public async dnsFirewallAnalyticsByTime(identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, timeDelta?: EfAwNWy9TimeDelta, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20028>> {
        return DNSFirewallAnalyticsApiFp(this.configuration).dnsFirewallAnalyticsByTime(identifier, accountIdentifier, metrics, dimensions, since, until, limit, sort, filters, timeDelta, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Retrieves a list of summarised aggregate metrics over a given time period.  See [Analytics API properties](https://developers.cloudflare.com/dns/reference/analytics-api-properties/) for detailed information about the available query parameters.
     * @summary Table
     * @param {EfAwNWy9Identifier} identifier 
     * @param {EfAwNWy9Identifier} accountIdentifier 
     * @param {EfAwNWy9Metrics} [metrics] 
     * @param {EfAwNWy9Dimensions} [dimensions] 
     * @param {EfAwNWy9Since} [since] 
     * @param {EfAwNWy9Until} [until] 
     * @param {EfAwNWy9Limit} [limit] 
     * @param {EfAwNWy9Sort} [sort] 
     * @param {EfAwNWy9Filters} [filters] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DNSFirewallAnalyticsApi
     */
    public async dnsFirewallAnalyticsTable(identifier: EfAwNWy9Identifier, accountIdentifier: EfAwNWy9Identifier, metrics?: EfAwNWy9Metrics, dimensions?: EfAwNWy9Dimensions, since?: EfAwNWy9Since, until?: EfAwNWy9Until, limit?: EfAwNWy9Limit, sort?: EfAwNWy9Sort, filters?: EfAwNWy9Filters, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20027>> {
        return DNSFirewallAnalyticsApiFp(this.configuration).dnsFirewallAnalyticsTable(identifier, accountIdentifier, metrics, dimensions, since, until, limit, sort, filters, options).then((request) => request(this.axios, this.basePath));
    }
}
