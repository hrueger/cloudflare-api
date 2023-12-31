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
import { InlineResponse4XX175 } from '../models';
import { VXFDQCwXComponentsSchemasResponseCollection } from '../models';
import { VXFDQCwXOriginHealthy } from '../models';
import { VXFDQCwXPoolName } from '../models';
import { VXFDQCwXSchemasIdentifier } from '../models';
import { VXFDQCwXUntil } from '../models';
/**
 * LoadBalancerHealthcheckEventsApi - axios parameter creator
 * @export
 */
export const LoadBalancerHealthcheckEventsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * List origin health changes.
         * @summary List Healthcheck Events
         * @param {VXFDQCwXUntil} [until] 
         * @param {VXFDQCwXPoolName} [poolName] 
         * @param {VXFDQCwXOriginHealthy} [originHealthy] 
         * @param {VXFDQCwXSchemasIdentifier} [identifier] 
         * @param {Date} [since] 
         * @param {string} [originName] 
         * @param {boolean} [poolHealthy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loadBalancerHealthcheckEventsListHealthcheckEvents: async (until?: VXFDQCwXUntil, poolName?: VXFDQCwXPoolName, originHealthy?: VXFDQCwXOriginHealthy, identifier?: VXFDQCwXSchemasIdentifier, since?: Date, originName?: string, poolHealthy?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/user/load_balancing_analytics/events`;
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

            if (until !== undefined) {
                localVarQueryParameter['until'] = until;
            }

            if (poolName !== undefined) {
                localVarQueryParameter['pool_name'] = poolName;
            }

            if (originHealthy !== undefined) {
                localVarQueryParameter['origin_healthy'] = originHealthy;
            }

            if (identifier !== undefined) {
                localVarQueryParameter['identifier'] = identifier;
            }

            if (since !== undefined) {
                localVarQueryParameter['since'] = (since as any instanceof Date) ?
                    (since as any).toISOString() :
                    since;
            }

            if (originName !== undefined) {
                localVarQueryParameter['origin_name'] = originName;
            }

            if (poolHealthy !== undefined) {
                localVarQueryParameter['pool_healthy'] = poolHealthy;
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
 * LoadBalancerHealthcheckEventsApi - functional programming interface
 * @export
 */
export const LoadBalancerHealthcheckEventsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * List origin health changes.
         * @summary List Healthcheck Events
         * @param {VXFDQCwXUntil} [until] 
         * @param {VXFDQCwXPoolName} [poolName] 
         * @param {VXFDQCwXOriginHealthy} [originHealthy] 
         * @param {VXFDQCwXSchemasIdentifier} [identifier] 
         * @param {Date} [since] 
         * @param {string} [originName] 
         * @param {boolean} [poolHealthy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loadBalancerHealthcheckEventsListHealthcheckEvents(until?: VXFDQCwXUntil, poolName?: VXFDQCwXPoolName, originHealthy?: VXFDQCwXOriginHealthy, identifier?: VXFDQCwXSchemasIdentifier, since?: Date, originName?: string, poolHealthy?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<VXFDQCwXComponentsSchemasResponseCollection>>> {
            const localVarAxiosArgs = await LoadBalancerHealthcheckEventsApiAxiosParamCreator(configuration).loadBalancerHealthcheckEventsListHealthcheckEvents(until, poolName, originHealthy, identifier, since, originName, poolHealthy, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * LoadBalancerHealthcheckEventsApi - factory interface
 * @export
 */
export const LoadBalancerHealthcheckEventsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * List origin health changes.
         * @summary List Healthcheck Events
         * @param {VXFDQCwXUntil} [until] 
         * @param {VXFDQCwXPoolName} [poolName] 
         * @param {VXFDQCwXOriginHealthy} [originHealthy] 
         * @param {VXFDQCwXSchemasIdentifier} [identifier] 
         * @param {Date} [since] 
         * @param {string} [originName] 
         * @param {boolean} [poolHealthy] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loadBalancerHealthcheckEventsListHealthcheckEvents(until?: VXFDQCwXUntil, poolName?: VXFDQCwXPoolName, originHealthy?: VXFDQCwXOriginHealthy, identifier?: VXFDQCwXSchemasIdentifier, since?: Date, originName?: string, poolHealthy?: boolean, options?: AxiosRequestConfig): Promise<AxiosResponse<VXFDQCwXComponentsSchemasResponseCollection>> {
            return LoadBalancerHealthcheckEventsApiFp(configuration).loadBalancerHealthcheckEventsListHealthcheckEvents(until, poolName, originHealthy, identifier, since, originName, poolHealthy, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoadBalancerHealthcheckEventsApi - object-oriented interface
 * @export
 * @class LoadBalancerHealthcheckEventsApi
 * @extends {BaseAPI}
 */
export class LoadBalancerHealthcheckEventsApi extends BaseAPI {
    /**
     * List origin health changes.
     * @summary List Healthcheck Events
     * @param {VXFDQCwXUntil} [until] 
     * @param {VXFDQCwXPoolName} [poolName] 
     * @param {VXFDQCwXOriginHealthy} [originHealthy] 
     * @param {VXFDQCwXSchemasIdentifier} [identifier] 
     * @param {Date} [since] 
     * @param {string} [originName] 
     * @param {boolean} [poolHealthy] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoadBalancerHealthcheckEventsApi
     */
    public async loadBalancerHealthcheckEventsListHealthcheckEvents(until?: VXFDQCwXUntil, poolName?: VXFDQCwXPoolName, originHealthy?: VXFDQCwXOriginHealthy, identifier?: VXFDQCwXSchemasIdentifier, since?: Date, originName?: string, poolHealthy?: boolean, options?: AxiosRequestConfig) : Promise<AxiosResponse<VXFDQCwXComponentsSchemasResponseCollection>> {
        return LoadBalancerHealthcheckEventsApiFp(this.configuration).loadBalancerHealthcheckEventsListHealthcheckEvents(until, poolName, originHealthy, identifier, since, originName, poolHealthy, options).then((request) => request(this.axios, this.basePath));
    }
}
