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
import { InlineResponse20072 } from '../models';
import { InlineResponse20073 } from '../models';
import { InlineResponse400 } from '../models';
/**
 * RadarAnnotationsApi - axios parameter creator
 * @export
 */
export const RadarAnnotationsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get latest Internet outages and anomalies.
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [dateRange] 
         * @param {Date} [dateStart] 
         * @param {Date} [dateEnd] 
         * @param {number} [asn] 
         * @param {string} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        radarGetAnnotationsOutages: async (limit?: number, offset?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, asn?: number, location?: string, format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/radar/annotations/outages`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (dateRange !== undefined) {
                localVarQueryParameter['dateRange'] = dateRange;
            }

            if (dateStart !== undefined) {
                localVarQueryParameter['dateStart'] = (dateStart as any instanceof Date) ?
                    (dateStart as any).toISOString() :
                    dateStart;
            }

            if (dateEnd !== undefined) {
                localVarQueryParameter['dateEnd'] = (dateEnd as any instanceof Date) ?
                    (dateEnd as any).toISOString() :
                    dateEnd;
            }

            if (asn !== undefined) {
                localVarQueryParameter['asn'] = asn;
            }

            if (location !== undefined) {
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
         * 
         * @summary Get the number of outages for locations.
         * @param {number} [limit] 
         * @param {string} [dateRange] 
         * @param {Date} [dateStart] 
         * @param {Date} [dateEnd] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        radarGetAnnotationsOutagesTop: async (limit?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, format?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/radar/annotations/outages/locations`;
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

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (dateRange !== undefined) {
                localVarQueryParameter['dateRange'] = dateRange;
            }

            if (dateStart !== undefined) {
                localVarQueryParameter['dateStart'] = (dateStart as any instanceof Date) ?
                    (dateStart as any).toISOString() :
                    dateStart;
            }

            if (dateEnd !== undefined) {
                localVarQueryParameter['dateEnd'] = (dateEnd as any instanceof Date) ?
                    (dateEnd as any).toISOString() :
                    dateEnd;
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
 * RadarAnnotationsApi - functional programming interface
 * @export
 */
export const RadarAnnotationsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Get latest Internet outages and anomalies.
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [dateRange] 
         * @param {Date} [dateStart] 
         * @param {Date} [dateEnd] 
         * @param {number} [asn] 
         * @param {string} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetAnnotationsOutages(limit?: number, offset?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, asn?: number, location?: string, format?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20072>>> {
            const localVarAxiosArgs = await RadarAnnotationsApiAxiosParamCreator(configuration).radarGetAnnotationsOutages(limit, offset, dateRange, dateStart, dateEnd, asn, location, format, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get the number of outages for locations.
         * @param {number} [limit] 
         * @param {string} [dateRange] 
         * @param {Date} [dateStart] 
         * @param {Date} [dateEnd] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetAnnotationsOutagesTop(limit?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, format?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20073>>> {
            const localVarAxiosArgs = await RadarAnnotationsApiAxiosParamCreator(configuration).radarGetAnnotationsOutagesTop(limit, dateRange, dateStart, dateEnd, format, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RadarAnnotationsApi - factory interface
 * @export
 */
export const RadarAnnotationsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Get latest Internet outages and anomalies.
         * @param {number} [limit] 
         * @param {number} [offset] 
         * @param {string} [dateRange] 
         * @param {Date} [dateStart] 
         * @param {Date} [dateEnd] 
         * @param {number} [asn] 
         * @param {string} [location] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetAnnotationsOutages(limit?: number, offset?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, asn?: number, location?: string, format?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20072>> {
            return RadarAnnotationsApiFp(configuration).radarGetAnnotationsOutages(limit, offset, dateRange, dateStart, dateEnd, asn, location, format, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get the number of outages for locations.
         * @param {number} [limit] 
         * @param {string} [dateRange] 
         * @param {Date} [dateStart] 
         * @param {Date} [dateEnd] 
         * @param {string} [format] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async radarGetAnnotationsOutagesTop(limit?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, format?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20073>> {
            return RadarAnnotationsApiFp(configuration).radarGetAnnotationsOutagesTop(limit, dateRange, dateStart, dateEnd, format, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RadarAnnotationsApi - object-oriented interface
 * @export
 * @class RadarAnnotationsApi
 * @extends {BaseAPI}
 */
export class RadarAnnotationsApi extends BaseAPI {
    /**
     * 
     * @summary Get latest Internet outages and anomalies.
     * @param {number} [limit] 
     * @param {number} [offset] 
     * @param {string} [dateRange] 
     * @param {Date} [dateStart] 
     * @param {Date} [dateEnd] 
     * @param {number} [asn] 
     * @param {string} [location] 
     * @param {string} [format] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RadarAnnotationsApi
     */
    public async radarGetAnnotationsOutages(limit?: number, offset?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, asn?: number, location?: string, format?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20072>> {
        return RadarAnnotationsApiFp(this.configuration).radarGetAnnotationsOutages(limit, offset, dateRange, dateStart, dateEnd, asn, location, format, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get the number of outages for locations.
     * @param {number} [limit] 
     * @param {string} [dateRange] 
     * @param {Date} [dateStart] 
     * @param {Date} [dateEnd] 
     * @param {string} [format] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RadarAnnotationsApi
     */
    public async radarGetAnnotationsOutagesTop(limit?: number, dateRange?: string, dateStart?: Date, dateEnd?: Date, format?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20073>> {
        return RadarAnnotationsApiFp(this.configuration).radarGetAnnotationsOutagesTop(limit, dateRange, dateStart, dateEnd, format, options).then((request) => request(this.axios, this.basePath));
    }
}
