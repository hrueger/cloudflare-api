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
import { InlineResponse20040 } from '../models';
import { InlineResponse20041 } from '../models';
import { InlineResponse4XX214 } from '../models';
import { InlineResponse4XX215 } from '../models';
import { RTW3sz4nIdentifier } from '../models';
import { ZoneIdManagedHeadersBody } from '../models';
/**
 * ManagedTransformsApi - axios parameter creator
 * @export
 */
export const ManagedTransformsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Fetches a list of all Managed Transforms.
         * @summary List Managed Transforms
         * @param {RTW3sz4nIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        managedTransformsListManagedTransforms: async (zoneId: RTW3sz4nIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'zoneId' is not null or undefined
            if (zoneId === null || zoneId === undefined) {
                throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling managedTransformsListManagedTransforms.');
            }
            const localVarPath = `/zones/{zone_id}/managed_headers`
                .replace(`{${"zone_id"}}`, encodeURIComponent(String(zoneId)));
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
         * Updates the status of one or more Managed Transforms.
         * @summary Update status of Managed Transforms
         * @param {ZoneIdManagedHeadersBody} body 
         * @param {RTW3sz4nIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        managedTransformsUpdateStatusOfManagedTransforms: async (body: ZoneIdManagedHeadersBody, zoneId: RTW3sz4nIdentifier, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'body' is not null or undefined
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling managedTransformsUpdateStatusOfManagedTransforms.');
            }
            // verify required parameter 'zoneId' is not null or undefined
            if (zoneId === null || zoneId === undefined) {
                throw new RequiredError('zoneId','Required parameter zoneId was null or undefined when calling managedTransformsUpdateStatusOfManagedTransforms.');
            }
            const localVarPath = `/zones/{zone_id}/managed_headers`
                .replace(`{${"zone_id"}}`, encodeURIComponent(String(zoneId)));
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
 * ManagedTransformsApi - functional programming interface
 * @export
 */
export const ManagedTransformsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Fetches a list of all Managed Transforms.
         * @summary List Managed Transforms
         * @param {RTW3sz4nIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async managedTransformsListManagedTransforms(zoneId: RTW3sz4nIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20040>>> {
            const localVarAxiosArgs = await ManagedTransformsApiAxiosParamCreator(configuration).managedTransformsListManagedTransforms(zoneId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Updates the status of one or more Managed Transforms.
         * @summary Update status of Managed Transforms
         * @param {ZoneIdManagedHeadersBody} body 
         * @param {RTW3sz4nIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async managedTransformsUpdateStatusOfManagedTransforms(body: ZoneIdManagedHeadersBody, zoneId: RTW3sz4nIdentifier, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<InlineResponse20041>>> {
            const localVarAxiosArgs = await ManagedTransformsApiAxiosParamCreator(configuration).managedTransformsUpdateStatusOfManagedTransforms(body, zoneId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ManagedTransformsApi - factory interface
 * @export
 */
export const ManagedTransformsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Fetches a list of all Managed Transforms.
         * @summary List Managed Transforms
         * @param {RTW3sz4nIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async managedTransformsListManagedTransforms(zoneId: RTW3sz4nIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20040>> {
            return ManagedTransformsApiFp(configuration).managedTransformsListManagedTransforms(zoneId, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates the status of one or more Managed Transforms.
         * @summary Update status of Managed Transforms
         * @param {ZoneIdManagedHeadersBody} body 
         * @param {RTW3sz4nIdentifier} zoneId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async managedTransformsUpdateStatusOfManagedTransforms(body: ZoneIdManagedHeadersBody, zoneId: RTW3sz4nIdentifier, options?: AxiosRequestConfig): Promise<AxiosResponse<InlineResponse20041>> {
            return ManagedTransformsApiFp(configuration).managedTransformsUpdateStatusOfManagedTransforms(body, zoneId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ManagedTransformsApi - object-oriented interface
 * @export
 * @class ManagedTransformsApi
 * @extends {BaseAPI}
 */
export class ManagedTransformsApi extends BaseAPI {
    /**
     * Fetches a list of all Managed Transforms.
     * @summary List Managed Transforms
     * @param {RTW3sz4nIdentifier} zoneId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagedTransformsApi
     */
    public async managedTransformsListManagedTransforms(zoneId: RTW3sz4nIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20040>> {
        return ManagedTransformsApiFp(this.configuration).managedTransformsListManagedTransforms(zoneId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Updates the status of one or more Managed Transforms.
     * @summary Update status of Managed Transforms
     * @param {ZoneIdManagedHeadersBody} body 
     * @param {RTW3sz4nIdentifier} zoneId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ManagedTransformsApi
     */
    public async managedTransformsUpdateStatusOfManagedTransforms(body: ZoneIdManagedHeadersBody, zoneId: RTW3sz4nIdentifier, options?: AxiosRequestConfig) : Promise<AxiosResponse<InlineResponse20041>> {
        return ManagedTransformsApiFp(this.configuration).managedTransformsUpdateStatusOfManagedTransforms(body, zoneId, options).then((request) => request(this.axios, this.basePath));
    }
}
