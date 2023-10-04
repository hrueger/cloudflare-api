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
import { InlineResponse200105 } from '../models';
import { InlineResponse200106 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * RadarConnectionTamperingApi - axios parameter creator
 * @export
 */
export const RadarConnectionTamperingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Distribution of connection tampering types over a given time period.
         * @summary Get Connection Tampering Summary
         * @param {Array<string>} [name] 
         * @param {Array<string>} [dateRange] 
         * @param {Array<Date>} [dateStart] 
         * @param {Array<Date>} [dateEnd] 
         * @param {Array<string>} [asn] 
         * @param {Array<string>} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        radarGetConnectionTamperingSummary: async (name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/radar/connection_tampering/summary`;
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

            if (name) {
                localVarQueryParameter['name'] = name;
            }

            if (dateRange) {
                localVarQueryParameter['dateRange'] = dateRange;
            }

            if (dateStart) {
                localVarQueryParameter['dateStart'] = dateStart;
            }

            if (dateEnd) {
                localVarQueryParameter['dateEnd'] = dateEnd;
            }

            if (asn) {
                localVarQueryParameter['asn'] = asn;
            }

            if (location) {
                localVarQueryParameter['location'] = location;
            }

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
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
         * Distribution of connection tampering types over time.
         * @summary Get Connection Tampering Time Series
         * @param {string} [aggInterval] 
         * @param {Array<string>} [name] 
         * @param {Array<string>} [dateRange] 
         * @param {Array<Date>} [dateStart] 
         * @param {Array<Date>} [dateEnd] 
         * @param {Array<string>} [asn] 
         * @param {Array<string>} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        radarGetConnectionTamperingTimeseriesGroup: async (aggInterval?: string, name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/radar/connection_tampering/timeseries_groups`;
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

            if (aggInterval !== undefined) {
                localVarQueryParameter['aggInterval'] = aggInterval;
            }

            if (name) {
                localVarQueryParameter['name'] = name;
            }

            if (dateRange) {
                localVarQueryParameter['dateRange'] = dateRange;
            }

            if (dateStart) {
                localVarQueryParameter['dateStart'] = dateStart;
            }

            if (dateEnd) {
                localVarQueryParameter['dateEnd'] = dateEnd;
            }

            if (asn) {
                localVarQueryParameter['asn'] = asn;
            }

            if (location) {
                localVarQueryParameter['location'] = location;
            }

            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
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
 * RadarConnectionTamperingApi - functional programming interface
 * @export
 */
export const RadarConnectionTamperingApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Distribution of connection tampering types over a given time period.
         * @summary Get Connection Tampering Summary
         * @param {Array<string>} [name] 
         * @param {Array<string>} [dateRange] 
         * @param {Array<Date>} [dateStart] 
         * @param {Array<Date>} [dateEnd] 
         * @param {Array<string>} [asn] 
         * @param {Array<string>} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetConnectionTamperingSummary(name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200105>>> {
            const localVarAxiosArgs = await RadarConnectionTamperingApiAxiosParamCreator(configuration).radarGetConnectionTamperingSummary(name, dateRange, dateStart, dateEnd, asn, location, format, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Distribution of connection tampering types over time.
         * @summary Get Connection Tampering Time Series
         * @param {string} [aggInterval] 
         * @param {Array<string>} [name] 
         * @param {Array<string>} [dateRange] 
         * @param {Array<Date>} [dateStart] 
         * @param {Array<Date>} [dateEnd] 
         * @param {Array<string>} [asn] 
         * @param {Array<string>} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetConnectionTamperingTimeseriesGroup(aggInterval?: string, name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200106>>> {
            const localVarAxiosArgs = await RadarConnectionTamperingApiAxiosParamCreator(configuration).radarGetConnectionTamperingTimeseriesGroup(aggInterval, name, dateRange, dateStart, dateEnd, asn, location, format, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RadarConnectionTamperingApi - factory interface
 * @export
 */
export const RadarConnectionTamperingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Distribution of connection tampering types over a given time period.
         * @summary Get Connection Tampering Summary
         * @param {Array<string>} [name] 
         * @param {Array<string>} [dateRange] 
         * @param {Array<Date>} [dateStart] 
         * @param {Array<Date>} [dateEnd] 
         * @param {Array<string>} [asn] 
         * @param {Array<string>} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetConnectionTamperingSummary(name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200105>> {
            return RadarConnectionTamperingApiFp(configuration).radarGetConnectionTamperingSummary(name, dateRange, dateStart, dateEnd, asn, location, format, options).then((request) => request(axios, basePath));
        },
        /**
         * Distribution of connection tampering types over time.
         * @summary Get Connection Tampering Time Series
         * @param {string} [aggInterval] 
         * @param {Array<string>} [name] 
         * @param {Array<string>} [dateRange] 
         * @param {Array<Date>} [dateStart] 
         * @param {Array<Date>} [dateEnd] 
         * @param {Array<string>} [asn] 
         * @param {Array<string>} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetConnectionTamperingTimeseriesGroup(aggInterval?: string, name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200106>> {
            return RadarConnectionTamperingApiFp(configuration).radarGetConnectionTamperingTimeseriesGroup(aggInterval, name, dateRange, dateStart, dateEnd, asn, location, format, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RadarConnectionTamperingApi - object-oriented interface
 * @export
 * @class RadarConnectionTamperingApi
 * @extends {BaseAPI}
 */
export class RadarConnectionTamperingApi extends BaseAPI {
    /**
     * Distribution of connection tampering types over a given time period.
     * @summary Get Connection Tampering Summary
     * @param {Array<string>} [name] 
     * @param {Array<string>} [dateRange] 
     * @param {Array<Date>} [dateStart] 
     * @param {Array<Date>} [dateEnd] 
     * @param {Array<string>} [asn] 
     * @param {Array<string>} [location] 
     * @param {string} [format] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RadarConnectionTamperingApi
     */
    public async radarGetConnectionTamperingSummary(name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200105>> {
        return RadarConnectionTamperingApiFp(this.configuration).radarGetConnectionTamperingSummary(name, dateRange, dateStart, dateEnd, asn, location, format, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Distribution of connection tampering types over time.
     * @summary Get Connection Tampering Time Series
     * @param {string} [aggInterval] 
     * @param {Array<string>} [name] 
     * @param {Array<string>} [dateRange] 
     * @param {Array<Date>} [dateStart] 
     * @param {Array<Date>} [dateEnd] 
     * @param {Array<string>} [asn] 
     * @param {Array<string>} [location] 
     * @param {string} [format] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RadarConnectionTamperingApi
     */
    public async radarGetConnectionTamperingTimeseriesGroup(aggInterval?: string, name?: Array<string>, dateRange?: Array<string>, dateStart?: Array<Date>, dateEnd?: Array<Date>, asn?: Array<string>, location?: Array<string>, format?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200106>> {
        return RadarConnectionTamperingApiFp(this.configuration).radarGetConnectionTamperingTimeseriesGroup(aggInterval, name, dateRange, dateStart, dateEnd, asn, location, format, options).then((request) => request(this.axios, this.basePath));
    }
}