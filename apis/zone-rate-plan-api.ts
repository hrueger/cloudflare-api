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
import { BillSubsApiIdentifier } from '../models';
import { BillSubsApiPlanResponseCollection } from '../models';
import { InlineResponse200200 } from '../models';
import { InlineResponse200201 } from '../models';
import { InlineResponse4XX371 } from '../models';
import { InlineResponse4XX372 } from '../models';
import { InlineResponse4XX373 } from '../models';
/**
 * ZoneRatePlanApi - axios parameter creator
 * @export
 */
export const ZoneRatePlanApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Details of the available plan that the zone can subscribe to.
         * @summary Available Plan Details
         * @param {BillSubsApiIdentifier} planIdentifier 
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneRatePlanAvailablePlanDetails: async (planIdentifier: BillSubsApiIdentifier, zoneIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'planIdentifier' is not null or undefined
            if (planIdentifier === null || planIdentifier === undefined) {
                throw new RequiredError('planIdentifier','Required parameter planIdentifier was null or undefined when calling zoneRatePlanAvailablePlanDetails.');
            }
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling zoneRatePlanAvailablePlanDetails.');
            }
            const localVarPath = `/zones/{zone_identifier}/available_plans/{plan_identifier}`
                .replace(`{${"plan_identifier"}}`, encodeURIComponent(String(planIdentifier)))
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * Lists available plans the zone can subscribe to.
         * @summary List Available Plans
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneRatePlanListAvailablePlans: async (zoneIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling zoneRatePlanListAvailablePlans.');
            }
            const localVarPath = `/zones/{zone_identifier}/available_plans`
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
         * Lists all rate plans the zone can subscribe to.
         * @summary List Available Rate Plans
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        zoneRatePlanListAvailableRatePlans: async (zoneIdentifier: BillSubsApiIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling zoneRatePlanListAvailableRatePlans.');
            }
            const localVarPath = `/zones/{zone_identifier}/available_rate_plans`
                .replace(`{${"zone_identifier"}}`, encodeURIComponent(String(zoneIdentifier)));
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
 * ZoneRatePlanApi - functional programming interface
 * @export
 */
export const ZoneRatePlanApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Details of the available plan that the zone can subscribe to.
         * @summary Available Plan Details
         * @param {BillSubsApiIdentifier} planIdentifier 
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneRatePlanAvailablePlanDetails(planIdentifier: BillSubsApiIdentifier, zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200201>>> {
            const localVarAxiosArgs = await ZoneRatePlanApiAxiosParamCreator(configuration).zoneRatePlanAvailablePlanDetails(planIdentifier, zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists available plans the zone can subscribe to.
         * @summary List Available Plans
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneRatePlanListAvailablePlans(zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse200200>>> {
            const localVarAxiosArgs = await ZoneRatePlanApiAxiosParamCreator(configuration).zoneRatePlanListAvailablePlans(zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Lists all rate plans the zone can subscribe to.
         * @summary List Available Rate Plans
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneRatePlanListAvailableRatePlans(zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<BillSubsApiPlanResponseCollection>>> {
            const localVarAxiosArgs = await ZoneRatePlanApiAxiosParamCreator(configuration).zoneRatePlanListAvailableRatePlans(zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ZoneRatePlanApi - factory interface
 * @export
 */
export const ZoneRatePlanApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Details of the available plan that the zone can subscribe to.
         * @summary Available Plan Details
         * @param {BillSubsApiIdentifier} planIdentifier 
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneRatePlanAvailablePlanDetails(planIdentifier: BillSubsApiIdentifier, zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200201>> {
            return ZoneRatePlanApiFp(configuration).zoneRatePlanAvailablePlanDetails(planIdentifier, zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists available plans the zone can subscribe to.
         * @summary List Available Plans
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneRatePlanListAvailablePlans(zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse200200>> {
            return ZoneRatePlanApiFp(configuration).zoneRatePlanListAvailablePlans(zoneIdentifier, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all rate plans the zone can subscribe to.
         * @summary List Available Rate Plans
         * @param {BillSubsApiIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async zoneRatePlanListAvailableRatePlans(zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<BillSubsApiPlanResponseCollection>> {
            return ZoneRatePlanApiFp(configuration).zoneRatePlanListAvailableRatePlans(zoneIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ZoneRatePlanApi - object-oriented interface
 * @export
 * @class ZoneRatePlanApi
 * @extends {BaseAPI}
 */
export class ZoneRatePlanApi extends BaseAPI {
    /**
     * Details of the available plan that the zone can subscribe to.
     * @summary Available Plan Details
     * @param {BillSubsApiIdentifier} planIdentifier 
     * @param {BillSubsApiIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneRatePlanApi
     */
    public async zoneRatePlanAvailablePlanDetails(planIdentifier: BillSubsApiIdentifier, zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200201>> {
        return ZoneRatePlanApiFp(this.configuration).zoneRatePlanAvailablePlanDetails(planIdentifier, zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists available plans the zone can subscribe to.
     * @summary List Available Plans
     * @param {BillSubsApiIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneRatePlanApi
     */
    public async zoneRatePlanListAvailablePlans(zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse200200>> {
        return ZoneRatePlanApiFp(this.configuration).zoneRatePlanListAvailablePlans(zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Lists all rate plans the zone can subscribe to.
     * @summary List Available Rate Plans
     * @param {BillSubsApiIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ZoneRatePlanApi
     */
    public async zoneRatePlanListAvailableRatePlans(zoneIdentifier: BillSubsApiIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<BillSubsApiPlanResponseCollection>> {
        return ZoneRatePlanApiFp(this.configuration).zoneRatePlanListAvailableRatePlans(zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}