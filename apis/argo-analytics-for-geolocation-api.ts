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
import { ArgoAnalyticsIdentifier } from '../models';
import { ArgoAnalyticsResponseSingle } from '../models';
import { InlineResponse4XX61 } from '../models';
/**
 * ArgoAnalyticsForGeolocationApi - axios parameter creator
 * @export
 */
export const ArgoAnalyticsForGeolocationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Argo Analytics for a zone at different PoPs
         * @param {ArgoAnalyticsIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs: async (zoneIdentifier: ArgoAnalyticsIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneIdentifier' is not null or undefined
            if (zoneIdentifier === null || zoneIdentifier === undefined) {
                throw new RequiredError('zoneIdentifier','Required parameter zoneIdentifier was null or undefined when calling argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs.');
            }
            const localVarPath = `/zones/{zone_identifier}/analytics/latency/colos`
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

            // authentication api_token required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
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
 * ArgoAnalyticsForGeolocationApi - functional programming interface
 * @export
 */
export const ArgoAnalyticsForGeolocationApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Argo Analytics for a zone at different PoPs
         * @param {ArgoAnalyticsIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(zoneIdentifier: ArgoAnalyticsIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<ArgoAnalyticsResponseSingle>>> {
            const localVarAxiosArgs = await ArgoAnalyticsForGeolocationApiAxiosParamCreator(configuration).argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(zoneIdentifier, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ArgoAnalyticsForGeolocationApi - factory interface
 * @export
 */
export const ArgoAnalyticsForGeolocationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Argo Analytics for a zone at different PoPs
         * @param {ArgoAnalyticsIdentifier} zoneIdentifier 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(zoneIdentifier: ArgoAnalyticsIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<ArgoAnalyticsResponseSingle>> {
            return ArgoAnalyticsForGeolocationApiFp(configuration).argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(zoneIdentifier, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ArgoAnalyticsForGeolocationApi - object-oriented interface
 * @export
 * @class ArgoAnalyticsForGeolocationApi
 * @extends {BaseAPI}
 */
export class ArgoAnalyticsForGeolocationApi extends BaseAPI {
    /**
     * 
     * @summary Argo Analytics for a zone at different PoPs
     * @param {ArgoAnalyticsIdentifier} zoneIdentifier 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ArgoAnalyticsForGeolocationApi
     */
    public async argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(zoneIdentifier: ArgoAnalyticsIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<ArgoAnalyticsResponseSingle>> {
        return ArgoAnalyticsForGeolocationApiFp(this.configuration).argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs(zoneIdentifier, options).then((request) => request(this.axios, this.basePath));
    }
}
