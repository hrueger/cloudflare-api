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
import { InlineResponse20013 } from '../models';
import { InlineResponse4XX74 } from '../models';
/**
 * CloudflareIPsApi - axios parameter creator
 * @export
 */
export const CloudflareIPsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.
         * @summary Cloudflare/JD Cloud IP Details
         * @param {string} [networks] Specified as &#x60;jdcloud&#x60; to list IPs used by JD Cloud data centers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        cloudflareIPsCloudflareIpDetails: async (networks?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ips`;
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

            if (networks !== undefined) {
                localVarQueryParameter['networks'] = networks;
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
 * CloudflareIPsApi - functional programming interface
 * @export
 */
export const CloudflareIPsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.
         * @summary Cloudflare/JD Cloud IP Details
         * @param {string} [networks] Specified as &#x60;jdcloud&#x60; to list IPs used by JD Cloud data centers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareIPsCloudflareIpDetails(networks?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20013>>> {
            const localVarAxiosArgs = await CloudflareIPsApiAxiosParamCreator(configuration).cloudflareIPsCloudflareIpDetails(networks, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CloudflareIPsApi - factory interface
 * @export
 */
export const CloudflareIPsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.
         * @summary Cloudflare/JD Cloud IP Details
         * @param {string} [networks] Specified as &#x60;jdcloud&#x60; to list IPs used by JD Cloud data centers.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async cloudflareIPsCloudflareIpDetails(networks?: string, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20013>> {
            return CloudflareIPsApiFp(configuration).cloudflareIPsCloudflareIpDetails(networks, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CloudflareIPsApi - object-oriented interface
 * @export
 * @class CloudflareIPsApi
 * @extends {BaseAPI}
 */
export class CloudflareIPsApi extends BaseAPI {
    /**
     * Get IPs used on the Cloudflare/JD Cloud network, see https://www.cloudflare.com/ips for Cloudflare IPs or https://developers.cloudflare.com/china-network/reference/infrastructure/ for JD Cloud IPs.
     * @summary Cloudflare/JD Cloud IP Details
     * @param {string} [networks] Specified as &#x60;jdcloud&#x60; to list IPs used by JD Cloud data centers.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CloudflareIPsApi
     */
    public async cloudflareIPsCloudflareIpDetails(networks?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20013>> {
        return CloudflareIPsApiFp(this.configuration).cloudflareIPsCloudflareIpDetails(networks, options).then((request) => request(this.axios, this.basePath));
    }
}