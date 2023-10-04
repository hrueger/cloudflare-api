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
import { C4f8RoOSApiResponseSingle } from '../models';
import { C4f8RoOSCommonComponentsSchemasIdentifier } from '../models';
import { C4f8RoOSDimensions } from '../models';
import { C4f8RoOSSchemasUntil } from '../models';
import { C4f8RoOSSort } from '../models';
import { InlineResponse4xx76 } from '../models';
/**
 * SpectrumAnalyticsByTimeApi - axios parameter creator
 * @export
 */
export const SpectrumAnalyticsByTimeApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of aggregate metrics grouped by time interval.
         * @summary Get analytics by time
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {C4f8RoOSDimensions} [dimensions] 
         * @param {C4f8RoOSSort} [sort] 
         * @param {C4f8RoOSSchemasUntil} [until] 
         * @param {Array<string>} [metrics] 
         * @param {string} [filters] 
         * @param {Date} [since] 
         * @param {string} [timeDelta] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        spectrumAnalyticsByTimeGetAnalyticsByTime: async (zone: C4f8RoOSCommonComponentsSchemasIdentifier, dimensions?: C4f8RoOSDimensions, sort?: C4f8RoOSSort, until?: C4f8RoOSSchemasUntil, metrics?: Array<string>, filters?: string, since?: Date, timeDelta?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zone' is not null or undefined
            if (zone === null || zone === undefined) {
                throw new RequiredError('zone','Required parameter zone was null or undefined when calling spectrumAnalyticsByTimeGetAnalyticsByTime.');
            }
            const localVarPath = `/zones/{zone}/spectrum/analytics/events/bytime`
                .replace(`{${"zone"}}`, encodeURIComponent(String(zone)));
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

            if (dimensions !== undefined) {
                localVarQueryParameter['dimensions'] = dimensions;
            }

            if (sort !== undefined) {
                localVarQueryParameter['sort'] = sort;
            }

            if (until !== undefined) {
                localVarQueryParameter['until'] = until;
            }

            if (metrics) {
                localVarQueryParameter['metrics'] = metrics;
            }

            if (filters !== undefined) {
                localVarQueryParameter['filters'] = filters;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
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
    }
};

/**
 * SpectrumAnalyticsByTimeApi - functional programming interface
 * @export
 */
export const SpectrumAnalyticsByTimeApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Retrieves a list of aggregate metrics grouped by time interval.
         * @summary Get analytics by time
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {C4f8RoOSDimensions} [dimensions] 
         * @param {C4f8RoOSSort} [sort] 
         * @param {C4f8RoOSSchemasUntil} [until] 
         * @param {Array<string>} [metrics] 
         * @param {string} [filters] 
         * @param {Date} [since] 
         * @param {string} [timeDelta] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumAnalyticsByTimeGetAnalyticsByTime(zone: C4f8RoOSCommonComponentsSchemasIdentifier, dimensions?: C4f8RoOSDimensions, sort?: C4f8RoOSSort, until?: C4f8RoOSSchemasUntil, metrics?: Array<string>, filters?: string, since?: Date, timeDelta?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<C4f8RoOSApiResponseSingle>>> {
            const localVarAxiosArgs = await SpectrumAnalyticsByTimeApiAxiosParamCreator(configuration).spectrumAnalyticsByTimeGetAnalyticsByTime(zone, dimensions, sort, until, metrics, filters, since, timeDelta, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SpectrumAnalyticsByTimeApi - factory interface
 * @export
 */
export const SpectrumAnalyticsByTimeApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Retrieves a list of aggregate metrics grouped by time interval.
         * @summary Get analytics by time
         * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
         * @param {C4f8RoOSDimensions} [dimensions] 
         * @param {C4f8RoOSSort} [sort] 
         * @param {C4f8RoOSSchemasUntil} [until] 
         * @param {Array<string>} [metrics] 
         * @param {string} [filters] 
         * @param {Date} [since] 
         * @param {string} [timeDelta] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async spectrumAnalyticsByTimeGetAnalyticsByTime(zone: C4f8RoOSCommonComponentsSchemasIdentifier, dimensions?: C4f8RoOSDimensions, sort?: C4f8RoOSSort, until?: C4f8RoOSSchemasUntil, metrics?: Array<string>, filters?: string, since?: Date, timeDelta?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<C4f8RoOSApiResponseSingle>> {
            return SpectrumAnalyticsByTimeApiFp(configuration).spectrumAnalyticsByTimeGetAnalyticsByTime(zone, dimensions, sort, until, metrics, filters, since, timeDelta, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SpectrumAnalyticsByTimeApi - object-oriented interface
 * @export
 * @class SpectrumAnalyticsByTimeApi
 * @extends {BaseAPI}
 */
export class SpectrumAnalyticsByTimeApi extends BaseAPI {
    /**
     * Retrieves a list of aggregate metrics grouped by time interval.
     * @summary Get analytics by time
     * @param {C4f8RoOSCommonComponentsSchemasIdentifier} zone 
     * @param {C4f8RoOSDimensions} [dimensions] 
     * @param {C4f8RoOSSort} [sort] 
     * @param {C4f8RoOSSchemasUntil} [until] 
     * @param {Array<string>} [metrics] 
     * @param {string} [filters] 
     * @param {Date} [since] 
     * @param {string} [timeDelta] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SpectrumAnalyticsByTimeApi
     */
    public async spectrumAnalyticsByTimeGetAnalyticsByTime(zone: C4f8RoOSCommonComponentsSchemasIdentifier, dimensions?: C4f8RoOSDimensions, sort?: C4f8RoOSSort, until?: C4f8RoOSSchemasUntil, metrics?: Array<string>, filters?: string, since?: Date, timeDelta?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<C4f8RoOSApiResponseSingle>> {
        return SpectrumAnalyticsByTimeApiFp(this.configuration).spectrumAnalyticsByTimeGetAnalyticsByTime(zone, dimensions, sort, until, metrics, filters, since, timeDelta, options).then((request) => request(this.axios, this.basePath));
    }
}